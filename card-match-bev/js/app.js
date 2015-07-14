var Card = function(elem,parent,className) {
  var self = this;
  
  this.element = document.createElement(elem);
  this.element.classList.add(className);
  this.element.addEventListener('mousedown',self.flipCard);
  parent.appendChild(self.element);
};

Card.prototype = {

  setContent : function(content){
    this.element.innerHTML = content;



    
  
    
   
  
  },
  flipCard : function(ev){
  
    
  
    // var x = ev.target.parentNode.children[0];
    // console.log(ev.target.parentNode.children[0].className);
   
    
    // x.classList.add('flipped');
    // for (var i=0; i < cardStash.length; i++){
    // cardStash.push(xClass[i]);
    // console.log(cardStash[i]);
    // }
    // // console.log(x);
    // // y = setTimeout(function(){x.toggle('flipped')},3000);
    // // z = document.getElementsByClassName('flipped');
    // // console.log(z);
    // if (x.length === 2) {
    //   firstc = x[0].innerHTML;
    //   // console.log(x[0]);
    //   secondc = x[1].innerHTML;
    //   if (firstc === secondc) {
    //     // console.log('matcht')
    //     clearTimeout(y);
      }
 
};

var Controller = function(){
  this.model = [];

};


Controller.prototype = {
  fetchCards : function(){
    var self = this;
    var cardStash = [];
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './model/cards.json');
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        //parse our json
      //  console.log(xhr.responseText);
        var model = JSON.parse(xhr.responseText);

        function Shuffle(o) {
	        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	        return o;
        };
        card = Shuffle(model.cards);
        
        cardStash.push(model.cards);
        console.log(cardStash);
       
        model.cards.forEach(function(card){
           var c;
           c = new Card('div',document.getElementById('container'),'cards');
           c.setContent('<div class="back"></div><div class="front"><div class='
           + card.suit + '>');
           
           self.model.push(c);
          

         
        });
      }
    };
    xhr.send();
  }
};

var appController = new Controller();
appController.fetchCards();
