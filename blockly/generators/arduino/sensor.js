/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.sensor');

goog.require('Blockly.Arduino');

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['encoder_read'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  // var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  // Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'encoder(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for reading an analogue pin value (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { analogRead(X)      }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['getdist'] = function(block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
      block, pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

  // var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  // Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'getdist(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for reading an analogue pin value (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { analogRead(X)      }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['ultrasonic'] = function(block) {
  var pinT = block.getFieldValue('Trig');
  var pinE = block.getFieldValue('Echo');
  Blockly.Arduino.reservePin(
      block, pinT, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');
  Blockly.Arduino.reservePin(
        block, pinE, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  // var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  // Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'ultrasonic(' + pinT + ',' + pinE + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};