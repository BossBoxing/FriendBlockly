/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Block for the Arduino map functionality.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: This block can be improved to set the new range properly.
 */
'use strict';

goog.provide('Blockly.Blocks.motordc');

goog.require('Blockly.Blocks');

Blockly.Blocks['motor_dc'] = {
  /**
   * Block for defining the Arduino setup() and loop() functions.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("Motor Port")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.motorport || [['1','1'],['2','2']]), "PORT_MOTORDC");
    this.appendValueInput("POWER_MOTORDC")
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("at");
    this.appendDummyInput()
        .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("control any motor on Friend Robot board");
 this.setHelpUrl("https://www.friendrobot.co/");
  }
};