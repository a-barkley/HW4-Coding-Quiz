var questionPrompt1 = {
    question: "What is the term used for a function inside of another function?",
    answer1: "within",
    answer2: "nested",
    answer3: "embedded",
    answer4: "installed"
}

var questionPrompt2 = {
    question: "How do you print something to the console?",
    answer1: "console.log",
    answer2: "console.print",
    answer3: "console.enter",
    answer4: "console.insert"
}

var questionPrompt3 = {
    question: "What is a variable that holds multiple items called?",
    answer1: "a list",
    answer2: "a loop",
    answer3: "an array",
    answer4: "a function"
}

var questionPrompt4 = {
    question: "What is the term for a block of code used to perform a specific task?",
    answer1: "a list",
    answer2: "a loop",
    answer3: "an array",
    answer4: "a function"
}

var questionPrompt5 = {
    question: "What is the correct syntax for declaring a variable?",
    answer1: "var == 'myvariable'",
    answer2: "'myvariable'",
    answer3: "variable = 'myvariable'",
    answer4: "var = 'myvariable'"
}

var questionsArray = [questionPrompt1, questionPrompt2];
var answersArray = ["nested"];

function checkAnswer(answerSelected, realAnswer) {
    return (answerSelected === realAnswer);
}

function makeQuiz() {
    for (var i = 0; i < questionsArray.length; i++) {
        document.getElementByID("questionPlaceholder").innerHTML = questionsArray[i].question;
        document.getElementByID("answer1Placeholder").innerHTML = questionsArray[i].answer1;
        answer1Placeholder.addEventListener("click", checkAnswer(questionsArray[i].answer1, answersArray[i]));
        answer2Placeholder = quizQuestions.answer2;
        answer3Placeholder = quizQuestions.answer3;
    }
}

function makeHighscores() {
    console.log("highscores")
}

start.addEventListener("click", makeQuiz);
highscores.addEventListener("click", makeHighscores)
