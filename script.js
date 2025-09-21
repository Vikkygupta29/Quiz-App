// Quiz Data
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hypertext Machine Language",
      "Hyperlink and Text Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    correct: 2
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style System",
      "Computer Styled Sections",
      "Colorful Style Syntax"
    ],
    correct: 0
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    correct: 2
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    correct: 0
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Sun Microsystems", "Google", "IBM"],
    correct: 1
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "styles", "style", "font"],
    correct: 2
  },
  {
    question: "Which of the following is a backend language?",
    options: ["JavaScript", "PHP", "CSS", "HTML"],
    correct: 1
  },
  {
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<hyper>"],
    correct: 0
  }
];

// Select elements
const answerElm = document.querySelectorAll(".answer");
const questionElm = document.querySelector("#question");
const option_1 = document.querySelector("#option_1");
const option_2 = document.querySelector("#option_2");
const option_3 = document.querySelector("#option_3");
const option_4 = document.querySelector("#option_4");
const submitBtn = document.querySelector("#submit");
const quiz = document.querySelector("#quiz");

let currentQuiz = 0;
let score = 0;

// Load quiz question
function loadQuiz() {
  answerElm.forEach(el => el.checked = false);
  const currentQuizData = quizData[currentQuiz];
  // Show question number
  questionElm.innerText = `${currentQuiz + 1}: ${currentQuizData.question}`;
  option_1.innerText = currentQuizData.options[0];
  option_2.innerText = currentQuizData.options[1];
  option_3.innerText = currentQuizData.options[2];
  option_4.innerText = currentQuizData.options[3];
}


// Get selected answer
function getSelected() {
  let answerIndex = undefined;
  answerElm.forEach((el, index) => {
    if (el.checked) {
      answerIndex = index;
    }
  });
  return answerIndex;
}

// Submit button click
submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer !== undefined) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Restart</button>
      `;
    }
  }
});

// Load first question
loadQuiz();
