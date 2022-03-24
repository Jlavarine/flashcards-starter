const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.currentRound;
  };
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
};
  printQuestion(round) {
      util.main(round);
  };
  start() {
    let cards = prototypeQuestions.map(obj => new Card(obj.id, obj.question, obj.answers, obj.correctAnswer))
    const deck = new Deck(cards)
    const round = new Round(deck)
    this.currentRound = round;
    // this.printMessage(deck, round);
    // this.printQuestion(round);
  };
};

module.exports = Game;
