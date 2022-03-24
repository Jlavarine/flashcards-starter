const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');
const expect = chai.expect;

describe('Game', function () {
  let game;

  beforeEach(() => {
    game = new Game();
  })
  
  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create an instance of cards', function() {
    game.createCards();
    expect(game.cards[0]).to.be.an.instanceof(Card);
  });

  it('should create an instance of deck', function() {
    cards = game.createCards();
    game.createDeck();
    expect(game.deck).to.be.an.instanceof(Deck);
  });

  it('should create an instance of round', function() {
    cards = game.createCards();
    deck = game.createDeck();
    game.createRound();
    expect(game.round).to.be.an.instanceof(Round);
  });
});
