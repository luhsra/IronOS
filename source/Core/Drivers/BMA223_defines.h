/*
 * BMA223_defines.h
 *
 *  Created on: 18 Sep. 2020
 *      Author: Ralim
 */

#ifndef CORE_DRIVERS_BMA223_DEFINES_H_
#define CORE_DRIVERS_BMA223_DEFINES_H_

#define BMA223_ADDRESS       0x18 << 1
#define BMA223_BGW_CHIPID    0x00
#define BMA223_ACCD_X_LSB    0x02
#define BMA223_ACCD_X_MSB    0x03
#define BMA223_ACCD_Y_LSB    0x04
#define BMA223_ACCD_Y_MSB    0x05
#define BMA223_ACCD_Z_LSB    0x06
#define BMA223_ACCD_Z_MSB    0x07
#define BMA223_ACCD_TEMP     0x08
#define BMA223_INT_STATUS_0  0x09
#define BMA223_INT_STATUS_1  0x0A
#define BMA223_INT_STATUS_2  0x0B
#define BMA223_INT_STATUS_3  0x0C
#define BMA223_FIFO_STATUS   0x0E
#define BMA223_PMU_RANGE     0x0F
#define BMA223_PMU_BW        0x10
#define BMA223_PMU_LPW       0x11
#define BMA223_PMU_LOW_POWER 0x012
#define BMA223_ACCD_HBW      0x13
#define BMA223_BGW_SOFTRESET 0x14
#define BMA223_INT_EN_0      0x16
#define BMA223_INT_EN_1      0x17
#define BMA223_INT_EN_2      0x18
#define BMA223_INT_MAP_0     0x19
#define BMA223_INT_MAP_1     0x1A
#define BMA223_INT_MAP_2     0x1B
#define BMA223_INT_SRC       0x1E
#define BMA223_INT_OUT_CTRL  0x20
#define BMA223_INT_RST_LATCH 0x21
#define BMA223_INT_0         0x22
#define BMA223_INT_1         0x23
#define BMA223_INT_2         0x24
#define BMA223_INT_3         0x25
#define BMA223_INT_4         0x26
#define BMA223_INT_5         0x27
#define BMA223_INT_6         0x28
#define BMA223_INT_7         0x29
#define BMA223_INT_8         0x2A
#define BMA223_INT_9         0x2B
#define BMA223_INT_A         0x2C
#define BMA223_INT_B         0x2D
#define BMA223_INT_C         0x2E
#define BMA223_INT_D         0x2F
#define BMA223_FIFO_CONFIG_0 0x30
#define BMA223_PMU_SELF_TEST 0x32
#define BMA223_TRIM_NVM_CTRL 0x33
#define BMA223_BGW_SPI3_WDT  0x34
#define BMA223_OFC_CTRL      0x36
#define BMA223_OFC_SETTING   0x37
#define BMA223_OFC_OFFSET_X  0x38
#define BMA223_OFC_OFFSET_Y  0x39
#define BMA223_OFC_OFFSET_Z  0x3A
#define BMA223_TRIM_GP0      0x3B
#define BMA223_TRIM_GP1      0x3C
#define BMA223_FIFO_CONFIG_1 0x3E
#define BMA223_FIFO_DATA     0x3F

#endif /* CORE_DRIVERS_BMA223_DEFINES_H_ */
