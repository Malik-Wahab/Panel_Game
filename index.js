const quizData = [
  {
    question: "What did the Prophet term as the greatest Jihad?",
    a: "The greatest Jihad is to lie to others",
    b: "The greatest Jihad is to suppress the weak",
    c: "The greatest jihad is to struggle with the insidious suggestions of one’s own soul",
    d: "There is no greatest Jihad",
    correct: "c",
  },

  {
    question: "In what circumstances is fighting permitted in Islam?",
    a: "Fighting is not permitted in Islam",
    b: "Fighting is permitted only for the Arabs",
    c: "Fighting is permitted in all circumstances",
    d: "Islam permits the fighting in self-defence, or retribution against tyranny, exploitation and oppression",
    correct: "d",
  },

  {
    question: "Is killing regarded as a sin in Islam",
    a: "Killing is a very minor sin",
    b: "Killing (murder) is regarded as the second major sin",
    c: "Killing is not considered as a sin",
    d: "Killing just one person is not a sin",
    correct: "b",
  },

  {
    question: " Which Prophet is known as the Father of Prophets",
    a: "Prophet Adam (AS)",
    b: "Prophet Ibrahim AS",
    c: "Prophet Muhammad SAW",
    d: "Hazrat Musa AS",
    correct: "b",
  },

  {
    question: "What is the meaning of Islam",
    a: "Peace",
    b: "Submission",
    c: "Love",
    d: "none of the above",
    correct: "b",
  },

  {
    question: "What are the beautiful names of Allah (swt) called in Arabic?",
    a: "Ar-Rahman",
    b: "Al-Asma al-husna",
    c: "Al-Qabid",
    d: "Dhul-Jalali-Wal -Ikram",
    correct: "b",
  },

  {
    question:
      "What is the qualitative name of Allah (swt) which means that he opens gate of sucess and removes the darkness from our minds?",
    a: "Al-Sami",
    b: "Al-Jalil",
    c: "Al-Wadud",
    d: "Al-Fattah",
    correct: "d",
  },

  {
    question: "How many Sajood are there in Quran",
    a: "7",
    b: "8",
    c: "14",
    d: "64",
    correct: "b",
  },

  {
    question: "How Many Rakuh in Holy Quran",
    a: "540",
    b: "40",
    c: "7",
    d: "30",
    correct: "a",
  },

  {
    question: "How many of the companions have been promised paradise?",
    a: "One thousand",
    b: "One hundred",
    c: "Ten",
    d: "One",
    correct: "c",
  },

  {
    question:
      "Who were considered as the closest companions of the Prophet Muhammad (PBUH)?",
    a: "Abu Bakr Al-Siddiq and Omar Bin Al-Khatab",
    b: "Abdullah Ibn Masood and Abdullah Ibn Umar",
    c: "Anas Ibn Malek and Muawiyah Ibn Abu Sufiyan",
    d: "Khalid Ibn Al-Waleed and Salman Al-Faresy",
    correct: "a",
  },

  {
    question:
      "What is the mannerism of brotherhood taught by the Prophet Muhammad (PBUH)?",
    a: "Everyone Should be Selfish",
    b: "One should wish for the brother the same as he wishes for him self",
    c: "Brother Dont Desrve anything",
    d: "None",
    correct: "b",
  },

  {
    question: "What do Muslims say when thanking someone?",
    a: "Alhumdulillah",
    b: "Jazak Allah Khair",
    c: "SubhanAllah",
    d: "Bismillah",
    correct: "b",
  },

  {
    question:
      "Which verse best describes the religious harmony, religious freedom and religious tolerance of Islam in the Holy Quran?",
    a: "There is no religious harmony in Islam",
    b: "Drive away non-Muslims",
    c: "Wo you is your religion, to me be mine",
    d: "None",
    correct: "c",
  },

  {
    question:
      "What does the Quran mention about the use of force to spread the religion?",
    a: "Quran says “..Let there be no compulsion in religion.",
    b: "Quran authorizes use of force for spreading the religion",
    c: "There is no mention in the Quran about the spreading the religion",
    d: "All of the above",
    correct: "a",
  },

  {
    question: "When did Islam come into existence?",
    b: "Islam came into existence after the birth of Prophet Muhammad (PBUH)",
    a: "Islam came into existence only a few centuries ago",
    c: "Islam has been the religion of all the Prophets, from Prophet Adam (PBUH) till Prophet Muhammad (PBUH)",
    d: "Islam does not exist at all",
    correct: "c",
  },
];
window.alert("Welcome to Connect With Deen", "Created By Muhammad Wahab");

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                  <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                  <button onclick="location.reload()">Reload</button>
              `;
      window.alert("Thank You💔");
    }
  }
});
