Element.prototype.Search = function(){

	var gallery = document.getElementById('gallery');
	var search = this;
	var input = this.children[0];
	
	// gallery.filterPhotos(query);

	//when the user focuses on the input, clear its contents
	// after the user presses return, filter the gallery <li> using tags from the JSON model
	this.init = function(){
		input.addEventListener('focus',function(){
			this.value = '';
		});
		input.addEventListener('keyup',function(ev){
		
			if(ev.keyCode === 13){
				var query = input.value;
				gallery.filterPhotos(query);
			}
		});
	};

	this.init();

};

