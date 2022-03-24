const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const expect = chai.expect;

describe('Game', function () {
  let game;
  let round;
  let turn;
  let deck;
  let card1;
  let card2;
  let card3;
  let currentCard;

  beforeEach(() => {
    game = new Game();
    // game = new Game(deck,round);
    // round = new Round(deck);
    // turn = new Turn('my guess', currentCard);
    // deck = new Deck([card1, card2, card3]);
    // card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    // card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    // card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    // currentCard = round.currentCard;
  })

  it('should be a function', function() {

    expect(Game).to.be.a('function');
  });
  it('should be an instance of Game', function() {

    expect(game).to.be.an.instanceof(Game);
  });
  it('should create an instance of cards', function() {
    game.createCards()


    expect(game.cards[0]).to.be.an.instanceof(Card);
  });
  it('should create an instance of deck', function() {
    cards = game.createCards()
    game.createDeck()


    expect(game.deck).to.be.an.instanceof(Deck);
  });
  it('should create an instance of round', function() {
    cards = game.createCards()
    deck = game.createDeck()
    game.createRound()


    expect(game.round).to.be.an.instanceof(Round);
  });
  // it('should create an instance of round', function() {
  //   cards = game.createCards()
  //   deck = game.createDeck()
  //   game.createRound()
  //   game.start()
  //
  //   expect(true).to.be.equal(true);
  // });
  // it('Should freaking work', function() {
  //   cards = game.createCards()
  //   deck = game.createDeck()
  //   game.createRound()
  //
  //
  //   expect(game.round).to.be.an.instanceof(Round);
  // });

});
