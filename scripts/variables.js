const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const resButton = document.querySelector(".btn-result");
const questionBody = document.querySelector(".quiz__body");
const questionNumberText = document.querySelector(".question-number");
const dotIndicator = document.querySelectorAll(".indicator");
const resultBlock = document.querySelector(".result");
const quizBlock = document.querySelector(".quiz");
const productsBlock = document.querySelector(".result__products");
const discountPrice = document.querySelector(".discount-price");
const questionText = document.createElement("h2");
const questionChoices = document.createElement("ul");

export {
  nextButton,
  prevButton,
  resButton,
  questionBody,
  questionNumberText,
  dotIndicator,
  resultBlock,
  quizBlock,
  productsBlock,
  discountPrice,
  questionText,
  questionChoices,
};
