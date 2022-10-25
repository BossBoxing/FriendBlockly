/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Stepper library blocks.
 *     The Arduino Stepper library docs: http://arduino.cc/en/Reference/Stepper
 */
'use strict';

goog.provide('Blockly.Arduino.motordc');

goog.require('Blockly.Arduino');

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['motor_dc'] = function(block) {
  var dropdown_port_motordc = block.getFieldValue('PORT_MOTORDC');
  var value_power_motordc = Blockly.Arduino.valueToCode(block, 'POWER_MOTORDC', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'motor(' + dropdown_port_motordc + ',' + value_power_motordc +');\n';
  return code;
};