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
    return this.currentCard
  };
  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard);
    newTurn.evaluateGuess()
    this.turns += 1;
    this.returnCurrentCard()
    if(newTurn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(this.currentCard.id)
    };
    return newTurn;
  };
  calculatePercentageCorrect() {
    return this.incorrectGuesses.length / this.deck.allCards.length
  };
  endRound() {
    console.log(`** Round over! ** You answered <${this.calculatePercentageCorrect()}>% of the questions correctly!`)
    return  `** Round over! ** You answered <${this.calculatePercentageCorrect()}>% of the questions correctly!`
  }
};
module.exports = Round;
