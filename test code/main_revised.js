// 1. main function
function Thermostat(){
// 3. declare main variables 

	var currentNum = 64;
	var upButton = document.getElementById('up');
	var downButton = document.getElementById('down');
	var temperatureText = document.getElementById('temp');
	var body = document.body;

// 4. Implement Steve's calculator - I have to parse this thing to understand better...
	var convertTempToColor = function(temp){
    //linear conversion from (-40 - 120 to 0 - 360)
    //returns hsl value to style background
    var hue = -1 * ( (temp - (40*-1)) / (120 - (40*-1)) ) * (360 - 0) + 0;
    return 'hsl('+hue+',70%,60%)';
  };
 // 11. I cheated here by looking at Steve's code. Why can't we throw body.style.backgroundColor into a variable?
  	var changeTemperature = function(temp){
  		temperatureText.innerHTML = temp + '<span>&deg;</span>';
  		body.style.backgroundColor = convertTempToColor(temp);

  	};
// 10. Throw Event Listeners into an init function - pretty little wrapper
	var init = function(){
	   changeTemperature(currentNum);
// 8. Declare variables for 6 and 7 below
	   var timeout;
	   var count = 0;
// 5. Add Event Listener for up Button 	   
	   upButton.addEventListener('mousedown', function(){
// 6. Wrap update operations for mousedown inside of setInterval and set timer to 1/10 of a second
		    timeout = setInterval(function(){
			   	currentNum = currentNum + 1;
			   	changeTemperature(currentNum);
		    }, 100);
	   	return false;
	   });
// 7. Clear the interval on mouseup
	   upButton.addEventListener('mouseup', function(){
		   	clearInterval(timeout);
        return false;
	   });
// 9. Repeat the above steps (6,7) for downbutton
	   downButton.addEventListener('mousedown', function(){
		   	timeout = setInterval(function(){
		   	currentNum = currentNum - 1;
		   	changeTemperature(currentNum);
		   	}, 100);
		return false;
	   });

	   downButton.addEventListener('mouseup', function(){
	   		clearInterval(timeout);
        return false;
	   });
	};
	init();

};

// 2. I know I'm going to have to call this function so might as well call
Thermostat();