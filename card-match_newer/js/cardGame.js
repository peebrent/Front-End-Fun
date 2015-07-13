

//Hard Coding in Array Elements
var cardGame_array = ['spades', 'hearts', 'clubs', 'diamonds','spades', 'hearts', 'clubs', 'diamonds','spades', 'hearts', 'clubs', 'diamonds','spades', 'hearts', 'clubs', 'diamonds', 'spades', 'spades'];
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
		output += '<div id="card_'+i+'" class="flipped" onclick="cardGameFlipcard(this,\''+cardGame_array[i]+'\')"></div>'
	}
	document.getElementById('felt').innerHTML = output;
	
	
}
//Flip the card - lots of logic found online here...
function cardGameFlipcard(card,val){
	
	if(card.innerHTML == "" && cardGame_values.length < 2){
		
		if (val === 'hearts'){
		card.classList.add("hearts");
		card.classList.add("front");
		card.style.webkitTransform = "rotateX(0deg)";
		card.style.transform = "rotateX(0deg)";
		card.style.background = 'url(img/hearts.svg) no-repeat 74% 84% #fff';
		card.style.backgroundSize = '340% 340%';
		}
		else if (val === 'spades'){
		card.classList.add("spades");
		card.classList.add("front");
		card.style.webkitTransform = "rotateX(0deg)";
		card.style.transform = "rotateX(0deg)";
		card.style.background = 'url(img/spades.svg) no-repeat 43% 86% #fff';
		card.style.backgroundSize = '340% 340%';
		}
		else if (val === 'clubs'){
		card.classList.add("clubs");
		card.classList.add("front");
		card.style.webkitTransform = "rotateX(0deg)";
		card.style.transform = "rotateX(0deg)";
		card.style.background = 'url(img/clubs.svg) no-repeat 74% 105% #fff';
		card.style.backgroundSize = '340% 340%';
		}
		else if (val === 'diamonds'){
		card.classList.add("diamonds");
		card.classList.add("front");
		card.style.webkitTransform = "rotateX(0deg)";
		card.style.transform = "rotateX(0deg)";
		card.style.background = 'url(img/diamonds.svg) no-repeat 43% 105% #fff';
		card.style.backgroundSize = '340% 340%';
		}
		
		
		if(cardGame_values.length == 0){
			cardGame_values.push(val);
			cardGame_card_ids.push(card.id)
		}
		else if(cardGame_values.length == 1){
			cardGame_values.push(val);
			cardGame_card_ids.push(card.id);
			if(cardGame_values[0] == cardGame_values[1]){
				cards_flipped +=2;
				cardGame_values = [];
				cardGame_card_ids = [];
				if(cards_flipped == cardGame_array.length){
					document.getElementById('title').innerHTML = "You Win!";
					newBoard();
				}
			}
			else{
				function flip2Back(){
					var card_1 = document.getElementById(cardGame_card_ids[0]);
					var card_2 = document.getElementById(cardGame_card_ids[1]);
					card_1.style.background = 'url(img/bicycle-back.png) no-repeat';
					card_1.style.backgroundSize = 'contain';
					card_1.style.webkitTransform = "rotateX(180deg)";
					card_1.style.transform = "rotateX(180deg)";
					card_1.innerHTML = "";
					card_2.style.background = 'url(img/bicycle-back.png) no-repeat';
					card_2.style.backgroundSize = 'contain';
					card_2.style.webkitTransform = "rotateX(180deg)";
					card_2.style.transform = "rotateX(180deg)";
					card_2.innerHTML = "";
					cardGame_values = [];
					cardGame_card_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}

//Instantiate our New Game
newGame();
