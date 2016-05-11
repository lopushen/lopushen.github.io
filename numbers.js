function gameOptions() {
	this.fieldWidth = 1000;
	this.fieldHeight = 700;

	this.speed = 30;//arrow speed
	this.roomLength = 300;

	var fontSize = 24;
	this.font = "bold " + fontSize + "px Arial";

	this.getFontSize = function() {
		return fontSize;
	};

	var images_values = [ './img/castle_ghost.jpg', //1
	'./img/arrow.png', //2
	'./img/crosshair.png', //3
	'./img/crossbow_str.png', //4 
	'./img/crossbow_str_arrow.png', //5
	'./img/chest_2.png', //6
	'./img/chest_1.png', //7
	'./img/lantern/red.png', //8
	'./img/lantern/red_l.png', //9
	'./img/lantern/green.png', //10
	'./img/lantern/green_l.png', //11
	'./img/lantern/blue.png', //12
	'./img/lantern/blue_l.png', //13
	'./img/castle.jpg', //14
	'./img/hp.png', //15
	'./img/lantern/violet.png', 
	'./img/lantern/violet_l.png', 
	'./img/lantern/yellow.png', 
	'./img/lantern/yellow_l.png',
	'./img/torch/torch_1.png',
	'./img/torch/torch_2.png',
	'./img/torch/torch_3.png',
	'./img/torch/torch_4.png',
	'./img/torch/torch_5.png',
	'./img/torch/torch_6.png',
	'./img/torch/torch_7.png',
	'./img/torch/torch_8.png',
	'./img/torch/torch_9.png',
	'./img/torch/torch_10.png',
	'./img/torch/torch_11.png',
	'./img/wizard/1.png',
	'./img/wizard/2.png',
	'./img/wizard/3.png',
	'./img/wizard/4.png',
	'./img/wizard/5.png',
	'./img/wizard/6.png',
	'./img/wizard/7.png',
	'./img/wizard/stay.png',
	'./img/wizard/make/1.png',
	'./img/wizard/make/2.png',
	'./img/wizard/make/3.png',
	'./img/wizard/make/4.png',
	'./img/wizard/make/5.png',
	'./img/wizard/make/6.png',
	'./img/wizard/make/7.png',
	'./img/wizard/make/8.png',
	'./img/wizard/make/9.png',
	'./img/wizard/make/10.png',
	'./img/wizard/make/11.png',
	'./img/right_door.png',
	'./img/stars/1.png',
	'./img/stars/2.png',
	'./img/stars/3.png',
	'./img/stars/4.png',
	'./img/stars/5.png',
	'./img/stars/6.png',
	'./img/stars/7.png',
	'./img/stars/8.png',
	'./img/stars/9.png',
	'./img/stars/10.png',
	'./img/stars/11.png',
	'./img/spikes/1.png',
	'./img/spikes/2.png',
	'./img/spikes/3.png',
	'./img/spikes/4.png',
	'./img/spikes/5.png',
	'./img/spikes/6.png',
	];

	var images_keys = [ 'room', //1
	'arrow', //2
	'crosshair', //3
	'crossbow', //4
	'crossbow_arrow', //5
	'chest_top', //6
	'chest_bottom', //7
	'lantern_red', //8
	'lantern_red_lighted', //9
	'lantern_green', //10
	'lantern_green_lighted', //11
	'lantern_blue', //12
	'lantern_blue_lighted', //13
	'splash_screen', //14
	'hp', //15
	'lantern_violet', //8
	'lantern_violet_lighted', //9
	'lantern_yellow', //8
	'lantern_yellow_lighted', //9
	'torch_1',
	'torch_2',
	'torch_3',
	'torch_4',
	'torch_5',
	'torch_6',
	'torch_7',
	'torch_8',
	'torch_9',
	'torch_10',
	'torch_11',
	'wizard_1',
	'wizard_2',
	'wizard_3',
	'wizard_4',
	'wizard_5',
	'wizard_6',
	'wizard_7',
	'wizard_stay',
	'wizard_make_1',
	'wizard_make_2',
	'wizard_make_3',
	'wizard_make_4',
	'wizard_make_5',
	'wizard_make_6',
	'wizard_make_7',
	'wizard_make_8',
	'wizard_make_9',
	'wizard_make_10',
	'wizard_make_11',
	'right_door',
	'star_1',
	'star_2',
	'star_3',
	'star_4',
	'star_5',
	'star_6',
	'star_7',
	'star_8',
	'star_9',
	'star_10',
	'star_11',
	'spike_1',
	'spike_2',
	'spike_3',
	'spike_4',
	'spike_5',
	'spike_6',
	];

	var images = [];

	this.getImage = function(name) {
		return images[images_keys.indexOf(name)];
	};

	this.loadAllPictures = function() {
		
		var progress = new progressBar();
		progress.setValue(0);
		progress.draw();
		var loaded_images = 0;
		
		for (var i=0;i<images_values.length;i++) {
		        var tempimage = new Image();
		        tempimage.src= images_values[i];
		        tempimage.onload = function(){
		        	++loaded_images;
		        	progress.setValue((loaded_images+1)/images_values.length);
		        	console.log(images_values[loaded_images-1]+" loaded");
					progress.draw();
		            if (loaded_images >= images_values.length) {
		            	context.shadowOffsetY = 0; // integer
					    context.shadowOffsetX = 0; // integer
					    context.shadowBlur = 0; // integer
						start();
		            }
		        };
		        images.push(tempimage);
		}
		
	};

	this.started = false;
}

function progressBar(){
	var width = 300;
	var height = options.getFontSize()+10;

	var y = options.fieldHeight/2;
	
	var borderColor = "#000000";
	var progressColor = "#19E519";
	var textColor = "lightgray";
	
	var value;
		
	this.setValue = function(_value){
		value = _value;
	};
	
	this.draw = function(){
		
		var x = options.fieldWidth/2-width/2;
		
		context.clearRect(0, 0, options.fieldWidth, options.fieldHeight);
		
		context.fillStyle = progressColor;
		context.fillRect(x+2,y+2,(width-4)*value,height-4);
		
		context.beginPath();
	    context.rect(x,y,width,height);
	    context.strokeStyle = borderColor;
	    context.stroke();
		
	    context.shadowColor = "#000000";
	    context.shadowOffsetY = 0; // integer
	    context.shadowOffsetX = 0; // integer
	    context.shadowBlur = 5; // integer
		context.fillStyle = textColor;
		var text =  parseInt(value*100);
		context.fillText(text+"%",x+width/2 - context.measureText(text).width/2, y+options.getFontSize());
	};
}

function LevelController() {


	var currentTask = null;
	var results;

	var levels = [];
	var currentLevel = 1;
	var currentOperation = 'addition';
	var maxAttempts = 3;
	var currentAttempts = 0;

	var expressionAlpha = 1.0;
	var messages = [];

	this.reset = function() {
		messages = [];
		currentAttempts = 0;
		hp.setHP(maxAttempts);
		currentTask = null;
	};

	this.init = function() {
		levels['addition'] = {
			// key - level number
			// value - array(results number, max numb1, min numb1, max numb2, min numb1, speed)
			1 : [ 6, 0, 10, 0, 10, 1.7 ],
			2 : [ 6, 0, 10, 0, 10, 1.8 ],
			3 : [ 6, 0, 30, 10, 30, 1.9 ],
			4 : [ 6, 10, 100, 10, 100, 2.0 ],
			5 : [ 6, 10, 100, 10, 100, 2.1 ],
			6 : [ 6, 10, 100, 10, 100, 2.2 ],
			7 : [ 6, 10, 100, 10, 100, 2.3 ],
			8 : [ 6, 10, 100, 10, 100, 2.4 ],
			9 : [ 6, 10, 100, 10, 100, 2.5 ],
			10: [ 6, 10, 100, 10, 100, 2.6 ],
		};

		levels['substraction'] = {
			// key - level number
			// value - array(results number, max numb1, min numb1, max numb2, min numb1, speed)
				1 : [ 6, 0, 10, 0, 10, 1.7 ],
				2 : [ 6, 0, 10, 0, 10, 1.8 ],
				3 : [ 6, 0, 30, 10, 30, 1.9 ],
				4 : [ 6, 10, 100, 10, 100, 2.0 ],
				5 : [ 6, 10, 100, 10, 100, 2.1 ],
				6 : [ 6, 10, 100, 10, 100, 2.2 ],
				7 : [ 6, 10, 100, 10, 100, 2.3 ],
				8 : [ 6, 10, 100, 10, 100, 2.4 ],
				9 : [ 6, 10, 100, 10, 100, 2.5 ],
				10: [ 6, 10, 100, 10, 100, 2.6 ],
		};

		levels['multiplication'] = {
			// key - level number
			// value - array(results number, max numb1, min numb1, max numb2, min numb1, speed)
			1 : [ 6, 0, 4, 1, 4, 1.4],
			2 : [ 6, 0, 10, 1, 10, 1.5 ],
			3 : [ 6, 0, 10, 1, 10, 1.6 ],
			4 : [ 6, 0, 10, 1, 10, 1.7 ],
			5 : [ 6, 0, 10, 1, 10, 1.8 ],
			6 : [ 6, 0, 10, 1, 10, 1.9 ],
			7 : [ 6, 10, 100, 10, 100, 2.0 ],
			8 : [ 6, 10, 100, 10, 100, 2.1 ],
			9 : [ 6, 10, 100, 10, 100, 2.2 ],
			10: [ 6, 10, 100, 10, 100, 2.3 ],
		};

		levels['division'] = {
			// key - level number
			// value - array(results number, max numb1, min numb1, max numb2, min numb1, speed)
			
			1 : [ 6, 0, 10, 1, 10, 1.3 ],
			2 : [ 6, 1, 20, 2, 10, 1.4 ],
			3 : [ 6, 10, 30, 3, 10, 1.5 ],
			4 : [ 6, 10, 40, 4, 10, 1.6 ],
			5 : [ 6, 10, 50, 5, 10, 1.7 ],
			6 : [ 6, 10, 60, 6, 10, 1.8 ],
			7 : [ 6, 20, 70, 7, 10, 1.9 ],
			8 : [ 6, 30, 80, 8, 10, 2.0 ],
			9 : [ 6, 40, 90, 9, 20, 2.1 ],
			10: [ 6, 50, 100, 10, 30, 2.2 ],
		};
		messages = [];
	};

	this.Message = function(_text, _color) {
		var text = _text;
		var color = _color;
		var startY = 2 * options.fieldHeight / 3;
		var maxDistanceToMove = 100;
		var x = options.fieldWidth / 2 - context.measureText(text).width / 2;
		var y = startY;

		
		this.setY = function(_y) {
			y = _y;
		};

		this.getText = function() {
			return text;
		};

		this.getColor = function() {
			return color;
		};

		this.getStartY = function() {
			return startY;
		}

		this.getY = function() {
			return y;
		}

		this.getX = function() {
			return x;
		}

		this.getMaxDistance = function() {
			return maxDistanceToMove;
		}
	};

	this.draw = function() {
		if (currentTask) {
			context.fillStyle = "#ffffff";
			var buff_text = currentTask.generateExpression();
			var font = context.font ;
			context.font = "bold " + 25 + "px Brush Script MT";
			context.globalAlpha = expressionAlpha;
			context.fillText(buff_text, options.fieldWidth/2-context.measureText(buff_text).width/2, 325);
			context.font = font;
			
			_buffer = [];
			context.globalAlpha = 0.5;
			for ( var i = 0; i < messages.length; i++) {
				var mess = messages.pop();
				context.fillStyle = mess.getColor();
				var _y = mess.getY();
				context.fillText(mess.getText(), mess.getX(), _y);
				_y -= 0.5;
				if (mess.getStartY() - _y < mess.getMaxDistance()) {
					mess.setY(_y);
					_buffer.push(mess);
				}
				;
			}
			;
			messages = _buffer;
			context.fillStyle = "#000000";
			context.globalAlpha = 1.0;
		}
		;
	};

	this.next = function() {
		if (options.started == false) {
			return;
		}

		if (levels[currentOperation][currentLevel]) {
			currentTask = new Task();

			currentTask.setOperation(currentOperation);
			currentTask
					.setResultsNumber(levels[currentOperation][currentLevel][0]);
			currentTask
					.setMaxNumber1(levels[currentOperation][currentLevel][2]);
			currentTask
					.setMinNumber1(levels[currentOperation][currentLevel][1]);
			currentTask
					.setMaxNumber2(levels[currentOperation][currentLevel][4]);
			currentTask
					.setMinNumber2(levels[currentOperation][currentLevel][3]);
			balloonsContainer
					.setSpeed(levels[currentOperation][currentLevel][5]);
			currentTask.init();

			results = currentTask.generateResults();
			balloonsContainer.generateBalloons(results);
		} else {

			//			alert('task complete!');
			this.reset();
			stopAndShowMessage('task complete!');
			//			stop();
		}
	};
	
	this.coorectAnswer = false;
	this.decreseHP = function(){
		currentAttempts++;
		hp.setHP(hp.getHP() - 1);
		if (currentAttempts >= maxAttempts) {
			this.reset();
			gameOver();
		} else {
			message = new this.Message('bad luck, try again =(', "#ffffff");
			messages.push(message);
			
			results = currentTask.generateResults();
			balloonsContainer.generateBalloons(results);
		}
	};

	
	this.hit = function(_x, _y) {
		var userAnswer = balloonsContainer.hit(_x, _y);

		if (currentTask.isCorrectAnswer(userAnswer)) {
			this.coorectAnswer = true;
			message = new this.Message('Well done!', "#ffffff");
			messages.push(message);
			currentLevel++;
			wizard.makeExpression();
		} else {
			this.decreseHP();
		}
	};
	
	

	this.setOperation = function(_operation) {
		currentOperation = _operation;
		currentLevel = 1;
	};

	this.getLevels = function() {
		return levels;
	};

	this.start = function() {
		this.reset();
		options.started = true;
		play();
		wizard.moveTo(250);
		wizard.makeExpression();
	};

	this.isCurrentTask = function(){
		return currentTask;
	};
	
	this.setExpressionAlpha = function(alpha){
		expressionAlpha = alpha;
	};
	
	this.getExpressionAlpha = function(){
		return expressionAlpha;
	};
}

function Task() {
	var resultsNumber = 6;

	var operation = "addition";

	var maxNumber1 = 1;
	var maxNumber2 = 1;

	var minNumber1 = 1;
	var minNumber2 = 1;

	var numb1;
	var numb2;
	var answer;

	this.setOperation = function(_operation) {
		operation = _operation;
	};

	this.setResultsNumber = function(_numb) {
		resultsNumber = _numb;
	};

	this.setMaxNumber1 = function(_max) {
		maxNumber1 = _max;
	};

	this.setMaxNumber2 = function(_max) {
		maxNumber2 = _max;
	};

	this.setMinNumber1 = function(_min) {
		minNumber1 = _min;
	};

	this.setMinNumber2 = function(_min) {
		minNumber2 = _min;
	};

	this.generateNumber = function(_max, _min) {
		return parseInt(parseInt(_min + Math.random() * (_max - _min)));
	};

	this.generateExpression = function() {
		var sign = '+';
		switch (operation) {
		case "addition":
			sign = '+';
			break;
		case "substraction":
			sign = '-';
			break;
		case "multiplication":
			sign = '*';
			break;
		case "division":
			sign = '/';
			break;
		}
		return numb1 + ' ' + sign + ' ' + numb2 + ' = ?';
	};

	this.generateResults = function() {
		var results = [];
		var index = parseInt(Math.random() * resultsNumber);

		results[index] = answer;

		for ( var i = index + 1; i < resultsNumber; i++) {
			results[i] = parseInt(results[i - 1]) + 1;
		}

		for ( var i = index - 1; i >= 0; i--) {
			results[i] = parseInt(results[i + 1]) - 1;
		}
		return this.shuffle(results);
	};

	this.shuffle = function(array) {
		var counter = array.length, temp, index;

		// While there are elements in the array
		while (counter > 0) {
			// Pick a random index
			index = Math.floor(Math.random() * counter);

			// Decrease counter by 1
			counter--;

			// And swap the last element with it
			temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}

		return array;
	};

	this.calculate = function(a, b) {
		switch (operation) {
		case "addition":
			return a + b;
		case "substraction":
			return a - b;
		case "multiplication":
			return a * b;
		case "division":
			return a / b;
		default:
			return a + '' + b;
		}
	};

	this.isCorrectAnswer = function(_answer) {
		return answer == _answer;
	};

	this.init = function() {
		numb1 = this.generateNumber(maxNumber1, minNumber1);
		numb2 = this.generateNumber(maxNumber2, minNumber2);
		if (operation == "division") {
			numb1 -= numb1 % numb2;
		}
		answer = this.calculate(numb1, numb2);

	};

}

function Chest(_fliped) {
	
	var img2 = options.getImage('chest_bottom');
	var img1 = options.getImage('chest_top');
	var scale = 0.5;

	var x = 0;//
	var y = 470;
	
	var h_flip = (_fliped) ? -1 : 1;

	this.draw1 = function() {
		var _x = x;
		if(h_flip>0){
			context.drawImage(img1, _x, y, img1.width * scale, img1.height * scale);
		}else{
			context.save();
			context.scale(h_flip, 1);
			_x = -_x-img1.width * scale;
			context.drawImage(img1, _x, y, img1.width * scale, img1.height * scale);
			context.restore();
		}
	};

	this.draw2 = function() {
		var _x = x;
		if(h_flip>0){
			context.drawImage(img2, _x, y, img2.width * scale, img2.height * scale);
		}else{
			context.save();
			context.scale(h_flip, 1);
			_x = -_x-img2.width * scale;
			context.drawImage(img2, _x, y, img2.width * scale, img2.height * scale);
			context.restore();
		}
	};
	
	this.getX = function() {
		return x;
	};
	
	this.setX = function(_x) {
		x = _x;
	};

	this.getY = function() {
		return y;
	};

	this.getWidth = function() {
		return img1.width * scale;
	};

	this.getHeight = function() {
		return img1.height * scale;
	};
}

function Balloon() {

	var img;
	var image;

	var x = 0;
	var y = 0;
	var scale = 0.37;

	var target_x;

	var text = "";

	var counter = 0;
	var alpha = 1;
	var stepAlpha = 0;
	this.draw = function() {
		context.globalAlpha = alpha;
		context.drawImage(img, x, y, img.width * scale, img.height * scale);
		context.globalAlpha = 1;
		var _x = x + (img.width * scale - context.measureText(text).width) / 2;
		var _y = y + (img.height * scale + options.getFontSize() / 2) / 2;
		context.fillText(text, _x, _y);

		if (counter % 10 == 0) {
			var image_buf = img;
			img = image;
			image = image_buf;
		}
		counter++;
		
	};

	this.contains = function(_x, _y) {
		var result = _x - x >= 0;
		result &= _x - x <= img.width * scale;
		result &= _y - y >= 0;
		result &= _y - y <= img.height * scale;
		return result;
	};
	
	this.setAlpha = function(_alpha) {
		alpha = _alpha;
	};
	
	this.setStepAlpha = function(_alpha) {
		stepAlpha = _alpha;
	};
	
	this.getAlpha = function() {
		return alpha;
	};
	
	this.getStepAlpha = function() {
		return stepAlpha;
	};

	this.setImage = function(_image) {
		img = _image;
	};

	this.setImageAdditional = function(_image) {
		image = _image;
	};

	this.setX = function(_x) {
		x = _x;
	};

	this.setY = function(_y) {
		y = _y;
	};

	this.setTarget_x = function(_x) {
		target_x = _x;
	};

	this.getTarget_x = function() {
		return target_x;
	};

	this.setScale = function(_scale) {
		scale = _scale;
	};

	this.setText = function(_text) {
		text = _text;
	};

	this.getText = function() {
		return text;
	};

	this.getX = function() {
		return x;
	};

	this.getY = function() {
		return y;
	};

	this.getWidth = function() {
		return img.width;
	};

	this.getHeight = function() {
		return img.height;
	};

	this.getScale = function() {
		return scale;
	};
}

function Balloons() {
	var balloonsColors = [ 'red', 'green', 'blue', 'yellow',  'violet'];//,'green','pink','blue'];
	var speed = 1;
	var balloons = new Array();

	this.clearBalloons = function() {
		balloons = new Array();
	};
	
	this.putPartOfBalloonsToChest = function(_chest, _numbers, st, end){
		
		var y = _chest.getY() + _chest.getHeight();
		var x = _chest.getX() + _chest.getWidth() / 2;
		var startAlpha = 0.5;
		var stepAlpha = 2.5*(1 - startAlpha)/y;
		var targetX = options.fieldWidth / (_numbers.length + 1);
		for ( var i = st; i <= end; i++) {

			var chosen = parseInt(Math.random() * balloonsColors.length, 10);
			var img = options.getImage('lantern_' + balloonsColors[chosen]);
			var addImgage = options.getImage('lantern_'
					+ balloonsColors[chosen] + '_lighted');

			var balloon = new Balloon();

			balloon.setImage(img);
			balloon.setImageAdditional(addImgage);
			balloon.setAlpha(startAlpha);
			balloon.setStepAlpha(stepAlpha);
			balloon.setX(x - img.width * balloon.getScale() / 2);
			balloon.setY(y - img.height * balloon.getScale());
			balloon.setTarget_x(targetX * (i + 1));
			
			balloon.setText(_numbers[i]);
			balloons.push(balloon);
		}
	};

	this.generateBalloons = function(_numbers) {
		this.clearBalloons();
		controller.coorectAnswer = false;
		this.putPartOfBalloonsToChest(chest1,_numbers,0,2);
		this.putPartOfBalloonsToChest(chest2,_numbers,3,5);
	};
	
	
	var prevTime = 0;
	this.draw = function() {
		
		var time = (new Date()).getTime();
		if (time - prevTime >= 20) {// 50 fps
			
			for ( var i = 0; i < balloons.length; i++) {
				
				var stepAlpha = balloons[i].getStepAlpha();
				var alpha = balloons[i].getAlpha();
				if(alpha+stepAlpha<=1){
					balloons[i].setAlpha(alpha+stepAlpha);
				}
				
				var m = parseInt(-2 * Math.random());

				var prevY = balloons[i].getY();
				var target_x = balloons[i].getTarget_x();
				
				var y = prevY - (speed + m * parseInt(2 * Math.random()));
				var x = balloons[i].getX();
				x = (y - prevY)
						* (target_x - x)
						/ (-balloons[i].getHeight() * balloons[i].getScale() - prevY)
						+ x;
				if (y <= 80) {
					balloonsContainer.hit(x + balloons[i].getWidth()
							* balloons[i].getScale() / 2, y
							+ balloons[i].getHeight() * balloons[i].getScale() / 2);
					
				} else {
					balloons[i].setX(x);
					balloons[i].setY(y);
				}
				
				
			}
			prevTime = time;
		}
		
		for ( var i = 0; i < balloons.length; i++) {
			balloons[i].draw();
		}
	};

	this.hit = function(_x, _y) {
		for ( var i = balloons.length - 1; i >= 0; i--) {
			if (balloons[i].contains(_x, _y)) {

				var text = balloons[i].getText();
				balloons.splice(i, 1);
				if (balloons.length < 1 && controller.coorectAnswer != true) {
					controller.decreseHP();
				}
				return text;
			}
		}
		return null;
	};

	this.setSpeed = function(_speed) {
		speed = _speed;
	};

}

function Arrow() {
	var img = options.getImage('arrow');

	var x0;
	var y0;

	var x = 0;
	var y = 0;

	var width;
	var height;

	var angle = Math.PI / 2;

	var verticalScale;
	var keystoneScale;
	var horizontalScale;

	var fired = false;

	this.init = function() {
		fired = false;
		width = img.width;
		height = img.height;
		x0 = cross.getX0();
		y0 = cross.getY0();
		x = cross.getX0();
		y = cross.getY0() - cross.getHeight() * cross.getScale()
				+ cross.getVerticalShift();
		arrow.calculateVerticalScaleAndSet(cross.getScale());
		keystoneScale = cross.getScale();
		horizontalScale = 1.0;
		angle = cross.getAngle();

	};

	this.calculateVerticalScaleAndSet = function(_scale) {
		if (!fired) {
			verticalScale = cross.getHeight() / (2 * height) * _scale;
			y = cross.getY0() + cross.getVerticalShift() - cross.getHeight()
					* cross.getScale() - 10;
		}
	};

	this.setVerticalScale = function(_scale) {
		if (fired && _scale > 0) {
			verticalScale = _scale;
		}
	};

	this.getVerticalScale = function() {
		return verticalScale;
	};

	this.draw = function() {
		context.save();

		context.translate(cross.getX0(), cross.getY0()
				+ cross.getVerticalShift());
		context.rotate(angle - Math.PI / 2);

		keystoneAndDisplayImageH(img, x - cross.getX0() - width / 2, y
				- cross.getY0(), horizontalScale, verticalScale, keystoneScale,
				img.height / 10);

		context.restore();
	};

	this.setAngle = function(_angle) {
		if (!fired) {
			angle = _angle;
		}
	};

	this.getAngle = function() {
		return angle;
	};

	this.setFired = function(_fired) {
		fired = _fired;
	};

	this.getFired = function() {
		return fired;
	};

	this.getHeight = function() {
		return height * verticalScale;
	};

	this.setX = function(_x) {
		x = _x;
	};
	this.getX = function() {
		return x;
	};

	this.setY = function(_y) {
		y = _y;
	};

	this.getY = function() {
		return y;
	};

	this.setKeystoneScale = function(_scale) {
		if (_scale > 0) {
			keystoneScale = _scale;
		}
	};

	this.setHorizontalScale = function(_scale) {
		if (_scale > 0) {
			horizontalScale = _scale;
		}
	};

	this.getKeystoneScale = function() {
		return keystoneScale;
	};

	this.getHorizontalScale = function() {
		return horizontalScale;
	};
}

function HP() {
	var current = 0;
	var img = img = options.getImage('hp');
	var scale = 0.9;

	var y = 20;
	var shiftLeft = 30;
	var spacing = 20;

	this.setHP = function(_hp) {
		current = _hp;
	};

	this.getHP = function() {
		return current;
	};

	this.draw = function() {
		var x = options.fieldWidth - shiftLeft - img.width * scale;
		for ( var i = 0; i < current; i++) {

			context.drawImage(img, x, y, img.width * scale, img.height * scale);
			x -= img.width * scale + spacing;
		}
		;
	};

}

function Crosshair() {
	var img = options.getImage('crosshair');

	var x = 0;
	var y = 0;

	var width = 50;
	var height = 50;

	this.setX = function(_x) {
		x = _x;
	};
	this.getX = function() {
		return x;
	};

	this.getHeight = function() {
		return height;
	};

	this.setY = function(_y) {
		y = _y;
	};
	this.getY = function() {
		return y;
	};

	this.draw = function() {
		context.drawImage(img, x - width / 2, y - height / 2, width, height);
	};
}

function Crossbow() {
	var img;

	var verticalShift;

	var width = 0;
	var height = 0;
	var x = 0;
	var y = 0;

	var x0 = 0;
	var y0 = 0;

	var angle = Math.PI / 2;

	var verticalScale;
	var minVerticalScale = 0.4;
	var verticalScaleStep = 0.1;

	var keystoneScale = 1.0;
	var minKeystoneScale = 0.8;
	var keystoneScaleStep = 0.1;

	this.init = function() {
		img = options.getImage('crossbow_arrow');
		width = img.width;
		height = img.height;

		x = options.fieldWidth / 2 - width / 2;
		y = options.fieldHeight;

		x0 = options.fieldWidth / 2;
		y0 = options.fieldHeight;
		verticalScale = 1.0;
		verticalScaleStep = (1.0 - minVerticalScale)
				/ (options.getImage('room').height);
		keystoneScaleStep = (1.0 - minKeystoneScale)
				/ (options.getImage('room').height);

		verticalShift = width / 10;
		arrow.init();
	};

	this.draw = function() {
		context.save();
		context.translate(x0, y0 + verticalShift);
		context.rotate(angle - Math.PI / 2);
		y = options.fieldHeight - height * verticalScale;
		keystoneAndDisplayImageH(img, x - x0, y - y0 + verticalShift, 1.0,
				verticalScale, keystoneScale, img.height * verticalScale);
		context.restore();
	};

	this.setImage = function(image) {
		img = image;
	};

	this.getWidth = function() {
		return img.naturalWidth;
	};
	this.getHeight = function() {
		return img.naturalHeight;
	};

	this.setWidth = function(_width) {
		width = _width;
	};
	this.setHeight = function(_height) {
		height = _height;
	};

	this.setX = function(_x) {
		x = _x;
	};
	this.getX = function() {
		return x;
	};

	this.getY = function() {
		return y;
	};

	this.getX0 = function() {
		return x0;
	};

	this.getVerticalShift = function() {
		return verticalShift;
	};

	this.getY0 = function() {
		return y0;
	};

	this.setAngle = function(_angle) {
		angle = _angle;
	};

	this.getAngle = function() {
		return angle;
	};

	this.setScale = function(_y) {
		verticalScale = 1.0 - _y * verticalScaleStep;
		keystoneScale = 1.0 - _y * keystoneScaleStep;
	};

	this.getKeystoneScale = function() {
		return keystoneScale;
	};

	this.getScale = function() {
		return verticalScale;
	};

	this.getVerticalScale = function() {
		return verticalScale;
	};
}

function keystoneAndDisplayImageH(img, x, y, horizontalScale, verticalScale,
		scalingFactor, numSlices) {
	var h = img.height, w = img.width,

	// how much should every slice be scaled in width?
	widthScale = (1 - scalingFactor) / numSlices;

	// height of each slice
	sliceHeight = h / numSlices;

	// iterate over all slices      
	for ( var n = 0; n < numSlices; n++) {

		// source - where to take the slices from
		var sx = 0, sy = sliceHeight * n, sWidth = w, sHeight = sliceHeight;
		// destination - where to draw the new slices
		var dx = (w * widthScale * (numSlices - n)) / 2, dy = sliceHeight
				* verticalScale * n, dWidth = w
				* (1 - (widthScale * (numSlices - n))) * horizontalScale, dHeight = sliceHeight;
		context.drawImage(img, sx, sy, sWidth, sHeight, x + dx, y + dy, dWidth,
				dHeight * verticalScale);
	}
}

function playerMove(e) {

	var half_cross_width = cross.getWidth() / 2;
	var cross_x_center = cross.getX() + half_cross_width;

	var x1 = getX(e);
	var y1 = getY(e);

	var angle = calcAngle(cross.getX0(), cross.getY0(), x1, y1);
	cross.setAngle(angle);
	cross.setScale(y1);
	arrow.setAngle(angle);
	arrow.calculateVerticalScaleAndSet(cross.getScale());
	arrow.setKeystoneScale(cross.getKeystoneScale());
	cross_hair.setX(x1);
	cross_hair.setY(y1);

}

function playerShoot(e) {
	if (arrow.getFired()){
		return;
	} 

		arrow.setFired(true);
		cross.setImage(options.getImage('crossbow'));

		var y = options.fieldHeight - getY(e);
		var step = y
				/ Math.sqrt(Math.pow(options.roomLength, 2) + Math.pow(y, 2));

		var x1 = options.fieldWidth / 2;
		var y1 = options.fieldHeight;
		var x2 = getX(e);
		var y2 = getY(e);

		var distance = Math.abs(Math.abs(cross.getY() - getY(e))
				/ Math.cos(arrow.getAngle()));

		distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

		//var verticalScaleDecreaseStep = options.speed*(arrow.getVerticalScale() - 10/arrow.getHeight())/distance;
		var verticalScaleDecreaseStep = 1;
		var prevTime = (new Date()).getTime();
		
		var timer = setInterval(function() {
			var time = (new Date()).getTime();
			if (time - prevTime >= 20) {// 50 fps
				
				if (Math.abs(y1 - arrow.getY()) > distance
						+ cross_hair.getHeight() / 2) {
					controller.hit(x2, getY(e));
					clearInterval(timer);
					cross.setImage(options.getImage('crossbow_arrow'));
					arrow.init();
				}

				arrow.setY(arrow.getY() - options.speed * step);

				arrow.setVerticalScale(arrow.getVerticalScale()
						- verticalScaleDecreaseStep);
				arrow.setHorizontalScale(arrow.getHorizontalScale() - 0.005);
				
				prevTime = time;
			}
			
			
		}, 0.1);

}

/**
 return angle in rad
 */
function calcAngle(x0, y0, x1, y1) {
	var x_sq = Math.pow(x1 - x0, 2);
	var y_sq = Math.pow(y1 - y0, 2);
	var c = Math.sqrt(x_sq + y_sq);
	var a = x0 - x1;
	var cos = a / c;
	return Math.acos(cos);
}

function degreesToRad(degrees) {
	return degrees * Math.PI / 180;
}

function radToDegrees(rad) {
	return rad * 180 / Math.PI;
}

function moveCrossbow(deltaX, cursor_x) {

	var hand = deltaX / Math.abs(deltaX);

	while (Math.abs(deltaX) > 0) {
		var x = cross.getX() + hand;
		cross.setX(x);
//		draw();
		deltaX -= hand;
	}
}

function Menu() {

	var x = 600;
	var y = 200;

	var background_x = 0;
	var background_y = 0;

	var scale = 1.0;

	var img;

	var menues;

	var levels;

	this.menuItem = function() {
		var text;
		var x, y;
		var width, height;
		var color = "#ffffff";
		this.setText = function(_text) {
			text = _text;
			width = context.measureText(text).width;
			height = options.getFontSize();
		};

		this.contains = function(_x, _y) {
			var result = _x >= x;
			result &= _x <= x + width;
			result &= _y <= y;
			result &= _y >= y - height;
			return result;
		};

		this.getText = function() {
			return text;
		};

		this.setColor = function(_color) {
			color = _color;
		};

		this.getColor = function() {
			return color;
		};

		this.setX = function(_x) {
			x = _x;
		};

		this.setY = function(_y) {
			y = _y;
		};
	};

	this.init = function() {
		img = options.getImage('splash_screen');
		
		background_x = (options.fieldWidth - img.width)/2;
		background_y = 0;

		menues = [];
		levels = controller.getLevels();

		for ( var item in levels) {
			var menu = new this.menuItem();
			menu.setText(item);
			menues.push(menu);
		}
		;

	};

	var draw = function() {
		var menuSpacing = options.getFontSize() * 2;
		context.drawImage(img, background_x, background_y, img.width * scale,
				img.height * scale);

		var _y = y;
		for ( var i = 0; i < menues.length; i++) {
			_y += options.getFontSize() + menuSpacing;
			context.fillStyle = menues[i].getColor();
			context.fillText(menues[i].getText(), x, _y);
			menues[i].setX(x);
			menues[i].setY(_y);
		}
		;
		context.fillStyle = "#000000";
	};

	this.show = function() {
		canvas.style.cursor = "pointer";

		draw();

		canvas.onmousedown = function(e) {
			var x = getX(e);
			var y = getY(e);
			for ( var i = 0; i < menues.length; i++) {
				if (menues[i].contains(x, y)) {
					controller.setOperation(menues[i].getText());
					controller.start();
					canvas.onmousedown = function(e){};
					break;
				}
			}
		};

		canvas.onmousemove = function(e) {
			var x = getX(e);
			var y = getY(e);
			for ( var i = 0; i < menues.length; i++) {
				if (menues[i].contains(x, y)) {
					menues[i].setColor('#07CE00');
				} else {
					menues[i].setColor('#ffffff');
				}
			}
			
			draw();
		};
	};
}

function Torch(){
	
	var counter = 0;
	var prevTime = 0;
	var img1 = options.getImage('torch_'+(counter%11+1));
	var img2 = options.getImage('torch_'+((counter+5)%11+1));
	this.draw = function(){
		var currentTime = (new Date()).getTime();
		if(currentTime - prevTime > 20){
			prevTime = currentTime;
			counter++;
			img1 = options.getImage('torch_'+(counter%11+1));
			img2 = options.getImage('torch_'+((counter+5)%11+1));
		}
		context.drawImage(img1, 726, 165);
		context.drawImage(img2, 598, 170);
	};
}

function Wizard(){
	
	var counter = 0;
	var prevTime = 0;
	var img = options.getImage('wizard_1');
	var currentImg = img;
	var x = options.fieldWidth;
	
	var isMoving = false;
	var isSpelling = false;
	
	this.draw = function(){
		context.drawImage(currentImg, x, 400);
	};
	
	this.moveTo = function(_x){
		var timer = setInterval(function(){
			if(!isSpelling){
				isMoving = true;
				var currentTime = (new Date()).getTime();
				if(currentTime - prevTime > 50){
					counter++;
					img = options.getImage('wizard_'+(counter%7+1));
					prevTime = currentTime;
					x-=12;
					if(_x >= x){
						isMoving = false;
						counter = 0;
						clearInterval(timer);
					}
				}
				if(img){
					currentImg = img;
				}
			}
		},10);
			
	};
	
	this.makeExpression = function(){
		var timer = setInterval(function(){
			if(!isMoving){
				isSpelling = true;
				var currentTime = (new Date()).getTime();
				
				if(currentTime - prevTime > 90){
					counter++;
					img = options.getImage('wizard_make_'+(counter%11+1));
					prevTime = currentTime;
					if(counter >=11){
						img = options.getImage('wizard_stay');
						clearInterval(timer);
						isSpelling = false;
						counter = 0;
						stars.explode();
						controller.next();
						canvas.onmousedown = playerShoot;
					}
				}
				if(img){
					currentImg = img;
				}
			}
		},10);
	};
}


function Stars(){
	var x = 300;
	var y = 130;
	
	var slidesCount = 11;
	
	var img;
	var currentImg = null;
	
	this.draw = function(){
		if(currentImg != null){
			context.drawImage(currentImg, x,y);
		}
	};
	
	this.explode = function(){
		var counter = 0
		var prevTime = (new Date()).getTime();
		
		var alphaStep = 1.0/slidesCount;
		controller.setExpressionAlpha(0);
		var timer = setInterval(function(){
			var currentTime = (new Date()).getTime();
			
			if(currentTime - prevTime > 30){
				img = options.getImage('star_'+(counter%slidesCount+1));
				counter++;
				prevTime = currentTime;
				controller.setExpressionAlpha(controller.getExpressionAlpha()+alphaStep);
				if(counter > slidesCount){
					clearInterval(timer);
					currentImg = null;
				}
			}
			
			if(img){
				currentImg = img;
			}
		},10);
	};
}

function Spikes(){
	
	var img_count = 6;
	var counter = 0;
	var prevTime = 0;
	
	var paused = false;
	
	var img = options.getImage('spike_'+(counter%img_count+1));
	
	this.pause = function(){
		paused = true;
		var time = (new Date()).getTime();
		var timer = setInterval(function(){
			var currentTime = (new Date()).getTime();
			if(currentTime - time >= 2000){
				paused = false;
				clearInterval(timer);
			}
		},2000);
	};
	
	
	this.draw = function(){
		var currentTime = (new Date()).getTime();
		if(currentTime - prevTime > 60 && !paused){
			img = options.getImage('spike_'+(counter%img_count+1));
			prevTime = currentTime;
			counter++;
			if(counter > img_count){
				counter = 0;
				this.pause();
			}
		}
		context.drawImage(img, 205, 0);
	};
}

function drawRoom() {
	var img = options.getImage('room');
	context.drawImage(img, 0, 0, options.fieldWidth, options.fieldHeight);
}

function drawRightDoor() {
	img = options.getImage('right_door');
	context.drawImage(img, 770, 375);
}

function init() {

	options = new gameOptions();
	
	canvas = document.getElementById("game");
	canvas.width = options.fieldWidth;
	canvas.height = options.fieldHeight;

	context = canvas.getContext("2d");
	context.font = options.font;
	
	
	options.loadAllPictures();
}

function start() {

	

	hp = new HP();
	controller = new LevelController();
	controller.init();

	menu = new Menu();
	menu.init();
	menu.show();
}

function draw() {
	drawRoom();
	spikes.draw();
	torch.draw();
	hp.draw();
	
	controller.draw();
	
	stars.draw();
	
	wizard.draw();
	
	drawRightDoor();
	
	chest1.draw1();
	chest2.draw1();
	balloonsContainer.draw();
	chest1.draw2();
	chest2.draw2();

	

	cross.draw();
	arrow.draw();

	cross_hair.draw();
}

function play() {
	canvas.style.cursor = "none";
	chest1 = new Chest(false);
	chest1.setX(275);
	chest2 = new Chest(true);
	chest2.setX(475);
	arrow = new Arrow();
	spikes = new Spikes();
	stars = new Stars();
	cross = new Crossbow();
	cross.init();

	balloonsContainer = new Balloons();

	cross_hair = new Crosshair();

	canvas.onmousemove = playerMove;
	

	wizard = new Wizard();
	torch = new Torch();
	
	gameTimer = setInterval(draw, 30);

}

function gameOver() {
	if (options.started) {
		stopAndShowMessage('game over');
		options.started = false;
	}
}

function stopAndShowMessage(_message) {
	canvas.onmousedown = function(e){};
	clearInterval(gameTimer);
	var time = 3000;
	var startTime = (new Date()).getTime();
	var x = options.fieldWidth / 2 - context.measureText(_message).width / 2;
	var y = options.fieldHeight / 2 - options.getFontSize() / 2;
	context.fillStyle = "#ffffff";
	var timer = setInterval(function() {
		var t = (new Date()).getTime() - startTime
		if (t >= time) {
			clearInterval(timer);
			context.fillStyle = "#000000";
			context.globalAlpha = 1;
			stop();
		} else {
			context.globalAlpha = 0.05;
			context.fillStyle = "#ffffff";
			context.fillRect(0, 0, options.fieldWidth, options.fieldHeight);
			context.globalAlpha = 1;
			context.fillStyle = "#7AFF85";
			context.fillText(_message, x, y);
		}
	}, 100);
}

function stop() {
	clearInterval(gameTimer);
	context.clearRect(0, 0, options.fieldWidth, options.fieldHeight);
	menu.show();
}

function getX(e){
	return e.pageX - canvas.offsetLeft;
}

function getY(e){
	return e.pageY - canvas.offsetTop;
}

init();
