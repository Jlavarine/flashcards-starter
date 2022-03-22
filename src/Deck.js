class Deck {
  constructor(arrayOfCards) {
    this.allCards = arrayOfCards
  };
  countCards() {
    return this.allCards.length
  };
};

module.exports = Deck;
