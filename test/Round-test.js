const chai = require('chai');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const expect = chai.expect;

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let currentCard;
  let turn;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    currentCard = round.currentCard;
    turn = new Turn('my guess', currentCard);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });
  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round)
  })
  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  })
  it('should create a new instance of turn', function() {
    round.takeTurn()

    expect(round.takeTurn()).to.be.an.instanceof(Turn)
  })
  it('should increase the turns count for each turn', function() {
    round.takeTurn()

    expect(round.turns).to.equal(1)
  })
  it('should have the next card become the current card', function() {
    round.takeTurn();

    expect(round.currentCard).to.equal(round.deck.allCards[round.turns])
  })
  it('should evaluate if the user\s guess is correct', function() {
    turn.guess = 'sea otter'
    expect(turn.guess).to.equal(round.currentCard.correctAnswer)
  })
  it('should evaluate if the user\s guess is incorrect', function() {
    expect(turn.guess).to.not.equal(round.currentCard.correctAnswer)
  })
  it('should push the ID of the current card if the guess is incorrect', function() {
    expect(turn.guess).to.not.equal(round.currentCard.correctAnswer)
    round.takeTurn('my guess')
    expect(round.incorrectGuesses[0]).to.equal(round.currentCard.id)
  })
  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('my guess')
    expect(round.calculatePercentageCorrect()).to.equal(round.incorrectGuesses.length / round.deck.allCards.length)
  })
  it('should print the round over message to the console', function() {
    round.takeTurn('my guess')
    expect(round.endRound()).to.equal(`** Round over! ** You answered <${round.calculatePercentageCorrect()}>% of the questions correctly!`)
  })
});
