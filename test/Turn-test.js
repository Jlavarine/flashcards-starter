const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });
  it('should be an instance of Card', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });
  it('should be able to return the user\'s guess', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('My Guess', currentCard);

    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('My Guess');
  });
  it('should be able to return the current card', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('My Guess', currentCard);

    turn.returnCard();

    expect(turn.returnCard()).to.equal(currentCard);
  });
});
