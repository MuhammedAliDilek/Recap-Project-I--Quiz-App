// question label
const questionInfo = document.querySelector("#question-info");
//answer label
const answerInfo = document.querySelector("#answer-info");

// question textarea
const question = document.querySelector("#question");
// Answer textarea
const answer = document.querySelector("#answer");

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
