/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

goog.provide('Blockly.Blocks.oled');

goog.require('Blockly.Blocks');

Blockly.Blocks['oled_text'] = {
    /**
   * Block for defining the Arduino setup() and loop() functions.
   * @this Blockly.Block
   */
    init: function () {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Row:")
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.profiles.model_nano.oledrow), 'ROW');
        this.appendDummyInput().appendField("Col :")
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.profiles.model_nano.oledcol), 'COL');
        this.appendDummyInput().appendField("Text")
            .appendField(new Blockly.FieldTextInput("Hello"), 'TXT');
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Display Message on oled");
    }
};

Blockly.Blocks['oledmode'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("OLED Mode")
            .appendField(new Blockly.FieldDropdown(

            Blockly.Arduino.Boards.profiles.model_nano.oledmode), "MODE");
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};

Blockly.Blocks['oled_set_text_size'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("OLED setTextSize")
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.profiles.model_nano.oledtextsize
            ), "MODE");
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};

Blockly.Blocks['oled_variable_text'] = {
    init: function () {
        this.setColour(190);
        this.appendDummyInput().appendField("OLED Show Value:");
        this.appendValueInput("VARIABLE_SETTYPE_INPUT");
        this.appendDummyInput().appendField(Blockly.Msg.ARD_VAR_AS);
        this.appendDummyInput().appendField("Type:")
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.profiles.model_nano.oledtype), 'VAR_TYPE');
        this.appendDummyInput().appendField("Row:")
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.profiles.model_nano.oledrow), 'ROW');
        this.appendDummyInput().appendField("Col:")
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.profiles.model_nano.oledcol), 'COL');
        this.appendDummyInput().appendField("Prefix:")
            .appendField(new Blockly.FieldTextInput("Value = "), 'PREFIX');
        this.appendDummyInput().appendField("Subfix:")
            .appendField(new Blockly.FieldTextInput(" Unit   "), 'SUBFIX');
        this.setInputsInline(!1);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
        this.setTooltip("Display value on oled");
    },
    getBlockType: function () {
        var a = this.getFieldValue("VARIABLE_SETTYPE_TYPE");
        return Blockly.Types[a]
    }
};

Blockly.Blocks['oled_clear'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("OLED Clear")
        this.setColour(190);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(!0);
        this.setPreviousStatement(!0, null);
        this.setNextStatement(!0, null);
    }
};