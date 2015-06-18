// Define prototypical Navigation Menu function
Element.prototype.NavMenu = function(){

	var navMenu = this;
	var hamburger = document.getElementById('hamburger');
	var containerPos = parseInt(document.getElementById('container').style.left);
	var container = document.getElementById('container');

	this.moveNav = function(){

		hamburger.addEventListener('click', function(){
			if (containerPos === 0){	
			container.style.left = 240  + 'px';
			}
			else {
			container.style.left = 240  + 'px';
			}
		});
	};

	this.init = function(){

		this.moveNav();

	};

	this.init();

};


/* end Navigation */
