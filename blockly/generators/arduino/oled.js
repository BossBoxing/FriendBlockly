/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Stepper library blocks.
 *     The Arduino Stepper library docs: http://arduino.cc/en/Reference/Stepper
 */
'use strict';

goog.provide('Blockly.Arduino.oled');

goog.require('Blockly.Arduino');

/**
 * Code generator of block for writing to the serial com.
 * Arduino code: loop { Serial.print(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code.
 */
Blockly.Arduino['oled_text'] = function (block) {
    var a = this.getFieldValue("COL"),
        b = this.getFieldValue("ROW"),
        c = this.getFieldValue("TXT");
    return "oled(" + a + "," + b + ',"' + c + '");\n'
};

/**
* Code generator of block for writing to the serial com.
* Arduino code: loop { Serial.print(X); }
* @param {!Blockly.Block} block Block to generate the code from.
* @return {string} Completed code.
*/
Blockly.Arduino['oledmode'] = function (block) {
    var dropdown_mode = block.getFieldValue('MODE');
    return "oledMode(" + dropdown_mode + ");\n"
};

/**
* Code generator of block for writing to the serial com.
* Arduino code: loop { Serial.print(X); }
* @param {!Blockly.Block} block Block to generate the code from.
* @return {string} Completed code.
*/
Blockly.Arduino['oled_set_text_size'] = function (block) {
    var dropdown_mode = block.getFieldValue('MODE');
    return "setTextSize(" + dropdown_mode + ");\n"
};

/**
* Code generator of block for writing to the serial com.
* Arduino code: loop { Serial.print(X); }
* @param {!Blockly.Block} block Block to generate the code from.
* @return {string} Completed code.
*/
Blockly.Arduino['oled_variable_text'] = function(a) {
    a=Blockly.Arduino.valueToCode(a,"VARIABLE_SETTYPE_INPUT",Blockly.Arduino.ORDER_ASSIGNMENT)||"0";
    var b=this.getFieldValue("ROW"),
    c=this.getFieldValue("COL"),
    d=this.getFieldValue("VAR_TYPE"),
    e=this.getFieldValue("PREFIX"),
    f=this.getFieldValue("SUBFIX");
    return"oled("+c+","+b+',"'+e+d+f+'",'+a+");\n"
};

/**
* Code generator of block for writing to the serial com.
* Arduino code: loop { Serial.print(X); }
* @param {!Blockly.Block} block Block to generate the code from.
* @return {string} Completed code.
*/
Blockly.Arduino['oled_clear'] = function(block) {
    return "oledClear();\n"
};