
const questions = [
{//1
    mainText:'Кто открыл законы движения планет и сформулировал законы тяготения?',
    image:"images/ньютон.jpg",
    option1:{
        text:"Альберт Эйнштейн",
        correct:false,
    },
    option2:{
        text:"Исаак Ньютон",
        correct:true,
    },
    option3:{
        text:"Галилео Галилей",
        correct:false,
    },
    option4:{
        text:"Нильс Бор",
        correct:false,
    }
},
{//2
    mainText:'Какой физик внес вклад в теорию относительности и формулу E=mc^2?',
    image:"images/эйнштейн.jpg",
    option1:{
        text:"Макс Планк",
        correct:false,
    },
    option2:{
        text:"Альберт Эйнштейн",
        correct:true,
    },
    option3:{
        text:"Нильс Бор",
        correct:false,
    },
    option4:{
        text:"Вернер Гейзенберг",
        correct:false,
    }
},
{//3
    mainText:'Кто открыл структуру ДНК и был удостоен Нобелевской премии по медицине?',
    image:"images/уотсон.jpg",
    option1:{
        text:"Росалинд Франклин",
        correct:false,
    },
    option2:{
        text:"Фрэнсис Крик",
        correct:false,
    },
    option3:{
        text:"Линус Полинг",
        correct:false,
    },
    option4:{
        text:"Джеймс Уотсон",
        correct:true,
    }
},
{//4
    mainText:'Какой ученый сформулировал законы электромагнитной индукции?',
    image:"images/фарадей.jpg",
    option1:{
        text:"Никола Тесла",
        correct:false,
    },
    option2:{
        text:"Майкель Фарадей",
        correct:true,
    },
    option3:{
        text:"Александр Вольта",
        correct:false,
    },
    option4:{
        text:"Андре Ампер",
        correct:false,
    }
},
{//5
    mainText:'Кто предложил теорию эволюции через естественный отбор?',
    image:"images/дарвин.jpg",
    option1:{
        text:"Грегор Мендель",
        correct:false,
    },
    option2:{
        text:"Чарльз Дарвин",
        correct:true,
    },
    option3:{
        text:"Альфред Уоллес",
        correct:false,
    },
    option4:{
        text:"Томас Гант Морган",
        correct:false,
    }
},
{//6
    mainText:'Кто открыл радиоактивность и был дважды удостоен Нобелевской премии?',
    image:"images/кюри.jpg",
    option1:{
        text:"Эрнест Резерфорд",
        correct:false,
    },
    option2:{
        text:"Мария Кюри",
        correct:true,
    },
    option3:{
        text:"Луи Пастер",
        correct:false,
    },
    option4:{
        text:"Нильс Бор",
        correct:false,
    }
},
{//7
    mainText:'Кто открыл структуру атома и разработал квантовую теорию?',
    image:"images/Бор.jpg",
    option1:{
        text:"Макс Планк",
        correct:false,
    },
    option2:{
        text:"Эрвин Шрёдингер",
        correct:false,
    },
    option3:{
        text:"Нильс Бор",
        correct:true,
    },
    option4:{
        text:"Вернер Гейзенберг",
        correct:false,
    }
},
{//8
    mainText:'Какой астроном предложил гелиоцентрическую модель Солнечной системы?',
    image:"images/коперник.jpg",
    option1:{
        text:"Коперник",
        correct:true,
    },
    option2:{
        text:"Тихо Браге",
        correct:false,
    },
    option3:{
        text:"Галилео Галилей",
        correct:false,
    },
    option4:{
        text:"Иоганн Кеплер",
        correct:false,
    }
},
{//9
    mainText:'Кто открыл структуру периодической таблицы химических элементов?',
    image:"images/менделеев.jpg",
    option1:{
        text:"Димитрий Менделеев",
        correct:true,
    },
    option2:{
        text:"Луи Пастер",
        correct:false,
    },
    option3:{
        text:"Нильс Бор",
        correct:false,
    },
    option4:{
        text:"Линус Полинг",
        correct:false,
    }
},
{//10
    mainText:'Кто разработал теорию квантов и придумал понятие "фотон"?',
    image:"images/планк.jpeg",
    option1:{
        text:"Эрвин Шрёдингер",
        correct:false,
    },
    option2:{
        text:"Макс Планк",
        correct:true,
    },
    option3:{
        text:"Ричард Фейнман",
        correct:false,
    },
    option4:{
        text:"Вернер Гейзенберг",
        correct:false,
    }
},
];
const maxQuestions = 5;//количество вопросов которые будут использованы в квизе
const endButtonTextToBeginQuiz = "Перейти к началу квиза";//Текст для кнопки для начала нового квиза
const beginMainText = "Добро пожаловать на викторину по ученым";//Основной текст начала квиза
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

        if("image" in questions[currentQuestion])
        {mainText.innerHTML =  `${questions[currentQuestion].mainText}<br/><img src="${questions[currentQuestion].image}">`;}

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