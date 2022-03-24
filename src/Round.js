const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.allCards[0];
    this.incorrectGuesses = [];
  };
  returnCurrentCard() {
    return this.deck.allCards[this.turns];
  };
  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard);
    newTurn.evaluateGuess();
    if(newTurn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns += 1;
    this.currentCard = this.returnCurrentCard();
    return newTurn.giveFeedback();
  };
  calculatePercentageCorrect() {
    return ((this.deck.allCards.length - this.incorrectGuesses.length) / this.deck.allCards.length) * 100;
  };
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`);
    return  `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`;
  };
};
module.exports = Round;
