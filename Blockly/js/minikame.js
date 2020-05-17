/////////////////////////////////////////////Block Definitions



Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move(0-180 degree)")
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
	var statements_name = Blockly.Python.statementToCode(block, 'NAME').replace(/\n/g,"\n    ");
	// TODO: Assemble Python into code variable.
	var code = "import os\nimport argparse\nimport cv2\nimport numpy as np\nimport sys\nimport time\nfrom threading import Thread\nimport importlib.util\nfrom api import Minikame_API\nma = Minikame_API()\n\nclass VideoStream:\n  def __init__(self,resolution=(640,480),framerate=30):\n    self.stream = cv2.VideoCapture(0)\n    ret = self.stream.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*'MJPG'))\n    ret = self.stream.set(3,resolution[0])\n    ret = self.stream.set(4,resolution[1])\n    (self.grabbed, self.frame) = self.stream.read()\n    self.stopped = False\n\n  def start(self):\n    Thread(target=self.update,args=()).start()\n    return self\n  def update(self):\n    while True:\n      if self.stopped:\n        self.stream.release()\n        return\n      (self.grabbed, self.frame) = self.stream.read()\n\n  def read(self):\n    return self.frame\n\n  def stop(self):\n    self.stopped = True\n\nparser = argparse.ArgumentParser()\nparser.add_argument('--edgetpu', help='Use Coral Edge TPU Accelerator to speed up detection', action='store_true')\n\nargs = parser.parse_args()\n\nMODEL_NAME = 'Sample_TFLite_model'\nGRAPH_NAME = 'detect.tflite'\nLABELMAP_NAME = 'labelmap.txt'\nmin_conf_threshold = float(0.5) \nresW, resH = 640,480\nimW, imH = int(resW), int(resH)\nuse_TPU = args.edgetpu\n\npkg = importlib.util.find_spec('tflite_runtime')\nif pkg:\n  from tflite_runtime.interpreter import Interpreter\n  if use_TPU:\n    from tflite_runtime.interpreter import load_delegate\nelse:\n  from tensorflow.lite.python.interpreter import Interpreter\n  if use_TPU:\n    from tensorflow.lite.python.interpreter import load_delegate\nif use_TPU:\n  if (GRAPH_NAME == 'detect.tflite'):\n    GRAPH_NAME = 'edgetpu.tflite' \nCWD_PATH = os.getcwd()\nPATH_TO_CKPT = os.path.join(CWD_PATH,MODEL_NAME,GRAPH_NAME)\nPATH_TO_LABELS = os.path.join(CWD_PATH,MODEL_NAME,LABELMAP_NAME)\nwith open(PATH_TO_LABELS, 'r') as f:\n  labels = [line.strip() for line in f.readlines()]\nif labels[0] == '???':\n  del(labels[0])\nif use_TPU:\n  interpreter = Interpreter(model_path=PATH_TO_CKPT, experimental_delegates=[load_delegate('libedgetpu.so.1.0')])\n  print(PATH_TO_CKPT)\nelse:\n  interpreter = Interpreter(model_path=PATH_TO_CKPT)\ninterpreter.allocate_tensors()\ninput_details = interpreter.get_input_details()\noutput_details = interpreter.get_output_details()\nheight = input_details[0]['shape'][1]\nwidth = input_details[0]['shape'][2]\nfloating_model = (input_details[0]['dtype'] == np.float32)\ninput_mean = 127.5\ninput_std = 127.5\nframe_rate_calc = 1\nfreq = cv2.getTickFrequency()\nvideostream = VideoStream(resolution=(imW,imH),framerate=30).start()\ntime.sleep(1)\nwhile True:\n  frame1 = videostream.read()\n  frame = frame1.copy()\n  frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)\n  frame_resized = cv2.resize(frame_rgb, (width, height))\n  input_data = np.expand_dims(frame_resized, axis=0)\n  if floating_model:\n    input_data = (np.float32(input_data) - input_mean) / input_std\n  interpreter.set_tensor(input_details[0]['index'],input_data)\n  interpreter.invoke()\n  boxes = interpreter.get_tensor(output_details[0]['index'])[0]\n  classes = interpreter.get_tensor(output_details[1]['index'])[0]\n  scores = interpreter.get_tensor(output_details[2]['index'])[0]\n  for i in range(len(scores)):\n    if ((scores[i] > min_conf_threshold) and (scores[i] <= 1.0)):\n      print(labels[int(classes[i])])\n    " + statements_name + "\ncv2.destroyAllWindows()\nvideostream.stop()\n";
	return code;
};

Blockly.Python['objectdetection'] = function(block) {
  var dropdown_object = block.getFieldValue('object');
  // TODO: Assemble Python into code variable.
  var code = '(labels[int(classes[i])]) == \''+ dropdown_object +'\'';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};