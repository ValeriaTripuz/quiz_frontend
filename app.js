const questions = [
  {
    id: 1,
    question: "Сколько вам лет?",
    choices: [
      "Нужны средства для ребёнка младше 10 лет",
      "Мне меньше 25 лет",
      "От 25 до 35 лет",
      "От 35 до 45 лет",
      "Мне больше 45 лет",
    ],
  },
  {
    id: 2,
    question: "Какой у вас тип кожи?",
    choices: ["Сухая", "Нормальная", "Комбинированная", "Жирная"],
  },
  {
    id: 3,
    question: "Беспокоят ли воспаления на лице?",
    choices: ["Да", "Нет", "Иногда"],
  },
];

let questionId = 1;
const nextButton = document.querySelector(".btn__next");
const questionBody = document.querySelector(".quiz__body");
let questionText = document.createElement("h2");
let questionChoices = document.createElement("ul");
const prevButton = document.querySelector(".btn__prev");
const resButton = document.querySelector(".btn__result");
const questionNumberText = document.querySelector(".question__number");
const dotIndicator = document.querySelectorAll(".indicator");

const resultBlock = document.querySelector(".result");
const quizBlock = document.querySelector(".quiz");

async function getProducts() {
  await fetch("./files/products.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addProductsToPage(data);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

const productsBlock = document.querySelector(".result__products");
const discontPrice = document.querySelector(".discont_price");

function addProductsToPage(data) {
  data.forEach((item) => {
    productsBlock.innerHTML += `
      <div class="result__item">
      <div class="item_img">
      <img class='heart_img'src="./images/Vector.jpg" alt="" />
      <img src="${item.image}" alt="" />
      </div>
      <h3 class="item_name">${item.title}</h3>
      <div class="item_prices">
        <span class="discont_price">${
          item.oldPrice == null ? "" : item.oldPrice
        }</span>
        <span class="price"> ${item.price} <span>руб.</span></span>
      </div>
    </div>`;
  });
}

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
      questionNumberText.innerHTML = `Вопрос ${id} из 3`;
      questionsItem.choices.forEach((choicesItem) => {
        questionChoices.innerHTML += `<li><input type="radio"> ${choicesItem}</li>`;
        questionBody.appendChild(questionChoices);
      });
    }
  });
  questionId > 1 && questionId <= 3
    ? (prevButton.style.display = "block")
    : (prevButton.style.display = "none");

  if (questionId == 3) {
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
