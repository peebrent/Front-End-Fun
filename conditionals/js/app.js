// 1
var compare = function (){
// 4
	var a = document.getElementById('a').value;
	a = parseFloat(a);
// 5
	var b = document.getElementById('b').value;
	b = parseFloat(b);
// 6
	var comparison;
// 7
	if (a > b){
	comparison = ">";
	}
	else if (a < b){
	comparison = "<";
	}
	else if (a === b){
	comparison = "=";
	}
// 8
	document.getElementById('comparison').innerHTML = comparison;

};

// 2
var compareElement = document.getElementById('submit');
// 3
compareElement.addEventListener('click', compare);