// Define prototypical Navigation Menu function
Element.prototype.NavMenu = function(){

	var hamburger = document.getElementById('hamburger');
	var containerPos = 0;
	var container = document.getElementById('container');

	this.moveNav = function(){

		hamburger.addEventListener('click', function(){
			if (containerPos === 0){	
			container.style.left = 240  + 'px';
			containerPos += 240;
			}
			else {
			container.style.left = 0  + 'px';
			containerPos = 0;
			}
		});
	};

	this.init = function(){

		this.moveNav();

	};

	this.init();

};


/* end Navigation */
