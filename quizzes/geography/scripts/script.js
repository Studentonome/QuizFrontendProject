
const questions = [
{//1
    mainText:'Какая страна является крупнейшей по площади в мире?',
    image:"images/Россия.jpg",
    option1:{
        text:"Китай",
        correct:false,
    },
    option2:{
        text:"Россия",
        correct:true,
    },
    option3:{
        text:"США",
        correct:false,
    },
    option4:{
        text:"Канада",
        correct:false,
    }
},
{//2
    mainText:'В каком океане находится самый глубокий жерловинный каньон - Марианская впадина?',
    image:"images/marian.jpg",
    option1:{
        text:"Тихий океан",
        correct:true,
    },
    option2:{
        text:"Атлантический океан",
        correct:false,
    },
    option3:{
        text:"Индийский океан",
        correct:false,
    },
    option4:{
        text:"Северный Ледовитый океан",
        correct:false,
    }
},
{//3
    mainText:'Какая река является самой длинной в мире?',
    image:"images/река.jpg",
    option1:{
        text:"Амазонка",
        correct:false,
    },
    option2:{
        text:"Нил",
        correct:true,
    },
    option3:{
        text:"Янцзы",
        correct:false,
    },
    option4:{
        text:"Миссисипи",
        correct:false,
    }
},
{//4
    mainText:'Какая горная система простирается через Швейцарию, Италию, Францию, и Австрию?',
    image:"images/горы.jpg",
    option1:{
        text:"Гималаи",
        correct:false,
    },
    option2:{
        text:"Альпы",
        correct:true,
    },
    option3:{
        text:"Анды",
        correct:false,
    },
    option4:{
        text:"Урал",
        correct:false,
    }
},
{//5
    mainText:'В каком континенте находится пустыня Сахара?',
    image:"images/пустыня.jpg",
    option1:{
        text:"Африка",
        correct:true,
    },
    option2:{
        text:"Азия",
        correct:false,
    },
    option3:{
        text:"Северная Америка",
        correct:false,
    },
    option4:{
        text:"Австралия",
        correct:false,
    }
},
{//6
    mainText:'Какой из перечисленных городов является столицей Японии?',
    image:"images/marian.jpg",
    option1:{
        text:"Пекин",
        correct:false,
    },
    option2:{
        text:"Сеул",
        correct:false,
    },
    option3:{
        text:"Токио",
        correct:true,
    },
    option4:{
        text:"Бангкок",
        correct:false,
    }
},
{//7
    mainText:'В какой стране находится самый высокий водопад - Анхель?',
    image:"images/водопад.jpg",
    option1:{
        text:"Венесуэла",
        correct:true,
    },
    option2:{
        text:"Зимбабве",
        correct:false,
    },
    option3:{
        text:"Аргентина",
        correct:false,
    },
    option4:{
        text:"Бразилия",
        correct:false,
    }
},
{//8
    mainText:'Что является крупнейшим островом в мире?',
    image:"images/гренландия.jpeg",
    option1:{
        text:"Мадагаскар",
        correct:false,
    },
    option2:{
        text:"Борнео",
        correct:false,
    },
    option3:{
        text:"Гренландия",
        correct:true,
    },
    option4:{
        text:"Австралия",
        correct:false,
    }
},
{//9
    mainText:'В каком море расположены Греция и Италия?',
    image:"images/море.jpeg",
    option1:{
        text:"Карибское море",
        correct:false,
    },
    option2:{
        text:"Средиземное море",
        correct:true,
    },
    option3:{
        text:"Красное море",
        correct:false,
    },
    option4:{
        text:"Японское море",
        correct:false,
    }
},
{//10
    mainText:'Какой из перечисленных островов является самым большим в Тихом океане?',
    image:"images/гавайи.jpg",
    option1:{
        text:"Ява",
        correct:false,
    },
    option2:{
        text:"Куба",
        correct:false,
    },
    option3:{
        text:"Гавайи",
        correct:true,
    },
    option4:{
        text:"Суматра",
        correct:false,
    }
},
];
const maxQuestions = 5;//количество вопросов которые будут использованы в квизе
const endButtonTextToBeginQuiz = "Перейти к началу квиза";//Текст для кнопки для начала нового квиза
const beginMainText = "Добро пожаловать на викторину по географии";//Основной текст начала квиза
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
        if("image" in questions[currentQuestion])
        {mainText.innerHTML =  `${questions[currentQuestion].mainText}<br/><img src="${questions[currentQuestion].image}">`;}
        else
        {mainText.innerHTML = questions[currentQuestion].mainText;}
        
        
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
            opt1Text.style.backgroundColor = "";
            opt2Text.style.backgroundColor = "";
            opt3Text.style.backgroundColor = "";
            opt4Text.style.backgroundColor = "";
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
        correctAnswers = 0;
        
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