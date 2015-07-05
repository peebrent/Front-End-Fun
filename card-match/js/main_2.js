//Define prototypical Cards function - This is, essentially, our controller

Element.prototype.CardsGame = function(){
var card_array  = [];//an array to hold the content (‘diamonds,spades,hearts,clubs’)
var card_values = [];//empty array to store values
var card_tile_ids = [];//empty array for id’s
var cards_flipped = 0;//0 by default - to identify if a match should occur

//A Randomizer for the Loop - Found online
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

//Instantiate a new permutation
this.newBoard = function(){
    cards_flipped = 0;
    var output = '';
    console.log('hello from newBoard!');

    card_array.memory_tile_shuffle();
    for(var i = 0; i < card_array.length; i++){
        output += '<div id="tile_'+i+'"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}


//Pull in content from Model
this.connect = function(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./model/suits.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var response = JSON.parse(xhr.responseText);
            types = response.cardTypes;
            card_array.push(types);
            console.log(card_array);
        }
      }
      xhr.send();
};

this.init = function(){

      this.connect();
       this.newBoard();

};


this.init();
            
};

