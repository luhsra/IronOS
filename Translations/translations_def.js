var def =
{
	"messages": [
		{
			"id": "SettingsCalibrationWarning",
			"description": "Confirmation message shown before performing an offset calibration. Should warn the user to make sure tip and handle are at the same temperature."
		},
		{
			"id": "SettingsResetWarning",
			"description": "Confirmation message shown before confirming a settings reset."
		},
		{
			"id": "UVLOWarningString",
			"maxLen": 8,
			"description": "Warning text shown when the unit turns off due to undervoltage in simple mode."
		},
		{
			"id": "UndervoltageString",
			"maxLen": 15,
			"description": "Warning text shown when the unit turns off due to undervoltage in advanced mode."
		},
		{
			"id": "InputVoltageString",
			"maxLen": 11,
			"note": "Preferably end with a space",
			"description": "Prefix text for 'Input Voltage' shown before showing the input voltage reading."

		},
		{
			"id": "SleepingSimpleString",
			"maxLen": 4,
			"description": "The text shown to indicate the unit is in sleep mode when the advanced view is NOT on."
		},
		{
			"id": "SleepingAdvancedString",
			"maxLen": 15,
			"description": "The text shown to indicate the unit is in sleep mode when the advanced view is turned on."
		},
		{
			"id": "SleepingTipAdvancedString",
			"maxLen": 6,
			"description": "The prefix text shown before tip temperature when the unit is sleeping with advanced view on."
		},
		{
			"id": "OffString",
			"maxLen": 3,
			"description": "Shown when a setting is turned off."
		}
	],
	"messagesWarn": [
		{
			"id": "SettingsResetMessage",
			"description": "Shown when the settings are reset to factory defaults either by the user or by incompatible firmware changes."
		},
		{
			"id": "NoAccelerometerMessage",
			"description": "No accelerometer could be communicated with. This means that either the device's accelerometer is broken or unknown to IronOS. All motion-based settings are disabled and motion-based features will not work."
		},
		{
			"id": "NoPowerDeliveryMessage",
			"description": "The IC required for USB-PD could not be communicated with. This is an error warning that USB-PD WILL NOT FUNCTION. Generally indicative of either a hardware or software issues."
		},
		{
			"id": "LockingKeysString",
			"description": "Shown when keys are locked"
		},
		{
			"id": "UnlockingKeysString",
			"description": "Shown when keys are unlocked"
		},
		{
			"id": "WarningKeysLockedString",
			"description": "Warning that is shown when input is ignored due to the key lock being on"
		},
		{
			"id": "WarningThermalRunaway",
			"description": "Warning text shown when the software has disabled the heater as a safety precaution as the temperature reading didn't react as expected."
		}
	],
	"characters": [
		{
			"id": "SettingRightChar",
			"len": 1,
			"description": "Shown for fixed Right-handed display rotation."
		},
		{
			"id": "SettingLeftChar",
			"len": 1,
			"description": "Shown for fixed Left-handed display rotation."
		},
		{
			"id": "SettingAutoChar",
			"len": 1,
			"description": "Shown for automatic display rotation."
		},
		{
			"id": "SettingFastChar",
			"len": 1,
			"description": "Shown when a setting is set to a fast value i.e. animation speed"
		},
		{
			"id": "SettingSlowChar",
			"len": 1,
			"description": "Shown when a setting is set to a slow value i.e. animation speed"
		},
		{
			"id": "SettingMediumChar",
			"len": 1,
			"description": "Shown when a setting is set to a medium value i.e. animation speed"
		},
		{
			"id": "SettingOffChar",
			"len": 1,
			"description": "Shown when a setting is turned off"
		},
		{
			"id": "SettingStartSolderingChar",
			"len": 1,
			"description": "Shown when the auto start mode is set to go straight to soldering."
		},
		{
			"id": "SettingStartSleepChar",
			"len": 1,
			"description": "Shown when the auto start mode is set to start in sleep mode."

		},
		{
			"id": "SettingStartSleepOffChar",
			"len": 1,
			"description": "Shown when the auto start state is set to go to an off state, but on movement wake into soldering mode."

		},
		{
			"id": "SettingStartNoneChar",
			"len": 1,
			"description": "Shown when autostart state is to do nothing and go to a normal boot"
		},
		{
			"id": "SettingSensitivityOff",
			"len": 1,
			"description": "Shown when a sensitivity (hall effect sensor) is disabled. Turning off the sensor."

		},
		{
			"id": "SettingSensitivityLow",
			"len": 1,
			"description": "Shown when a sensitivity (hall effect) is not very sensitive"
		},
		{
			"id": "SettingSensitivityMedium",
			"len": 1,
			"description": "Shown when a sensitivity (hall effect) is average sensitive"
		},
		{
			"id": "SettingSensitivityHigh",
			"len": 1,
			"description": "Shown when a sensitivity (hall effect) is highly sensitive"
		},
		{
			"id": "SettingLockDisableChar",
			"len": 1,
			"default": "D",
			"description": "Shown when locking mode is turned off."

		},
		{
			"id": "SettingLockBoostChar",
			"len": 1,
			"default": "B",
			"description": "Shown when the locking mode is set to lock all buttons except for boost mode."
		},
		{
			"id": "SettingLockFullChar",
			"len": 1,
			"default": "F",
			"description": "Shown when the locking mode is set to lock all buttons."
		}
	],
	"menuGroups": [
		{
			"id": "PowerMenu",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "Menu for settings related to power. Main settings to do with the input voltage."
		},
		{
			"id": "SolderingMenu",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "Settings for soldering mode, such as boost temps, the increment used when pressing buttons and if button locking is enabled."
		},
		{
			"id": "PowerSavingMenu",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "Settings to do with power saving, such as sleep mode, sleep temps, and shutdown modes."
		},
		{
			"id": "UIMenu",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "User interface related settings, such as units."

		},
		{
			"id": "AdvancedMenu",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "Advanced settings. Misc catchall for settings that don't fit anywhere else or settings that require some thought before use."
		}
	],
	"menuOptions": [
		{
			"id": "DCInCutoff",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "When the device is powered by a battery, this adjusts the low voltage threshold for when the unit should turn off the heater to protect the battery."
		},
		{
			"id": "SleepTemperature",
			"maxLen": 4,
			"maxLen2": 9,
			"description": "Temperature the device will drop down to while asleep. Typically around halfway between off and soldering temperature."
		},
		{
			"id": "SleepTimeout",
			"maxLen": 4,
			"maxLen2": 9,
			"description": "How long of a period without movement / button-pressing is required before the device drops down to the sleep temperature."

		},
		{
			"id": "ShutdownTimeout",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "How long of a period without movement / button-pressing is required before the device turns off the tip heater completely and returns to the main idle screen."

		},
		{
			"id": "MotionSensitivity",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "Scale of how sensitive the device is to movement. Higher numbers == more sensitive. 0 == motion detection turned off."
		},
		{
			"id": "TemperatureUnit",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "If the device shows temperatures in °C or °F."

		},
		{
			"id": "AdvancedIdle",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "Should the device show an 'advanced' view on the idle screen. The advanced view uses text to show more details than the typical icons."
		},
		{
			"id": "DisplayRotation",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "If the display should rotate automatically or if it should be fixed for left- or right-handed mode."

		},
		{
			"id": "BoostTemperature",
			"maxLen": 4,
			"maxLen2": 9,
			"description": "When the unit is in soldering mode. You can hold down the button at the front of the device to temporarily override the soldering temperature to this value. This SETS the temperature, it does not ADD to it."
		},
		{
			"id": "AutoStart",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "When the device powers up, should it enter into a special mode. These settings set it to either start into soldering mode, sleeping mode or auto mode (Enters into soldering mode on the first movement)."

		},
		{
			"id": "CooldownBlink",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "If the idle screen should blink the tip temperature for attention while the tip is over 50°C. Intended as a 'tip is still hot' warning."

		},
		{
			"id": "TemperatureCalibration",
			"maxLen": 8,
			"maxLen2": 15,
			"description": "Used to calibrate the ADC+Op-amp offsets for the tip. This calibration must be performed when the tip temperature and the handle temperature are equal. Generally not required unless your device is reading more than 5°C off target."

		},
		{
			"id": "SettingsReset",
			"maxLen": 8,
			"maxLen2": 15,
			"description": "Resets all settings and calibrations to factory defaults. Does NOT erase custom user boot up logo's."
		},
		{
			"id": "VoltageCalibration",
			"maxLen": 8,
			"maxLen2": 15,
			"description": "Enters an adjustment mode where you can gradually adjust the measured voltage to compensate for any unit-to-unit variance in the voltage sense resistors."
		},
		{
			"id": "AdvancedSoldering",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "Should the device show an 'advanced' soldering view. This is a text-based view that shows more information at the cost of no nice graphics."
		},
		{
			"id": "ScrollingSpeed",
			"maxLen": 6,
			"maxLen2": 11,
			"description": "How fast the description text scrolls when hovering on a menu. Faster speeds may induce tearing, but allow reading the whole description faster."

		},
		{
			"id": "QCMaxVoltage",
			"maxLen": 8,
			"maxLen2": 15,
			"description": "This adjusts the maximum voltage the QC negotiation will adjust to. Does NOT affect USB-PD. Should be set safely based on the current rating of your power supply."
		},
		{
			"id": "PDNegTimeout",
			"maxLen": 8,
			"maxLen2": 15,
			"description": "How long until firmware stops trying to negotiate for USB-PD and tries QC instead. Longer times may help dodgy / old PD adapters, faster times move onto PD quickly. Units of 100ms. Recommended to keep small values."

		},

		{
			"id": "PowerLimit",
			"maxLen": 5,
			"maxLen2": 11,
			"description": "Allows setting a custom wattage for the device to aim to keep the AVERAGE power below. The unit can't control its peak power no matter how you set this. (Except for MHP30 which will regulate nicely to this). If USB-PD is in use, the limit will be set to the lower of this and the supplies advertised wattage."

		},
		{
			"id": "ReverseButtonTempChange",
			"maxLen": 6,
			"maxLen2": 15,
			"description": "Swaps which button increments and decrements on temperature change screens."
		},
		{
			"id": "TempChangeShortStep",
			"maxLen": 8,
			"maxLen2": 15,
			"description": "Factor by which the temperature is changed with a quick press of the buttons."

		},
		{
			"id": "TempChangeLongStep",
			"maxLen": 6,
			"maxLen2": 15,
			"description": "Factor by which the temperature is changed with a hold of the buttons."

		},
		{
			"id": "PowerPulsePower",
			"maxLen": 6,
			"maxLen2": 15,
			"description": "Enables and sets the wattage of the power pulse. Power pulse causes the device to briefly turn on the heater to draw power to avoid power banks going to sleep."

		},
		{
			"id": "HallEffSensitivity",
			"maxLen": 6,
			"maxLen2": 8,
			"description": "If the unit has a hall effect sensor (Pinecil), this adjusts how sensitive it is at detecting a magnet to put the device into sleep mode."

		},
		{
			"id": "LockingMode",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "If locking the buttons against accidental presses is enabled."
		},
		{
			"id": "MinVolCell",
			"maxLen": 4,
			"maxLen2": 9,
			"description": "When powered by a battery, this adjusts the minimum voltage per cell before shutdown. (This is multiplied by the cell count.)"
		},
		{
			"id": "AnimLoop",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "Should the menu animations loop. Only visible if the animation speed is not set to \"Off\""
		},
		{
			"id": "AnimSpeed",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "How fast should the menu animations loop, or if they should not loop at all."
		},
		{
			"id": "PowerPulseWait",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "Adjusts the time interval between power pulses. Longer gaps reduce undesired heating of the tip, but needs to be fast enough to keep your power bank awake."
		},
		{
			"id": "PowerPulseDuration",
			"maxLen": 6,
			"maxLen2": 13,
			"description": "How long should the power pulse go for. Some power banks require seeing the power draw be sustained for a certain duration to keep awake. Should be kept as short as possible to avoid wasting power / undesired heating of the tip."
		},
		{
			"id": "LanguageSwitch",
			"maxLen": 7,
			"maxLen2": 15,
			"description": "Changes the device language on multi-lingual builds."
		},
		{
			"id": "Brightness",
			"maxLen": 7,
			"maxLen2": 15,
			"description": "Display brightness. Higher values age the OLED faster due to burn-in. (However, it is notable that most of these screens die from other causes first.)"
		},
		{
			"id": "ColourInversion",
			"maxLen": 7,
			"maxLen2": 15,
			"description": "Inverts the entire OLED."
		},
		{
			"id": "LOGOTime",
			"maxLen": 7,
			"maxLen2": 15,
			"description": "Sets the duration for the boot logo (S=seconds)."
		}
	]
}
