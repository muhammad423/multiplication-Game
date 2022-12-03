let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
let correctAns = num1 * num2;
let score = 0;

function changeQuestion() {
    num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    correctAns = num1 * num2;
    questionEl.innerText = `What is ${num1} multiply by ${num2}`;
    scoreEl.innerText = score;
    inputEl.value = null;
    inputEl.focus();
}

changeQuestion();
formEl.addEventListener("submit", (x) => {
  x.preventDefault();
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
      score++;
      console.log("submit correct", userAns, correctAns, score)
    } else {
        score--;
        console.log("submit false", userAns, correctAns, score)
  }
  changeQuestion();
});
