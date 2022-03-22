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
  it('should be able to check if the user\s guess was correct', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
  });
  it('should be able to check if the user\s guess was incorrect', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('My Guess', currentCard);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });
  it('should be able to provide feedback if an answer is correct', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn.giveFeedback()).to.equal('correct!');
  });
  it('should be able to provide feedback if an answer is correct', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('My Guess', currentCard);

    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
