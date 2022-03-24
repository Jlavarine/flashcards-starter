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
    game = new Game();

    expect(Game).to.be.a('function');
  });
  it('should be an instance of Game', function() {
    game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });
  it('should be able to track the current round', function() {
    game = new Game();
    game.start();
    const round = new Round(deck)

    expect(game.currentRound).to.equal(round);
  });
  // it('should create cards', function() {
  //   game = new Game(deck,round);
  //
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
  //   expect(game.start(card1)).to.equal(card1)
  // })
});
