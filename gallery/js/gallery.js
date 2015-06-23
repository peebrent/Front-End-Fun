//Define prototypical Gallery function
Element.prototype.Gallery = function(){
var gallery = this;
var ul = gallery.children[0];
var modal = document.getElementById('modal');

var photos = new Object();
  // Define global variables

  this.singlePhoto = function(ev){
    // Assign target property to a variable
    var target = ev.target;
    // Set innerHTML of modal Section
    modal.innerHTML = '<div class ="single-photo">'+
    target.innerHTML+'<div class="close">'+
    '</div>'
    '</div>';
    // Set modal to target
    modal.children[0].style.backgroundImage = target.style.backgroundImage;    
    // Set Modal zIndex
    modal.style.zIndex = "11";
    // Add Event Listener to close button
    modal.children[0].lastChild.addEventListener('click',function(){
      modal.style.zIndex = "0";
    });  
    // Hide Description if not filled out or 'null'
    if (modal.children[0].firstChild.lastChild.innerHTML === 'null'){
      modal.children[0].firstChild.lastChild.style.display = 'none';
    };
   
  };

  this.layoutPhotos = function(){
      // add logic for each photo in here
      
      photos.forEach(function(photo,index){
        var li = document.createElement('li');

        li.style.backgroundImage = 'url("'+photo.image_url+'")';
        li.style.backgroundSize = 'cover';
        
        li.innerHTML = '<div class ="meta"><h5>'+
        photo.name+
        '</h5><h6>'+
        photo.user.fullname+
        '</h6><h7>'+
        photo.description+
        '</h7></div><div class="stats"></div>'+
        photo.rating+'</div></div>'+
        '</div>';
         li.addEventListener('mousedown',gallery.singlePhoto);
         ul.appendChild(li);

         
   
      });
  };


  this.connect = function(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./models/popular-photos.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var response = JSON.parse(xhr.responseText);
            photos = response.photos;
            gallery.layoutPhotos();
            
          // JSON.parse does not evaluate the attacker's scripts via xhr.responseText.

        }
      }
      xhr.send();
  };

  this.init = function(){

    this.connect();

  };


  this.init(); // do tasks on initialization.


};
/* end Gallery */
