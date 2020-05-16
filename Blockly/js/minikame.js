/////////////////////////////////////////////Block Definitions



Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldAngle(90), "FRH_Angle")
        .appendField(new Blockly.FieldAngle(90), "FLH_Angle")
        .appendField(new Blockly.FieldAngle(90), "BRH_Angle")
        .appendField(new Blockly.FieldAngle(90), "BLH_Angle")
        .appendField(new Blockly.FieldAngle(90), "FRL_Angle")
        .appendField(new Blockly.FieldAngle(90), "FLL_Angle")
        .appendField(new Blockly.FieldAngle(90), "BRL_Angle")
        .appendField(new Blockly.FieldAngle(90), "BLL_Angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.FieldAngle.WRAP = (0, 180);


Blockly.Blocks['getdistance'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("getDistance");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['callapi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Call Minikame API");
    this.appendStatementInput("stat")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait")
        .appendField(new Blockly.FieldNumber(0), "second")
        .appendField("s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("reset robot position");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

/////////////////////////////////////////////Generator Stubs



  Blockly.Python['move'] = function(block) {
  var angle_frh_angle = block.getFieldValue('FRH_Angle');
  var angle_flh_angle = block.getFieldValue('FLH_Angle');
  var angle_brh_angle = block.getFieldValue('BRH_Angle');
  var angle_blh_angle = block.getFieldValue('BLH_Angle');
  var angle_frl_angle = block.getFieldValue('FRL_Angle');
  var angle_fll_angle = block.getFieldValue('FLL_Angle');
  var angle_brl_angle = block.getFieldValue('BRL_Angle');
  var angle_bll_angle = block.getFieldValue('BLL_Angle');
  // TODO: Assemble Python into code variable.
  var code = 'ma.Minikame_Move(' + 
  angle_frh_angle +','+
  angle_flh_angle +','+
  angle_brh_angle +','+
  angle_blh_angle +','+
  angle_frl_angle +','+
  angle_fll_angle +','+
  angle_brl_angle + ','+
  angle_bll_angle + ')\n';
  return code;
  }
  
  
  
  Blockly.Python['getdistance'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ma.Minikame_Distance()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['callapi'] = function(block) {
  // TODO: Assemble Python into code variable.
  var statements_name = Blockly.Python.statementToCode(block, 'stat');
  var code = 'from api import Minikame_API \nimport time\nma = Minikame_API()\nif __name__ == \'__main__\':\n'
  + statements_name;
  return code;
};

Blockly.Python['wait'] = function(block) {
  var number_second = block.getFieldValue('second');
  // TODO: Assemble JavaScript into code variable.
  var code = 'time.sleep(' + number_second + ')\n';
  return code;
};

Blockly.Python['reset'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'ma.Minikame_Reset()\n';
  return code;
};