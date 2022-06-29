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
    answer2: "'myvariable' =",
    answer3: "variable myvariable =",
    answer4: "var myvariable ="
}

var questionsArray = [questionPrompt1, questionPrompt2, questionPrompt3, questionPrompt4, questionPrompt5];
var correctAnswers = ["nested", "console.log", "an array", "a function", "var myvariable ="];
var i = 0
var playerInitials = ""

var timeLeft = 60
var timer = document.getElementById("timerPlaceholder")
var timerInterval;
timer.textContent = "Time left: " + timeLeft;

function timerFunction() {
    console.log("I am working")
    clearInterval(timerInterval);
    timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
        } 
        if (i >=5) {
            clearInterval(timerInterval);
        }
        if (timeLeft < 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

function checkAnswer(answerSelected, realAnswer) {
    if (answerSelected == realAnswer) {
        i++
        makeQuiz();
    } else {
        console.log('false');
        timeLeft -= 5;
    }
}

function resetQuiz() {
    timeLeft = 60;
    timer.textContent = "Time left: " + timeLeft;
    i = 0;
    document.getElementById("questionPlaceholder").innerHTML = "";
    document.getElementById("answer1Placeholder").innerHTML = "";
    document.getElementById("answer2Placeholder").innerHTML = "";
    document.getElementById("answer3Placeholder").innerHTML = "";
    document.getElementById("answer4Placeholder").innerHTML = "";
    clearInterval(timerInterval);
    document.getElementById("answer1Placeholder").style.cssText = "width: 300px; margin-left: auto; margin-right: auto;";
    document.getElementById("answer2Placeholder").style.cssText = "width: 300px; margin-left: auto; margin-right: auto;";
    document.getElementById("answer3Placeholder").style.cssText = "width: 300px; margin-left: auto; margin-right: auto;";
    document.getElementById("answer4Placeholder").style.cssText = "width: 300px; margin-left: auto; margin-right: auto;";
}

document.getElementById("answer1Placeholder").addEventListener("click", function () { 
    checkAnswer(questionsArray[i].answer1, correctAnswers[i]); 
});
document.getElementById("answer2Placeholder").addEventListener("click", function () { 
    checkAnswer(questionsArray[i].answer2, correctAnswers[i]); 
});
document.getElementById("answer3Placeholder").addEventListener("click", function () { 
    checkAnswer(questionsArray[i].answer3, correctAnswers[i]); 
});
document.getElementById("answer4Placeholder").addEventListener("click", function () { 
    checkAnswer(questionsArray[i].answer4, correctAnswers[i]);
});

function makeQuiz() {
    if (i <= 4) {
    document.getElementById("questionPlaceholder").innerHTML = questionsArray[i].question;
    document.getElementById("answer1Placeholder").innerHTML = questionsArray[i].answer1;
    document.getElementById("answer2Placeholder").innerHTML = questionsArray[i].answer2;
    document.getElementById("answer3Placeholder").innerHTML = questionsArray[i].answer3;
    document.getElementById("answer4Placeholder").innerHTML = questionsArray[i].answer4;

    document.getElementById("answer1Placeholder").style.cssText = "border: 2px solid black; width: 300px; margin-left: auto; margin-right: auto;";
    document.getElementById("answer2Placeholder").style.cssText = "border: 2px solid black; width: 300px; margin-left: auto; margin-right: auto;";
    document.getElementById("answer3Placeholder").style.cssText = "border: 2px solid black; width: 300px; margin-left: auto; margin-right: auto;";
    document.getElementById("answer4Placeholder").style.cssText = "border: 2px solid black; width: 300px; margin-left: auto; margin-right: auto;";
    } else if (i >= 5) {
        playerInitials = (prompt("Please enter your initials: "));
        localStorage.setItem(playerInitials, timeLeft);
    }
}


function makeHighscores() {
    console.log("highscores")

}

start.addEventListener("click", makeQuiz)
start.addEventListener("click", timerFunction)
reset.addEventListener("click", resetQuiz)
highscores.addEventListener("click", makeHighscores)
