Element.prototype.Contact = function(){

	var contact = this,
		form = document.getElementById('c_form'),
		submit = document.getElementById('contact-submit'),
		wrapper = document.getElementById('form-wrapper');//leave feedback


	this.send = function(){
		//collect all the form's information
		var link = 'mailto:paul@polyglyphic.com?subject=Message from ' +
				   form.children[0].value +
				   '&body=' +
				   form.children[3].value;

		window.location.href = link;
		wrapper.innerHTML = '<div class="center"><h1>Thanks!</h1></div>';
		//leave some feedback for the user that the form has been submitted
	};




	this.init = function(){
		//add an event listener on the button which sends the form!
		submit.addEventListener('click',function(ev){
			ev.preventDefault();
			contact.send();
		});


	};

	this.init();

};

