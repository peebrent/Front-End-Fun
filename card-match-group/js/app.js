var Card = function(elem,parent,className) {
  var self = this;
  var tiles_flipped = 0;//no tiles are flipped by default
  this.element = document.createElement(elem);
  this.element.classList.add(className);
  this.element.addEventListener('mousedown',self.flipCard);
  parent.appendChild(self.element);
};

Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

Card.prototype = {
  setContent : function(content){
    this.element.innerHTML = content;
  },


  flipCard : function(ev){

     var self = this;
     var memory_values = [];
     var cardID = this.children[1].children[0].className;
     if (memory_values.length < 2){//if the "memory values" array is under 2 it's either 0 or 1 so...
        
        if (memory_values.length == 0){//if the "memory values" array is zero
          memory_values.push(cardID);//populate it with whatever the user clicks on
          console.log(cardID);
        }
        else if (memory_values.length == 1){//if the "memory values" array is 1
          memory_values.push(cardID); //populate the 2nd value (since 1st is set) with whatever the user clicks on
          if (memory_values[0] == memory_values[1]){//if the 1st value is equal to the second value
            tiles_flipped += 2;//total number of tiles flipped is 2 so...
            memory_values = [];
            if(tiles_flipped == memory_array.length){
                document.getElementById('container').h1.innerHTML = "You Win!";
              }
          }
          else{
            function flip2back(){
              var card_1 = document.getElementById(memory_values[0]);
              var card_2 = document.getElementById(memory_values[1]);

            }
          }
        }

        console.log(memory_values);
    }
     

    // var x = ev.target.
     setTimeout(function(){
      ev.target.classList.add('flipped');
  
    },1);
  }
};

var Controller = function(){
  this.model = [];
};


Controller.prototype = {
  // flipCard : function(){
  //   console.log('yo');
  //   var cardback = document.getElementsByClassName('back');
  //   cardback.addEventListener('mousedown',function(){
  //     cardback.style.opacity = 0.0;
  //     cardback.style.zIndex = 0;
  //     cardback.style.display = 'none';
  //   });
  // },
  // createView : function(){
  //   var self = this;
  //   for(x=0;x<maxset;x++){
  //     this.model.forEach(function(card){
  //       var view = new View('div',document.body,'cards');
  //       view.setContent('<div class="back"></div><div class="front"><div class="'+card.model.suit+'"</div></div>');
  //     //  self.flipCard();
  //     });
  //   }
  // },
  fetchCards : function(){
    var self = this;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './model/cards.json');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        //parse our json
      //  console.log(xhr.responseText);
        var model = JSON.parse(xhr.responseText);
        model.cards.forEach(function(card){

           var c;
           c = new Card('div',document.getElementById('container'),'cards');
           c.setContent('<div class="back"></div><div class="front"><div class="'+card.suit+'"></div></div>');
           self.model.push(c);

        });
        //self.createView();

      }
    };
    xhr.send();
  }
};

var appController = new Controller();
appController.fetchCards();
