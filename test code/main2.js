// 1. main function
function Thermostat(){
// 3. declare main variables 

	var currentNum = 64;
	var upButton = document.getElementById('up');
	var downButton = document.getElementById('down');
	var temperatureText = document.getElementById('temp');
	var body = document.body;

// 4. Implement Steve's calculator
	var convertTempToColor = function(temp){
    //linear conversion from (-40 - 120 to 0 - 360)
    //returns hsl value to style background
    var hue = -1 * ( (temp - (40*-1)) / (120 - (40*-1)) ) * (360 - 0) + 0;
    return 'hsl('+hue+',70%,60%)';
  };
 // 12. Create this sucker by looking at Steve's code
  	var changeTemperature = function(temp){
  		temperatureText.innerHTML = temp + '<span>&deg;</span>';
  		body.style.backgroundColor = convertTempToColor(temp);

  	};
// 7. Throw Event Listeners into a function so I can call init
	var init = function(){

	   changeTemperature(currentNum);
	// 5. Add Event Listener for up Button 
	   var timeout;
	   var count = 0;
	   upButton.addEventListener('mousedown', function(){
	   	timeout = setInterval(function(){
	   	currentNum = currentNum + 1;
	   	changeTemperature(currentNum);
	   	}, 100);

	   	// 9. Realize the above alone doesn't work and add below
	   	
	   	return false;
	   });
	   upButton.addEventListener('mouseup', function(){
	   	clearInterval(timeout);
        return false;
	   });
	// 6. Add Event Listener for down Button
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
	// 8. Call init - but why not return the value?
	init();

};

// 2. I know I'm going to have to call this function so might as well call and console.log
Thermostat();