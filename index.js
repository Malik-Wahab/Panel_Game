const quizData = [
    {
        question: "What is 6 + 9 ?",
          a: "69",
          b: "15",
          c: "66",
          d: "99",
          correct: "a",
    },

    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },

    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },

    {
        question: "What does HTML stand for?",
        a: "Hypertext Markdown Language",
        b: "Hypertext Markup Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    },

    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },

    {
        question:"What people think behind your back?",
        a: "Fuck about them",
        b: "Dont think about it",
        c: "They are behind for this reason",
        d: "You care what people think",
        correct: "d",
    },

    {
        question:"Is web development fun?",
        a: "Kinda",
        b: "YES!!!",
        c: "Um no",
        d: "IDK",
        correct: "b",
    },

    {
        question:"What is 4 * 2 ?",
        a: "6",
        b: "8",
        c: "16",
        d: "64",
        correct: "8",
    },
    
    {
        question:"Why I left University",
        a: "Because its useless",
        b: "I dont want to study",
        c: "Time waste ho rha tha",
        d: "Waste of Money",
        correct: "d",
    },
    
    {
        question:"Did I love Inshrah",
        a: "Yes",
        b: "May be",
        c: "IDK",
        d: "Probably",
        correct: "a",
    },
    
    {
        question:"Javascript is an _______ language",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedual",
        d: "None",
        correct: "a",
    },
    
    {
        question:"____ keywords used to define variable in java script?",
        a: "var",
        b: "let",
        c: "Both a and b",
        d: "None",
        correct: "c",
    },
    
    {
        question:"Which of the following methods is used to access HTML elements in java script?",
        a: "getElementbyId()",
        b: "getElementbyClassName()",
        c: "Both a and b",
        d: "None ",
        correct: "c",
    },
    
    {
        question:"Upon encountering empty statements, what does the Javascript Interpreter do?",
        a: "Throws an error",
        b: "Ignore the statements",
        c: "Gives a warning",
        d: "None ",
        correct: "b",
    },
    
    {
        question:"Which of the following methods can be used to display data in some from using javascript?",
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
        correct: "d",
    },
    
    {
        question:"when the switch statement matches the expression with the given labels, how is the comparrison done"     , 
        b: "Both the datatype and the result of the expression are compared",
        a: "Only the datatype of the expression is compared",
        c: "Only the value of the expression is compared",
        d: "None of the above",
        correct: "b",
    },
];
window.alert("Created By Muhammad Wahab");
console.log('Inshrah Wahab');


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
            

        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++

        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
            console.log('Inshrah Wahab');

        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})