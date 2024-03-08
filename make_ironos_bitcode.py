#!/usr/bin/env python
"""Build libmicrohttpd."""
from build_tools import run, Builder


class IronOSBuilder(Builder):
    """Build bitcode for IronOS."""
    def __init__(self):
        super().__init__(with_make=True, with_gclang=True, in_source_build=True)

    def do_build(self):
        self._copy_src()

        env = self._get_gllvm_env()
        make_dir = self.args.build_dir / 'source'
        env['PWD'] = make_dir

        make_cmd = [
            self.args.make_program,
            f'-j{self.jobs}',
        ] + self.args.make_args
        run('Executing Make', make_cmd, cwd=make_dir, env=env)

        image = self.args.build_dir / 'source' / 'Hexfile' / 'Pinecil_EN.elf'
        assert image.is_file()

        self._get_bc(image, env)


if __name__ == '__main__':
    builder = IronOSBuilder()
    builder.do_build()
