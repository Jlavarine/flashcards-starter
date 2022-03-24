// This is where your project starts.
const Deck = require('./src/Deck');
const Card = require('./src/Card');
const Turn = require('./src/Turn');
const Round = require('./src/Round');
const Game = require('./src/Game');
console.log('Your project is running...');

const game = new Game()

game.start();
