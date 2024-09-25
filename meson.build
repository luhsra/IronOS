project('IronOS', 'c', 'cpp')

fs = import('fs')

llvm_version = ['>=14', '<15']
llvm_dep = dependency('llvm', method: 'config-tool', version: llvm_version, include_type: 'system')

toolchains = subproject('toolchains', default_options: {'enable_riscv': 'enabled'})
assert(toolchains.get_variable('riscv_enabled'), 'IronOS needs a RISC-V toolchain.')
llvm_bindir = toolchains.get_variable('llvm_bindir')
llvm_objcopy = toolchains.get_variable('llvm_objcopy')
# TODO llvm_ld does not work here?
# llvm_ld = toolchains.get_variable('llvm_ld')
riscv_ld = toolchains.get_variable('riscv_ld')

gcc_riscv_version = toolchains.get_variable('gcc_riscv_version')
riscv_cxx_dir = toolchains.get_variable('riscv_cxx_dir')
riscv_triple = toolchains.get_variable('riscv_triple')
riscv_libgcc_dir = toolchains.get_variable('riscv_libgcc_dir')
riscv_include_path = toolchains.get_variable('riscv_include_path')
riscv_link_path = toolchains.get_variable('riscv_link_path')
riscv_size = toolchains.get_variable('riscv_size')

py3_mod = import('python')
py3_inst = py3_mod.find_installation('python3')

gllvm_meson = subproject('gllvm-meson')
gclang = gllvm_meson.get_variable('gclang')
gclang_cpp = gllvm_meson.get_variable('gclang_cpp')
get_bc = gllvm_meson.get_variable('get_bc')

build_tools_env = gllvm_meson.get_variable('build_tools_env')

make_tool = find_program('make')

# bdflib
py_with_bdflib = py3_mod.find_installation('python3', modules: 'bdflib', required: false)
if not py_with_bdflib.found()
  if get_option('offline')
    error('bdflib not found and not allowed to download it (offline is set).')
  endif
  bdflib_dir = meson.current_build_dir() / 'bdflib_local'
  # bdflib = find_program(west_dir / 'bin' / 'west', required: false)
  build_tools_env.append('PYTHONPATH', bdflib_dir)
  if not fs.exists(bdflib_dir / 'bdflib' / '__init__.py')
    py3_inst = py3_mod.find_installation('python3', modules: 'pip')
    run_command(py3_inst, '-m', 'pip', 'install', f'--target=@bdflib_dir@', 'bdflib', check: true)
  endif
endif

# TODO add ARA specific FreeRTOS
# freertos = subproject('freertos')

riscv_mode = 'rv32imac' / 'ilp32'
common_flags = [
  '-target riscv32-unknown-none-elf',
]
aflags = common_flags + [
  # '-mno-relax',
]
cflags = common_flags + [
  '-isystem ' + riscv_include_path,
  '-isystem ' + riscv_include_path / 'newlib-nano',
  '-nodefaultlibs',
]
cxxflags = cflags + [
  '-I' + riscv_cxx_dir,
  '-I' + riscv_cxx_dir / riscv_triple / riscv_mode,
]
linkerflags = [
  '-fuse-ld=ld',
  '--ld-path=@0@'.format(riscv_ld.full_path()),
  '-Wl,--start-group -L' + riscv_link_path / riscv_mode + ' -lc_nano -lm_nano -Wl,--end-group',
  '-Wl,--start-group -L' + riscv_libgcc_dir / riscv_mode + ' -lgcc -Wl,--end-group',
  '-Wl,-melf32lriscv',
]

ironos_build = meson.current_build_dir() / 'ironos_build'
ironos_bc = custom_target('ironos-bc',
  output: 'ironos.bc',
  env: build_tools_env,
  command: [
    py3_inst, files('make_ironos_bitcode.py'),
    '--build-dir', ironos_build,
    '--src-dir', meson.current_source_dir(),
    '--llvm-bindir', llvm_bindir,
    '--make-program', make_tool.full_path(),
    '--get-bc-program', get_bc.full_path(),
    '--llvm-ld-program', riscv_ld.full_path(),
    '--llvm-objcopy-program', llvm_objcopy.full_path(),
    '--output', '@OUTPUT0@',
    '--gclang-program', gclang.full_path(),
    '--meson-build-dir', meson.global_build_root(),
    '--jobs', '1',
    '--make-args', [ 'CC=' + gclang.full_path(),
                     'CPP=' + gclang_cpp.full_path(),
                     'AS=' + gclang.full_path(),
                     'OBJCOPY=' + llvm_objcopy.full_path(),
                     'SIZE=' + riscv_size.full_path(),
                     'model=Pinecil',
                     'DEV_CFLAGS=' + ' '.join(cflags),
                     'DEV_CXXFLAGS=' + ' '.join(cxxflags),
                     'DEV_LDFLAGS=' + ' '.join(linkerflags),
                     'DEV_AFLAGS=' + ' '.join(aflags) ]
  ],
)

freertos_config = meson.current_source_dir() / 'source' / 'Core' / 'BSP' / 'Pine64' / 'FreeRTOSConfig.h'
va_corrections = files('ironos_map.json')[0]

cloc_app = [meson.current_source_dir() / 'source']
