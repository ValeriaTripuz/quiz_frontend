import { questions } from "./questions.js";
import getProducts from "./data.js";
import {
  nextButton,
  prevButton,
  resButton,
  questionBody,
  questionNumberText,
  dotIndicator,
  resultBlock,
  quizBlock,
  questionText,
  questionChoices,
} from "./variables.js";

let questionId = 1;
// discountPrice.style.display = "none";

displayQuestion(questionId);

nextButton.addEventListener("click", () => {
  if (questionId < questions.length) {
    questionId++;
    questionChoices.innerHTML = "";
    displayQuestion(questionId);
  }
});

prevButton.addEventListener("click", () => {
  questionId--;
  questionChoices.innerHTML = "";
  displayQuestion(questionId);
});

resButton.addEventListener("click", () => {
  getProducts();
  quizBlock.style.display = "none";
  resultBlock.style.display = "block";
});

function displayQuestion(id) {
  questions.forEach((questionsItem) => {
    if (id === questionsItem.id) {
      questionText.innerHTML = questionsItem.question;
      questionBody.appendChild(questionText);
      questionNumberText.innerHTML = `Вопрос ${questionsItem.id} из ${questions.length}`;
      questionsItem.choices.forEach((choicesItem) => {
        questionChoices.innerHTML += `<li><input type="radio" id='${questionsItem.id}' name="${questionsItem.id}"> ${choicesItem}</li>`;
        questionBody.appendChild(questionChoices);
      });
    }
  });
  questionId > 1 && questionId <= questions.length
    ? (prevButton.style.display = "block")
    : (prevButton.style.display = "none");

  if (questionId == questions.length) {
    resButton.style.display = "block";
    nextButton.style.display = "none";
  } else {
    resButton.style.display = "none";
    nextButton.style.display = "block";
  }

  dotIndicator.forEach((dot, index) => {
    index === questionId - 1
      ? (dot.style.backgroundColor = "#00A5FF")
      : (dot.style.backgroundColor = "rgb(160, 208, 246)");
  });
}

// const heart = document.querySelector(".result__item__img_heart");

// heart.addEventListener("click", () => {
//   heart.style.filter = "invert(90%)";
// });
