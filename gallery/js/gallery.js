//Define prototypical Gallery function
Element.prototype.Gallery = function(){
var gallery = this;
var ul = gallery.children[0];

var photos = new Object();
  // Define global variables

  this.singlePhoto = function(ev){
    var target = ev.target;
    var modal = document.getElementById('modal');
    
    modal.innerHTML = '<div class ="single-photo">'+
    target.innerHTML+'<div class="close">'+
    '</div>'
    '</div>';

 
    modal.style.backgroundImage = target.style.backgroundImage;    
    modal.style.zIndex = "11";
   
    modal.children[0].children[2].addEventListener('click',function(){
      modal.style.zIndex = "0";
    });  

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
        '</h6></div><div class="stats"></div>'+
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
