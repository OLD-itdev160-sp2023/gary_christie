
const Questions =   [
    {
        question: "For paragraphs you mainly use which element?",
        answers: ["d","r","par","p"],
        rightAnswer:"p"
    },
    
    {
        question: "How do you create a division with an element?",
        answers: ["div", "br", "divide", "d"],
        rightAnswer: "div"
    },
    
    {
        question: "What is the purpose of the numbers in the h element?",
        answers: ["To organize the headers in order", "Change the fonts size based on importance", "To change the style of headers", "There is no purpose to the numbers",],
        rightAnswer: "Change the font size based on importance"
    },

    {
        question: "Which of these is not a css selector?",
        answers: [".class", "#id", "*", "//"],
        rightAnswer: "//"
    },

    {
        question: "Which of these is not a datatype in JavaScript?",
        answers: ["boolean", "int", "number", "nulll"],
        rightAnswer: "int"
    },

    {
        question: "How do you create a multiline comment in JavaScript?",
        answers: ["*//*", "/**/", "//", "*\\*"],
        rightAnswer: "*//*"
    },

    {
        question: "Which attribute do you give an event to allow a html element to be clicked?",
        answers: ["click", "onclick", "clickon", "clickable"],
        rightAnswer: "onclick"
    }
                    ];
const jSQuestions = document.querySelector(".quiz-Questions");
const jSAnswers = document.querySelector(".quiz-Answers");

var index = 0;

function quizQuestion(index){

    var question = document.createElement("div");
    question.className = "question";
    question.textContent = jSQuestions[index].question;
    jSQuestions.append(question);
    var answers = jSQuestions[index].answers;

        for (var index = 0; index <= 3; index++) {
        var answer = document.createElement("div");
        answer.classList.add(answer, answer-hover);
        

        if (answer.textContent = jSQuestions[index].answers){
            answer.classList.add("answer-correct");
            }
        jSAnswers.append(answer);
        answer.addEventListener("click",checkAnswer);
        }
}

quizQuestion(id);

function checkAnswer(event){
    const answers = document.querySelectorAll(".answer");
        for (var index = 0; index < answers.length; index++){
            answers[index].classList.remove("answer-hover");
            answers[index].removeEventListener("click", checkAnswer)
        }
}