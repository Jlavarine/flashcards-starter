const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.currentCard = deck.allCards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    return this.currentCard;
  };
  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard);
    this.turns += 1;
    return newTurn;

  };
};
module.exports = Round;
