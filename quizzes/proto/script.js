const maxQuestions = 0;//количество вопросов которые будут использованы в квизе
const questions = [
{
    mainText:"",
    option1:{
        text:"",
        correct:true,
    },
    option2:null,
    option3:null,
    option4:null,
    option5:null,
    option6:null,
},
];
const endings = [
    {
        text:"",
        correctAnswersNeed:0,
    },
]
const endButtonTextToBeginQuiz = "";//Текст для кнопки для начала нового квиза
const beginMainText = "";//Основной текст начала квиза
const beginButtonText = "";//Текст на кнопке начала квиза
const nextQuestionText = "";//Текст перехода к следующему вопросу
const endQuizText = ""; //Текст для перехода к концу квиза

let mainText = document.getElementById("mainText");
let opt1Text = document.getElementById("opt1Text");
let opt2Text = document.getElementById("opt2Text");
let opt3Text = document.getElementById("opt3Text");
let opt4Text = document.getElementById("opt4Text");
let opt5Text = document.getElementById("opt5Text");
let opt6Text = document.getElementById("opt6Text");
let beginButton = document.getElementById("beginButton");
let endButtonToBegin = document.getElementById("endButtonToBegin");
let nextQuestion = document.getElementById("nextQ");
//nextQ

let viewedQuestions = new Set();

let correctAnswers = 0;
let currentAnswer = 0;//1 - 6
let currentQuestion = 0;

let isBegin = false;
let isEnd = false;
let isQuestion = false;
let isShowAns = false;

//////////////////////////////////////////////////////////////////functions
function allZero(){
    isBegin = false;
    isEnd = false;
    isQuestion = false;
    isShowAns = false;
    mainText.innerHTML = "";
    beginButton.innerHTML = "";
    endButtonToBegin.innerHTML = "";
    nextQuestion.innerHTML = "";
    opt1Text.innerHTML = "";
    opt2Text.innerHTML = "";
    opt3Text.innerHTML = "";
    opt4Text.innerHTML = "";
    opt5Text.innerHTML = "";
    opt6Text.innerHTML = "";
}

function rand(){

    let show = (Math.floor(Math.random() * (questions.length)));
    //находит число от 0 до количества вопросов всего
    while(/*!*/(viewedQuestions.has(show)))
    {
        show = (show+1) % questions.length;
    }
    //Проматывает просмотернные вопросы
    return show;
    
}

function addOptions(){
    opt1Text.addEventListener("click", opt1());
    opt2Text.addEventListener("click", opt2());
    opt3Text.addEventListener("click", opt3());
    opt4Text.addEventListener("click", opt4());
    opt5Text.addEventListener("click", opt5());
    opt6Text.addEventListener("click", opt6());
}

function deleteOptions(){
    opt1Text.removeEventListener("click", opt1());
    opt2Text.removeEventListener("click", opt2());
    opt3Text.removeEventListener("click", opt3());
    opt4Text.removeEventListener("click", opt4());
    opt5Text.removeEventListener("click", opt5());
    opt6Text.removeEventListener("click", opt6());
}

function option(){
    isQuestion = false;
    isShowAns = true;
    if(questions[currentQuestion]["option"+currentAnswer.toString()].correct)
    {correctAnswers++;}
    if(viewedQuestions.size === maxQuestions)
    {nextQuestion.innerHTML = endQuizText;}
    else
    {nextQuestion.innerHTML = nextQuestionText;}
    showRightAns();
    deleteOptions();
}

function opt1() {currentAnswer = 1; option();}
function opt2() {currentAnswer = 2; option();}
function opt3() {currentAnswer = 3; option();}
function opt4() {currentAnswer = 4; option();}
function opt5() {currentAnswer = 5; option();}
function opt6() {currentAnswer = 6; option();}



function begin(){
    allZero();
    isBegin = true;

    viewedQuestions.clear();
    
    mainText.innerHTML = beginMainText;
    beginButton.innerHTML = beginButtonText;
};

function showQuestion(){
    allZero();
    isQuestion = true;

    num = rand();
    
    mainText.innerHTML = questions[num].mainText;

    currentQuestion = num;
    viewedQuestions.add(currentQuestion);
    
    addOptions();
    if(question[num].option1)
    {opt1Text.innerHTML = question[num].option1.text}
    if(question[num].option2)
    {opt2Text.innerHTML = question[num].option2.text}
    if(question[num].option3)
    {opt3Text.innerHTML = question[num].option3.text}
    if(question[num].option4)
    {opt4Text.innerHTML = question[num].option4.text}
    if(question[num].option5)
    {opt5Text.innerHTML = question[num].option5.text}
    if(question[num].option6)
    {opt6Text.innerHTML = question[num].option6.text}
};

function showRightAns(){
    for(let i=1; i<=6; ++i)
    {
        if(question[num]["option"+i.toString()]) { if(question[num]["option"+i.toString()].flag) {
            document["opt"+i.toString()+"Text"].classList.add("green");
            if(currentAnswer !== 1){
                    document["opt"+currentAnswer.toString()+"Text"].classList.add("red");
                }
            }
        }
    }
}

function unshowRightAns(){
    for(let i=1; i<=6; ++i)
    {
        if(question[num]["option"+i.toString()]) { if(question[num]["option"+i.toString()].flag) {
            document["opt"+i.toString()+"Text"].classList.remove("green");
            if(currentAnswer !== 1){
                    document["opt"+currentAnswer.toString()+"Text"].classList.remove("red");
                }
            }
        }
    }
}

function end(){
    allZero();
    isEnd = true;
    for (const ending in endings) {
        if (ending.correctAnswersNeed < correctAnswers) {
            mainText.innerHTML = ending.text;
            break;
        }
    }
    endButtonToBegin.innerHTML = endButtonTextToBeginQuiz;
}

//////////////////////////////////////////////////////////eventsListeners

beginButton.addEventListener("click",(e)=>{
    showQuestion();
    e.preventDefault();
})
endButtonToBegin.addEventListener("click",(e)=>{
    begin();
    e.preventDefault();
})

nextQuestion.addEventListener("click",(e)=>{
    unshowRightAns();
    if(viewedQuestions.size === maxQuestions)
    {end();}
    else
    {showQuestion();}
    e.preventDefault();
})

////////////start with begin
begin();

