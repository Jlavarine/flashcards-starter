class Turn {
  constructor(userGuess, currentCard) {
    this.guess = userGuess;
    this.card = currentCard;
  };
  returnGuess() {
    return this.guess;
  };
  returnCard() {
    return this.card;
  };
  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      return true
    } else if(this.guess !== this.card.correctAnswer) {
      return false
    };
  };
  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'correct!'
    } else if(!this.evaluateGuess()) {
      return `incorrect!`
    }
  };
};
module.exports = Turn;
