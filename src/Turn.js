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
};
module.exports = Turn;
