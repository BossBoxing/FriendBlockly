/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for Arduino Digital and Analogue input/output.
 *     Arduino built in function docs: http://arduino.cc/en/Reference/HomePage
 */
'use strict';

goog.provide('Blockly.Arduino.io_friend_robot');

goog.require('Blockly.Arduino');


/**
 * Function for 'set pin' (X) to a state (Y).
 * Arduino code: setup { pinMode(X, OUTPUT); }
 *               loop  { digitalWrite(X, Y); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['io_out'] = function (block) {
  var pin = block.getFieldValue('PIN');
  var stateOutput = Blockly.Arduino.valueToCode(
    block, 'STATE', Blockly.Arduino.ORDER_ATOMIC) || 'LOW';

  // Blockly.Arduino.reservePin(
  //     block, pin, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

  // var pinSetupCode = 'pinMode(' + pin + ', OUTPUT);';
  // Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'out(' + pin + ', ' + stateOutput + ');\n';
  return code;
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_in'] = function (block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
    block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  // var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  // Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'in(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for reading an analogue pin value (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { analogRead(X)      }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['io_analog'] = function (block) {
  var pin = block.getFieldValue('PIN');
  Blockly.Arduino.reservePin(
    block, pin, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');

  // var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  // Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'analog(' + pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['read_sw_ok'] = function (block) {
  // var pin = block.getFieldValue('PIN');
  // Blockly.Arduino.reservePin(
  //     block, pin, Blockly.Arduino.PinTypes.INPUT, 'Digital Read');

  // var pinSetupCode = 'pinMode(' + pin + ', INPUT);';
  // Blockly.Arduino.addSetup('io_' + pin, pinSetupCode, false);

  var code = 'SW_OK()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Function for reading a digital pin (X).
 * Arduino code: setup { pinMode(X, INPUT); }
 *               loop  { digitalRead(X)     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['read_knob'] = function (block) {
  var value_min = Blockly.Arduino.valueToCode(block, 'min', Blockly.Arduino.ORDER_ATOMIC);
  var value_max = Blockly.Arduino.valueToCode(block, 'max', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'knob(' + value_min + ',' + value_max + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};