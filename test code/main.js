/* Thermostat module */

function Thermostat(){

  /* declare variables needed for Thermostat here */
  var currentTemp = 64;
  var upButton = document.getElementById('up');
  var downButton = document.getElementById('down');
  var temperatureText = document.getElementById('temp');
  /* why does the below need an array index passed? */
  var body = document.body;

  /* where is below 'temp' being defined? */
  var convertTempToColor = function(temp){
    //linear conversion from (-40 - 120 to 0 - 360)
    //returns hsl value to style background
    var hue = -1 * ( (temp - (40*-1)) / (120 - (40*-1)) ) * (360 - 0) + 0;
    return 'hsl('+hue+',70%,60%)';
  };

  var changeTemperature = function(temp){
    temperatureText.innerHTML = temp + '<span>&deg;</span>';
    body.style.backgroundColor = convertTempToColor(temp);
  };

  /* This function initializes the module */
  var init = function(){
    changeTemperature(currentTemp);

    upButton.addEventListener('mousedown', function(){
      currentTemp = currentTemp + 1;
      changeTemperature(currentTemp);

    });

    downButton.addEventListener('mousedown', function(){
      currentTemp = currentTemp - 1;
      changeTemperature(currentTemp);

    });

  };

  /* This line calls init() function. */
  init();
};

/* This line actually calls the Thermostat module */
Thermostat();
