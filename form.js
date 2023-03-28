// question label
const questionInfo = document.querySelector("#question-info");
//answer label
const answerInfo = document.querySelector("#answer-info");

// question textarea
const question = document.querySelector("#question");
// Answer textarea
const answer = document.querySelector("#answer");

//const form = document.getElementById("from");

const textCharacterSizeLimit = 50;

// IIFE method
(function () {
  const textAreas = document.querySelectorAll(".form-textarea");

  textAreas.forEach((textArea) => {
    textArea.setAttribute("maxlength", textCharacterSizeLimit);
  });

  questionInfo.innerHTML = `${textCharacterSizeLimit} character left`;

  question.addEventListener("focus", (event) => {
    setQuestionLabelLimitSize(event);
    questionInfo.classList.add("visible");
    questionInfo.classList.remove("hidden");
  });

  question.addEventListener("blur", (event) => {
    questionInfo.classList.add("hidden");
    questionInfo.classList.remove("visible");
  });

  question.addEventListener("input", (event) => {
    setQuestionLabelLimitSize(event);
  });

  answerInfo.innerHTML = `${textCharacterSizeLimit} character left`;

  answer.addEventListener("focus", (event) => {
    setAnswerLabelLimitSize(event);
    answerInfo.classList.add("visible");
    answerInfo.classList.remove("hidden");
  });

  answer.addEventListener("blur", (event) => {
    answerInfo.classList.add("hidden");
    answerInfo.classList.remove("visible");
  });

  answer.addEventListener("input", (event) => {
    setAnswerLabelLimitSize(event);
  });
})();

function setQuestionLabelLimitSize(event) {
  const remainingLimitSize = textCharacterSizeLimit - event.target.value.length;
  questionInfo.innerHTML = `${remainingLimitSize} character left`;
}

function setAnswerLabelLimitSize(event) {
  const remainingLimitSize = textCharacterSizeLimit - event.target.value.length;
  answerInfo.innerHTML = `${remainingLimitSize} character left`;
}

// new card

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function createCard() {
  // Get the form elements
  const question = document
    .getElementById("question")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
  const answer = document
    .getElementById("answer")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
  const tags = document
    .getElementById("tags")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });

  // Create the card elements
  const card = document.createElement("div");
  const cardQuestion = document.createElement("h5");
  const cardAnswer = document.createElement("p");
  const cardTags = document.createElement("p");

  // Set the text content of the card elements
  cardQuestion.textContent = question.value;
  cardAnswer.textContent = answer.value;
  cardTags.textContent = tags.value;

  // Append the card elements to the card
  card.appendChild(cardQuestion);
  card.appendChild(cardAnswer);
  card.appendChild(cardTags);

  // Append the card to the page, directly below the form
  const form = document.getElementById("form");
  form.parentNode.insertBefore(card, form.nextSibling);
}
