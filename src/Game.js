const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.cards;
    this.deck;
    this.round;
  };
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
};
  printQuestion(round) {
      util.main(round);
  };
  start() {
    this.createCards();
    this.createDeck();
    this.createRound();
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  };
  createCards() {
    let cards = prototypeQuestions.map(obj => new Card(obj.id, obj.question, obj.answers, obj.correctAnswer));
    this.cards = cards;
  };
  createDeck() {
    const deck = new Deck(this.cards);
    this.deck = deck;
  };
  createRound() {
    const round = new Round(this.deck);
    this.round = round;
  };
};
module.exports = Game;
