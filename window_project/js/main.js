var x = (function(){
    return this;
})();

var div = document.getElementById('global-obj');
div.innerText = 'x is ' + x;

var y = window;

var div1 = document.getElementById('window-obj');
div1.innerText = 'y is  '+ y;

console.log(window);

// alert('globalObject is equal to windowObject? \n\n' + (globalObject == windowObject));



