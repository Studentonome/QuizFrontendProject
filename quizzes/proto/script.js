
const questions = [
{//1
    mainText:'Which tool is best for digging stone and bricks?',
    option1:{
        text:"Shovel",
        correct:false,
    },
    option2:{
        text:"Pickaxe",
        correct:true,
    },
    option3:{
        text:"Axe",
        correct:false,
    },
    option4:{
        text:"Sword",
        correct:false,
    }
},
{//2
    mainText:'How many cobblestone blocks are needed in total to craft a furnace?',
    option1:{
        text:"6",
        correct:false,
    },
    option2:{
        text:"10",
        correct:false,
    },
    option3:{
        text:"8",
        correct:false,
    },
    option4:{
        text:"9",
        correct:true,
    }
},
{//3
    mainText:'What is the weakest Minecraft armor made with?',
    option1:{
        text:"Iron",
        correct:false,
    },
    option2:{
        text:"Chainmail",
        correct:false,
    },
    option3:{
        text:"Leather",
        correct:true,
    },
    option4:{
        text:"Gold",
        correct:false,
    }
},
{//4
    mainText:'What is the nickname of Minecraft creator?',
    option1:{
        text:"Zizot",
        correct:false,
    },
    option2:{
        text:"Apple",
        correct:false,
    },
    option3:{
        text:"Dinnerbone",
        correct:false,
    },
    option4:{
        text:"Notch",
        correct:true,
    }
},
{//5
    mainText:'What was the original name of Minecraft when it was first published?',
    option1:{
        text:"Mine-Crafter",
        correct:false,
    },
    option2:{
        text:"Cave Game",
        correct:true,
    },
    option3:{
        text:"Procedural Game",
        correct:false,
    },
    option4:{
        text:"Minicraft",
        correct:false,
    }
},
{//6
    mainText:'Which one of these animals can be ridden with saddle along with horses and mules?',
    option1:{
        text:"Pig",
        correct:true,
    },
    option2:{
        text:"Bee",
        correct:false,
    },
    option3:{
        text:"Cow",
        correct:false,
    },
    option4:{
        text:"Goat",
        correct:false,
    }
},
{//7
    mainText:'Which material creates the strongest armor or weapons?',
    option1:{
        text:"Iron",
        correct:false,
    },
    option2:{
        text:"Netherite",
        correct:true,
    },
    option3:{
        text:"Diamonds",
        correct:false,
    },
    option4:{
        text:"Emeralds",
        correct:false,
    }
},
{//8
    mainText:'Which one of these items do not exist in vanilla Minecraft?',
    option1:{
        text:"Golden Carrot",
        correct:false,
    },
    option2:{
        text:"Snow Bucket",
        correct:false,
    },
    option3:{
        text:"Silver Ingot",
        correct:true,
    },
    option4:{
        text:"Clock",
        correct:false,
    }
},
{//9
    mainText:'Which block takes the longest time to mine?',
    option1:{
        text:"Ancient Debris",
        correct:false,
    },
    option2:{
        text:"Diamond Ore",
        correct:false,
    },
    option3:{
        text:"Obsidian",
        correct:true,
    },
    option4:{
        text:"Diamond Block",
        correct:false,
    }
},
{//10
    mainText:'How long are Minecrafts day and night combined in real-time?',
    option1:{
        text:"20 Min",
        correct:true,
    },
    option2:{
        text:"1 Hours",
        correct:false,
    },
    option3:{
        text:"30 Minutes",
        correct:false,
    },
    option4:{
        text:"10 Minutes",
        correct:false,
    }
},
];
const maxQuestions = 5;//количество вопросов которые будут использованы в квизе
const endButtonTextToBeginQuiz = "Перейти к началу квиза";//Текст для кнопки для начала нового квиза
const beginMainText = "Начало квиза";//Основной текст начала квиза
const beginButtonText = "Начать квиз";//Текст на кнопке начала квиза
const nextQuestionText = "Следующий вопрос";//Текст перехода к следующему вопросу
const endQuizText = "Закончить квиз"; //Текст для перехода к концу квиза

let mainText = document.getElementById("mainText");
let opt1Text = document.getElementById("opt1Text");
let opt2Text = document.getElementById("opt2Text");
let opt3Text = document.getElementById("opt3Text");
let opt4Text = document.getElementById("opt4Text");
let beginButton = document.getElementById("beginButton");
let endButtonToBegin = document.getElementById("endButtonToBegin");
let nextQuestion = document.getElementById("nextQuestion");

let viewedQuestions = new Set();

let correctAnswers = 0;
let currentAnswer = 0;//1 - 4
let currentQuestion = 0;

let isNewBegin = true;
let isBegin = false;
let isQuestion = false;
let isShowAns = false;
let isEnd = false;
let isNewQuestion = false

////////////////////////////////////////////////////////functions
function rand(){
    console.log("rand");
    let show = (Math.floor(Math.random() * (questions.length)));
    //находит число от 0 до количества вопросов всего
    while(/*!*/(viewedQuestions.has(show)))
    {
        show = (show+1) % questions.length;
    }
    //Проматывает просмотернные вопросы
    return show;
    
}

function allZero(){
    isBegin = false;
    isEnd = false;
    isQuestion = false;
    isShowAns = false;
    isNewQuestion = false
    mainText.innerHTML = "";
    beginButton.innerHTML = "";
    endButtonToBegin.innerHTML = "";
    nextQuestion.innerHTML = "";
    opt1Text.innerHTML = "";
    opt2Text.innerHTML = "";
    opt3Text.innerHTML = "";
    opt4Text.innerHTML = "";
}

function changeState(){
    if(isBegin || isNewQuestion)
    {
        allZero();
        isQuestion = true;
        currentQuestion = rand();
        mainText.innerHTML = questions[currentQuestion].mainText;
        
        viewedQuestions.add(currentQuestion);
        
        opt1Text.innerHTML = questions[currentQuestion].option1.text
        opt2Text.innerHTML = questions[currentQuestion].option2.text
        opt3Text.innerHTML = questions[currentQuestion].option3.text
        opt4Text.innerHTML = questions[currentQuestion].option4.text
        
        opt1Text.addEventListener("click", opt1);
        opt2Text.addEventListener("click", opt2);
        opt3Text.addEventListener("click", opt3);
        opt4Text.addEventListener("click", opt4);
    }
    else if(isQuestion)
    {
        isQuestion = false;
        isShowAns = true;
        if(questions[currentQuestion]["option"+currentAnswer.toString()].correct === true)
        {correctAnswers++;}
        if(viewedQuestions.size === maxQuestions)
        {nextQuestion.innerHTML = endQuizText;}
        else
        {nextQuestion.innerHTML = nextQuestionText;}

        {
            if(currentAnswer === 1 && !questions[currentQuestion].option1.correct)
            {opt1Text.style.backgroundColor = "firebrick";}
            if(currentAnswer === 2 && !questions[currentQuestion].option2.correct)
            {opt2Text.style.backgroundColor = "firebrick";}
            if(currentAnswer === 3 && !questions[currentQuestion].option3.correct)
            {opt3Text.style.backgroundColor = "firebrick";}
            if(currentAnswer === 4 && !questions[currentQuestion].option4.correct)
            {opt4Text.style.backgroundColor = "firebrick";}

            if(questions[currentQuestion].option1.correct)
            {opt1Text.style.backgroundColor = "lime";}
            if(questions[currentQuestion].option2.correct)
            {opt2Text.style.backgroundColor = "lime";}
            if(questions[currentQuestion].option3.correct)
            {opt3Text.style.backgroundColor = "lime";}
            if(questions[currentQuestion].option4.correct)
            {opt4Text.style.backgroundColor = "lime";}
        }
        {
            opt1Text.removeEventListener("click", opt1);
            opt2Text.removeEventListener("click", opt2);
            opt3Text.removeEventListener("click", opt3);
            opt4Text.removeEventListener("click", opt4);
        }
    }
    else if(isShowAns)
    {
        {
            opt1Text.style.backgroundColor = "steelblue";
            opt2Text.style.backgroundColor = "steelblue";
            opt3Text.style.backgroundColor = "steelblue";
            opt4Text.style.backgroundColor = "steelblue";
        }
        if(viewedQuestions.size === maxQuestions)
        {
            allZero();
            isEnd = true;
            mainText.innerHTML = `У вас правильных ответов ${correctAnswers} из ${maxQuestions}`;
            endButtonToBegin.innerHTML = endButtonTextToBeginQuiz;
        }
        else
        {
            allZero();
            isNewQuestion = true;
            changeState();
        }
    }
    else if(isEnd || isNewBegin)
    {
        allZero();
        isBegin = true;

        viewedQuestions.clear();
        
        mainText.innerHTML = beginMainText;
        beginButton.innerHTML = beginButtonText;
    }
}

function opt1() {currentAnswer = 1; changeState(); }
function opt2() {currentAnswer = 2; changeState(); }
function opt3() {currentAnswer = 3; changeState(); }
function opt4() {currentAnswer = 4; changeState(); }

////////////////////////////////eventsListeners

beginButton.addEventListener("mouseup",(e)=>{
    changeState();
})
endButtonToBegin.addEventListener("click",(e)=>{
    changeState();
})
nextQuestion.addEventListener("click",(e)=>{
    changeState();
})

changeState();