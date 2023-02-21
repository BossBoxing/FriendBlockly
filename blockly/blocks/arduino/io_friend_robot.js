/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.io_friend_robot');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.io.HUE = 250;

Blockly.Blocks['io_out'] = {
  /**
   * Block for creating a 'set pin' to a state.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendValueInput('STATE')
      .appendField('OUT')
      .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
      .appendField(Blockly.Msg.ARD_WRITE_TO)
      .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_DIGITALWRITE_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['io_in'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
      .appendField('IN')
      .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(Blockly.Msg.ARD_DIGITALREAD_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
      this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['io_analog'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
      .appendField('Analog')
      .appendField(new Blockly.FieldDropdown(
        Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function () {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};

Blockly.Blocks['read_sw_ok'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/tools/swok.png", 50, 50, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
      .appendField('Read SW_OK')
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(Blockly.Msg.ARD_DIGITALREAD_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function () {
    return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks['read_knob'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function () {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/tools/knob.png", 50, 50, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
      .appendField("Read KNOB");
    this.appendValueInput("min")
      .setCheck("Number")
      .appendField("min");
    this.appendValueInput("max")
      .setCheck("Number")
      .appendField("max");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.io.HUE);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['beep'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function () {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/tools/beep.png", 50, 50, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
      .appendField('Beep sound')
    this.setColour(Blockly.Blocks.io.HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
  }
};