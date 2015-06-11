/* Thermostat module */

function Thermostat(){

  /* declare variables needed for Thermostat here */
  var currentTemp = 64;

  var convertTempToColor = function(temp){

    //linear conversion from (-40 - 120 to 0 - 360)
    //returns hsl value to style background

    var hue = -1 * ( (temp - (40*-1)) / (120 - (40*-1)) ) * (360 - 0) + 0;
    return 'hsl('+hue+',70%,60%)';

  };

  /* This function initializes the module */
  var init = function(){

    console.log('Thermostat is on.');
    console.log('The current temperature is '+currentTemp+'.');

  };

  /* This line calls init() function. */
  init();

};

/* This line actually calls the Thermostat module */
Thermostat();
