const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0;
    this.currentCard = this.returnCurrentCard();
    this.incorrectGuesses = []
  };
  returnCurrentCard() {
    this.currentCard = this.deck.allCards[this.turns];
    return this.deck.allCards[this.turns];
  };
  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard);
    this.turns += 1;
    this.returnCurrentCard()
    return newTurn;
  };
};
module.exports = Round;
