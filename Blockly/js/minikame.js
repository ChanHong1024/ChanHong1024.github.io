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
	// TODO: Assemble Python into code variable.
	var code = "import os\n import argparse\n import cv2\n import numpy as np\n import sys\n import time\n from threading import Thread\n import importlib.util\n from api import Minikame_API\n ma = Minikame_API()\n \n class VideoStream:\n \tdef __init__(self,resolution=(640,480),framerate=30):\n \t\tself.stream = cv2.VideoCapture(0)\n \t\tret = self.stream.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*'MJPG'))\n \t\tret = self.stream.set(3,resolution[0])\n \t\tret = self.stream.set(4,resolution[1])\n \t\t(self.grabbed, self.frame) = self.stream.read()\n \t\tself.stopped = False\n \n \tdef start(self):\n \t\tThread(target=self.update,args=()).start()\n \t\treturn self\n \tdef update(self):\n \t\twhile True:\n \t\t\tif self.stopped:\n \t\t\t\tself.stream.release()\n \t\t\t\treturn\n \t\t\t(self.grabbed, self.frame) = self.stream.read()\n \n \tdef read(self):\n \t\treturn self.frame\n \n \tdef stop(self):\n \t\tself.stopped = True\n \n parser = argparse.ArgumentParser()\n parser.add_argument('--edgetpu', help='Use Coral Edge TPU Accelerator to speed up detection', action='store_true')\n \n args = parser.parse_args()\n \n MODEL_NAME = 'Sample_TFLite_model'\n GRAPH_NAME = 'detect.tflite'\n LABELMAP_NAME = 'labelmap.txt'\n min_conf_threshold = float(0.5) \n resW, resH = 640,480\n imW, imH = int(resW), int(resH)\n use_TPU = args.edgetpu\n \n pkg = importlib.util.find_spec('tflite_runtime')\n if pkg:\n \tfrom tflite_runtime.interpreter import Interpreter\n \tif use_TPU:\n \t\tfrom tflite_runtime.interpreter import load_delegate\n else:\n \tfrom tensorflow.lite.python.interpreter import Interpreter\n \tif use_TPU:\n \t\tfrom tensorflow.lite.python.interpreter import load_delegate\n if use_TPU:\n \tif (GRAPH_NAME == 'detect.tflite'):\n \t\tGRAPH_NAME = 'edgetpu.tflite' \n CWD_PATH = os.getcwd()\n PATH_TO_CKPT = os.path.join(CWD_PATH,MODEL_NAME,GRAPH_NAME)\n PATH_TO_LABELS = os.path.join(CWD_PATH,MODEL_NAME,LABELMAP_NAME)\n with open(PATH_TO_LABELS, 'r') as f:\n \tlabels = [line.strip() for line in f.readlines()]\n if labels[0] == '???':\n \tdel(labels[0])\n if use_TPU:\n \tinterpreter = Interpreter(model_path=PATH_TO_CKPT, experimental_delegates=[load_delegate('libedgetpu.so.1.0')])\n \tprint(PATH_TO_CKPT)\n else:\n \tinterpreter = Interpreter(model_path=PATH_TO_CKPT)\n interpreter.allocate_tensors()\n input_details = interpreter.get_input_details()\n output_details = interpreter.get_output_details()\n height = input_details[0]['shape'][1]\n width = input_details[0]['shape'][2]\n floating_model = (input_details[0]['dtype'] == np.float32)\n input_mean = 127.5\n input_std = 127.5\n frame_rate_calc = 1\n freq = cv2.getTickFrequency()\n videostream = VideoStream(resolution=(imW,imH),framerate=30).start()\n time.sleep(1)\n while True:\n \tframe1 = videostream.read()\n \tframe = frame1.copy()\n \tframe_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)\n \tframe_resized = cv2.resize(frame_rgb, (width, height))\n \tinput_data = np.expand_dims(frame_resized, axis=0)\n \tif floating_model:\n \t\tinput_data = (np.float32(input_data) - input_mean) / input_std\n \tinterpreter.set_tensor(input_details[0]['index'],input_data)\n \tinterpreter.invoke()\n \tboxes = interpreter.get_tensor(output_details[0]['index'])[0]\n \tclasses = interpreter.get_tensor(output_details[1]['index'])[0]\n \tscores = interpreter.get_tensor(output_details[2]['index'])[0]\n \tfor i in range(len(scores)):\n \t\tif ((scores[i] > min_conf_threshold) and (scores[i] <= 1.0)):\n \t\t\t print(labels[int(classes[i])])\n \t\t\t" + statements_name + " \n cv2.destroyAllWindows()\n videostream.stop()\n"
	return code;
};

Blockly.Python['objectdetection'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  // TODO: Assemble Python into code variable.
  var code = '(labels[int(classes[i])]) == \''+ dropdown_object +'\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};