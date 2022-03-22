class Card {
  constructor(cardId, cardQuestion, cardAnswers, cardCorrectAnswer) {
    this.id = cardId;
    this.question = cardQuestion;
    this.answers = cardAnswers;
    this.correctAnswer = cardCorrectAnswer;
  };
};



// const data = require('./data');
// const flashCard = data.prototypeData;
// console.log(flashCard)
// class Card {
//   constructor() {
//     this.currentCard = 1;
//     this.currentCardIndex = this.currentCard - 1;
//     this.id = flashCard[this.currentCardIndex].id
//     this.question = flashCard[this.currentCardIndex].question;
//     this.answers = flashCard[this.currentCardIndex].answers;
//     this.correctAnswer = flashCard[this.currentCardIndex].correctAnswer;
//   };
// };

module.exports = Card;
