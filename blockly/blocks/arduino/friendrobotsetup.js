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

goog.provide('Blockly.Blocks.friendrobotsetup');

goog.require('Blockly.Blocks');

Blockly.Blocks['setup_modelnano'] = {
  /**
   * Block for defining the Arduino setup() and loop() functions.
   * @this Blockly.Block
   */
   init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/tools/modelnano.png", 150, 150, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("Friend Robot Model Nano Setup");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setup_modelpro'] = {
  /**
   * Block for defining the Arduino setup() and loop() functions.
   * @this Blockly.Block
   */
   init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("img/tools/modelpro.png", 150, 150, { alt: "*", flipRtl: "FALSE" }));
    this.appendDummyInput()
        .appendField("Friend Robot Model Pro Setup");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};