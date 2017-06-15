//object = deck of cards

// 2 players

// dealt up to 2 cards, one card at a time

// if the sum of the two cards are below 17, player hits and gets dealt another cards; objective is to get as close to 21 best as possible

//21 is a win, over 21 is a bust


var deckOfCards = function() {
  var randomRating = Math.floor(Math.random() * 10) + 1;
  console.log(randomRating);
}

deckOfCards();
