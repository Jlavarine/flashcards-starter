class Card {
  constructor(cardId, cardQuestion, cardAnswers, cardCorrectAnswer) {
    this.id = cardId;
    this.question = cardQuestion;
    this.answers = cardAnswers;
    this.correctAnswer = cardCorrectAnswer;
  };
};
module.exports = Card;
