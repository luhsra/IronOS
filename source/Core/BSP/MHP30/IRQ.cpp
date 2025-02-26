/*
 * IRQ.c
 *
 *  Created on: 30 May 2020
 *      Author: Ralim
 */

#include "IRQ.h"
#include "Pins.h"
#include "configuration.h"

/*
 * Catch the IRQ that says that the conversion is done on the temperature
 * readings coming in Once these have come in we can unblock the PID so that it
 * runs again
 */
void HAL_ADC_ConvCpltCallback(ADC_HandleTypeDef *hadc) {
  static uint8_t counter                  = 0;
  BaseType_t     xHigherPriorityTaskWoken = pdFALSE;
  if (hadc == &hadc1) {
    counter++;
    if (counter % 32 == 0) { // 64 = 128ms, 32 = 64ms
      if (pidTaskNotification) {
        vTaskNotifyGiveFromISR(pidTaskNotification, &xHigherPriorityTaskWoken);
        portYIELD_FROM_ISR(xHigherPriorityTaskWoken);
      }
    }
  }
}
void HAL_I2C_MasterRxCpltCallback(I2C_HandleTypeDef *hi2c __unused) { FRToSI2C::CpltCallback(); }
void HAL_I2C_MasterTxCpltCallback(I2C_HandleTypeDef *hi2c __unused) { FRToSI2C::CpltCallback(); }
void HAL_I2C_MemTxCpltCallback(I2C_HandleTypeDef *hi2c __unused) { FRToSI2C::CpltCallback(); }
void HAL_I2C_ErrorCallback(I2C_HandleTypeDef *hi2c __unused) { FRToSI2C::CpltCallback(); }
void HAL_I2C_AbortCpltCallback(I2C_HandleTypeDef *hi2c __unused) { FRToSI2C::CpltCallback(); }
void HAL_I2C_MemRxCpltCallback(I2C_HandleTypeDef *hi2c __unused) { FRToSI2C::CpltCallback(); }

extern osThreadId POWTaskHandle;
void              HAL_GPIO_EXTI_Callback(uint16_t GPIO_Pin) {
  (void)GPIO_Pin;
  // Notify POW thread that an irq occured
  if (POWTaskHandle != nullptr) {
    BaseType_t xHigherPriorityTaskWoken = pdFALSE;
    xTaskNotifyFromISR(POWTaskHandle, 1, eSetBits, &xHigherPriorityTaskWoken);
    /* Force a context switch if xHigherPriorityTaskWoken is now set to pdTRUE.
    The macro used to do this is dependent on the port and may be called
    portEND_SWITCHING_ISR. */
    portYIELD_FROM_ISR(xHigherPriorityTaskWoken);
  }
}

bool getFUS302IRQLow() {
#if POW_PD
  // Return true if the IRQ line is still held low
  return HAL_GPIO_ReadPin(INT_PD_GPIO_Port, INT_PD_Pin) == GPIO_PIN_RESET;
#else
  return false;
#endif
}
