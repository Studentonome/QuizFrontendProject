
const questions = [
{//1
    mainText:'Кто является автором картины "Мона Лиза"?',
    image:"images/мона лиза.jpeg",
    option1:{
        text:"Леонардо да винчи",
        correct:true,
    },
    option2:{
        text:"Пабло Пикассо",
        correct:false,
    },
    option3:{
        text:"Рембрандт",
        correct:false,
    },
    option4:{
        text:"Микеланджело",
        correct:false,
    }
},
{//2
    mainText:'Какой стиль искусства ассоциируется с Клодом Моне и его серией работ "Кувшин с подсолнухами"?',
    image:"images/подсолнухи.jpg",
    option1:{
        text:"Реализм",
        correct:false,
    },
    option2:{
        text:"Импрессионизм",
        correct:true,
    },
    option3:{
        text:"Сюрреализм",
        correct:false,
    },
    option4:{
        text:"Абстракционизм",
        correct:false,
    }
},
{//3
    mainText:'Кто из следующих художников был представителем сюрреализма?',
    image:"images/дали.jpg",
    option1:{
        text:"Винсент ван Гог",
        correct:false,
    },
    option2:{
        text:"Сальвадор Дали",
        correct:true,
    },
    option3:{
        text:"Пьер Огюст Ренуар",
        correct:false,
    },
    option4:{
        text:"Эдвард Мунк",
        correct:false,
    }
},
{//4
    mainText:'Кто из следующих художников был представителем экспрессионизма?',
    image:"images/эдвард мунк.jpg",
    option1:{
        text:"Анри Матисс",
        correct:false,
    },
    option2:{
        text:"Эдвард Мунк",
        correct:true,
    },
    option3:{
        text:"Амедео Модильяни",
        correct:false,
    },
    option4:{
        text:"Гюстав Климт",
        correct:false,
    }
},
{//5
    mainText:'Кто написал произведение "Звездная ночь" и считается одним из основоположников постимпрессионизма?',
    image:"images/звездная ночь.jpg",
    option1:{
        text:"Клод Моне",
        correct:false,
    },
    option2:{
        text:"Винсент ван Гог",
        correct:true,
    },
    option3:{
        text:"Пьер-Огюст Ренуар",
        correct:false,
    },
    option4:{
        text:"Гюстав Климт",
        correct:false,
    }
},
{//6
    mainText:'Какой из перечисленных художников был представителем кубизма?',
    image:"images/пикассо.jpg",
    option1:{
        text:"Анри Матисс",
        correct:false,
    },
    option2:{
        text:"Пабло Пикассо",
        correct:true,
    },
    option3:{
        text:"Марк Шагал",
        correct:false,
    },
    option4:{
        text:"Казимир Малевич",
        correct:false,
    }
},
{//7
    mainText:'Кто известен своими анатомическими исследованиями и произведениями, такими как "Человеческое тело в движении"?',
    image:"images/да винчи.jpg",
    option1:{
        text:"Альбрехт Дюрер",
        correct:false,
    },
    option2:{
        text:"Рафаэль",
        correct:false,
    },
    option3:{
        text:"Леонардо да Винчи",
        correct:true,
    },
    option4:{
        text:"Тициан",
        correct:false,
    }
},
{//8
    mainText:'Какой стиль искусства характерен для работ Казимира Малевича, включая "Черный квадрат"?',
    image:"images/малевич.jpg",
    option1:{
        text:"Абстракционизм",
        correct:true,
    },
    option2:{
        text:"Кубизм",
        correct:false,
    },
    option3:{
        text:"Футуризм",
        correct:false,
    },
    option4:{
        text:"Сюрреализм",
        correct:false,
    }
},
{//9
    mainText:'Кто является автором скульптурной группы "Поцелуй" и статуи "Мыслитель"?',
    image:"images/статуя.jpg",
    option1:{
        text:"Анри Матисс",
        correct:false,
    },
    option2:{
        text:"Амедео Модильяни",
        correct:false,
    },
    option3:{
        text:"Роден",
        correct:true,
    },
    option4:{
        text:"Дега",
        correct:false,
    }
},
{//10
    mainText:'Какой художник создал серию "Акробатов" и был частью арт-движения "Модерн"?',
    image:"images/",
    option1:{
        text:"Клод Моне",
        correct:false,
    },
    option2:{
        text:"Эдвард Мунк",
        correct:false,
    },
    option3:{
        text:"Амедео Модильяни",
        correct:false,
    },
    option4:{
        text:"Анри Тулуз-Лотрек",
        correct:true,
    }
},
];
const maxQuestions = 5;//количество вопросов которые будут использованы в квизе
const endButtonTextToBeginQuiz = "Перейти к началу квиза";//Текст для кнопки для начала нового квиза
const beginMainText = "Добро пожаловать на викторину по живописи и искусству";//Основной текст начала квиза
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