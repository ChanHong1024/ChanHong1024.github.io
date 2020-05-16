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
 this.setTooltip("FRH,FLH,BRH,BLH,FRL,FLL,BRL,BLL");
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
 this.setTooltip("Reset the robot position");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['getstatus'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["Front Right Hip","FRH"], ["Front Left Hip","FLH"], ["Back Right  Hip","BRH"], ["Back Left Hip","BLH"], ["Front Right Leg","FRL"], ["Front Left Leg","FLL"], ["Back Right Leg","BRL"], ["Back Left Leg","BLL"]]), "motor")
        .appendField("motor angle");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Get a motor angle");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['object_detection_framework'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("object detection framework");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['objectdetection'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("camera detected")
        .appendField(new Blockly.FieldDropdown([["lapbtop","lapbtop"], ["tv","tv"], ["person","person"], ["dog","dog"], ["cow","cow"], ["bicycle","bicycle"], ["traffic light","traffic light"], ["bus","bus"], ["keyboard","keyboard"], ["airplane","airplane"], ["cell phone","cell phone"], ["book","book"]]), "object");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("whether the camera detected");
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
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep(' + number_second + ')\n';
  return code;
};

Blockly.Python['reset'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'ma.Minikame_Reset()\n';
  return code;
};

Blockly.Python['getstatus'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  // TODO: Assemble Python into code variable.
  var code;
  switch(dropdown_motor){
	case 'FRH' : code = 'ma.getStatus()[0]'; break;
	case 'FLH' : code = 'ma.getStatus()[1]'; break;
	case 'BRH' : code = 'ma.getStatus()[2]'; break;
	case 'BLH' : code = 'ma.getStatus()[3]'; break;
	case 'FRL' : code = 'ma.getStatus()[4]'; break;
	case 'FLL' : code = 'ma.getStatus()[5]'; break;
	case 'BRL' : code = 'ma.getStatus()[6]'; break;
	case 'BLL' : code = 'ma.getStatus()[7]'; break;
  }
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['object_detection_framework'] = function(block) {
	var statements_name = Blockly.Python.statementToCode(block, 'NAME');
	var newcode;
	// TODO: Assemble Python into code variable.
	$.get("doc/brain.py",function(data,status){
		var code = data;
		alert(typeof code)
		newcode = code.replace("STUDENT CAN COPY HERE", statements_name);
		$("#pythoncode").html(newcode.toString());
	});
	return newcode;
};

Blockly.Python['objectdetection'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  // TODO: Assemble Python into code variable.
  var code = '(labels[int(classes[i])]) == \''+ dropdown_object +'\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};