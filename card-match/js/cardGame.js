// //Define prototypical Gallery function
// Element.prototype.CardsGame = function(){
  

//Hard Coding in Array Elements, these should pull from Model
var cardGame_array = [];
console.log(cardGame_array);
       
//Empty Array for Values
var cardGame_values = [];
//Empty Array for IDs
var cardGame_card_ids = [];
//This will allow us to compare how many cards have been flipped to see if a match can be made or not
var cards_flipped = 0;

//Fisher-Yates Randomizer - Found Online
Array.prototype.shuffle = function(){
	var i = this.length, j, temp;
	while(--i > 0){
		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;
	}
}
//Declare our New Game
function newGame(){

	cards_flipped = 0;
	var output = '';
	cardGame_array.shuffle();
	for(var i = 0; i < cardGame_array.length; i++){			
		output += '<div id="card_'+i+'" onclick="cardGameFlipcard(this,\''+cardGame_array[i]+'\')"></div>'
	}
	document.getElementById('felt').innerHTML = output;
	
	
}
//Flip the card - lots of logic found online here...
function cardGameFlipcard(card,value){
	if(card.innerHTML == "" && cardGame_values.length < 2){
		
		card.style.background = 'url(img/french-suits.svg#path1939) no-repeat #fff';
		// card.setAttribute("class", "frontOfCard");
		// card.style.webkitTransform = "perspective(600px) rotateX(0deg)";
		// card.style.webkitTransition = "transform .5s linear 0s;";
		card.style.backgroundSize = '240px 210px, auto, 50px';
		card.style.backgroundPosition = '35px 50px';

		
		card.innerHTML = value;
		if(cardGame_values.length == 0){
			cardGame_values.push(value);
			cardGame_card_ids.push(card.id)
		}else if(cardGame_values.length == 1){
			cardGame_values.push(value);
			cardGame_card_ids.push(card.id);
			if(cardGame_values[0] == cardGame_values[1]){
				cards_flipped +=2;
				cardGame_values = [];
				cardGame_card_ids = [];
				if(cards_flipped == cardGame_array.length){
					
					document.getElementById('title').innerHTML = "You Win!";
					newBoard();
				}
			}else{
				function flip2Back(){
					var card_1 = document.getElementById(cardGame_card_ids[0]);
					var card_2 = document.getElementById(cardGame_card_ids[1]);
					card_1.style.background = 'url(img/bicycle-back.png) no-repeat';
					// card_1.setAttribute("class", "backOfCard");
					// card_1.style.webkitTransform = "perspective(600px) rotateX(180deg)";
					// card_1.style.webkitTransition = "transform .5s linear 0s;";
					card_1.style.backgroundSize = 'contain';
					card_1.innerHTML = "";
					card_2.style.background = 'url(img/bicycle-back.png) no-repeat';
					// card_2.setAttribute("class", "backOfCard");
					// card_2.style.webkitTransform = "perspective(600px) rotateX(180deg)";
					// card_2.style.webkitTransition = "transform .5s linear 0s;";
					card_2.style.backgroundSize = 'contain';
					card_2.innerHTML = "";
					cardGame_values = [];
					cardGame_card_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
//Seems like we should pull the data from here and push to cardGame_array
function connect(){
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "./model/suits.json", true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var response = JSON.parse(xhr.responseText);
            var types = response.cardTypes;
            
            for(var x in types){
                cardGame_array.push(types[x].suit);
                	
            }
		}

      }

      xhr.send();
};

//Instantiate our Model and New Game
connect();
newGame();

// };
