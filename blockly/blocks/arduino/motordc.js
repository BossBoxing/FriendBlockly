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
    this.setInputsInline(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/tools/mtdc.png", 50, 50, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Motor Port")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.motorport || [['1','1'],['2','2']]), "PORT_MOTORDC");
    this.appendValueInput("POWER_MOTORDC")
        .setAlign(Blockly.ALIGN_RIGHT)
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("at");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("%");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("control any motor on Friend Robot board");
 this.setHelpUrl("https://www.friendrobot.co/");
  }
};