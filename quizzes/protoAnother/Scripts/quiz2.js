"use strict";
//User interface

const questions = [
    {//1
        mainText:'Кто открыл законы движения планет и сформулировал законы тяготения?',
        mainPicture:'Media/ньютон.jpg',
        option1:{
            text:"Альберт Эйнштейн ",
            correct:false,
        },
        option2:{
            text:"Исаак Ньютон ",
            correct:true,
        },
        option3:{
            text:"Галилео Галилей ",
            correct:false,
        },
        option4:{
            text:"Нильс Бор ",
            correct:false,
        }
    },
    {//2
        mainText:'Какой физик внес вклад в теорию относительности и формулу E=mc^2? ',
        mainPicture:'Media/эйнштейн.jpg',
        option1:{
            text:"Макс Планк ",
            correct:false,
        },
        option2:{
            text:"Альберт Эйнштейн  ",
            correct:true,
        },
        option3:{
            text:"Нильс Бор ",
            correct:false,
        },
        option4:{
            text:"Вернер Гейзенберг ",
            correct:false,
        }
    },
    {//3
        mainText:'Кто открыл структуру ДНК и был удостоен Нобелевской премии по медицине? ',
        mainPicture:'Media/уотсон.jpg',
        option1:{
            text:"Росалинд Франклин ",
            correct:false,
        },
        option2:{
            text:"Фрэнсис Крик ",
            correct:false,
        },
        option3:{
            text:"Линус Полинг ",
            correct:false,
        },
        option4:{
            text:"Джеймс Уотсон ",
            correct:true,
        }
    },
    {//4
        mainText:'Какой ученый сформулировал законы электромагнитной индукции? ',
        mainPicture:'Media/фарадей.jpg',
        option1:{
            text:"Никола Тесла ",
            correct:false,
        },
        option2:{
            text:"Майкель Фарадей ",
            correct:true,
        },
        option3:{
            text:"Александр Вольта ",
            correct:false,
        },
        option4:{
            text:"Андре Ампер ",
            correct:false,
        }
    },
    {//5
        mainText:'Кто предложил теорию эволюции через естественный отбор? ',
        mainPicture:'Media/дарвин.jpg',
        option1:{
            text:"Грегор Мендель ",
            correct:false,
        },
        option2:{
            text:"Чарльз Дарвин ",
            correct:true,
        },
        option3:{
            text:"Альфред Уоллес ",
            correct:false,
        },
        option4:{
            text:"Томас Гант Морган ",
            correct:false,
        }
    },
    {//6
        mainText:'Кто открыл радиоактивность и был дважды удостоен Нобелевской премии?  ',
        mainPicture:'Media/кюри.jpg',
        option1:{
            text:"Эрнест Резерфорд ",
            correct:false,
        },
        option2:{
            text:"Мария Кюри ",
            correct:true,
        },
        option3:{
            text:"Луи Пастер ",
            correct:false,
        },
        option4:{
            text:"Нильс Бор ",
            correct:false,
        }
    },
    {//7
        mainText:'Кто открыл структуру атома и разработал квантовую теорию? ',
        mainPicture:'Media/Бор.jpg',
        option1:{
            text:"Макс Планк ",
            correct:false,
        },
        option2:{
            text:"Эрвин Шрёдингер ",
            correct:false,
        },
        option3:{
            text:"Нильс Бор ",
            correct:true,
        },
        option4:{
            text:"Вернер Гейзенберг ",
            correct:false,
        }
    },
    {//8
        mainText:'Какой астроном предложил гелиоцентрическую модель Солнечной системы? ',
        mainPicture:'Media/коперник.jpg',
        option1:{
            text:"Коперник ",
            correct:true,
        },
        option2:{
            text:"Тихо Браге ",
            correct:false,
        },
        option3:{
            text:"Галилео Галилей ",
            correct:false,
        },
        option4:{
            text:"Иоганн Кеплер ",
            correct:false,
        }
    },
    {//9
        mainText:'Кто открыл структуру периодической таблицы химических элементов? ',
        mainPicture:'Media/менделеев.jpg',
        option1:{
            text:"Димитрий Менделеев ",
            correct:true,
        },
        option2:{
            text:"Луи Пастер ",
            correct:false,
        },
        option3:{
            text:"Нильс Бор ",
            correct:false,
        },
        option4:{
            text:"Линус Полинг ",
            correct:false,
        }
    },
    {//10
        mainText:'Кто разработал теорию квантов и придумал понятие "фотон"? ',
        mainPicture:'Media/планк.jpeg',
        option1:{
            text:"Эрвин Шрёдингер ",
            correct:false,
        },
        option2:{
            text:"Макс Планк ",
            correct:true,
        },
        option3:{
            text:"Ричард Фейнман ",
            correct:false,
        },
        option4:{
            text:"Вернер Гейзенберг ",
            correct:false,
        }
    },
    ];


let TempAnswer = 0;

function UserInterface(){
    //op 1. (see doc)
    let MainDeco = document.createElement('div');
        MainDeco.className = ('main');
        MainDeco.textContent = "fix me plz"
        //op 1.2.
        let RuleZone = document.createElement('div');
            RuleZone.className = ('rule');
            //op 1.2.1.
            let NumExZone = document.createElement('div');
                NumExZone.className = ('NEx');
                //op 1.2.1.1.
                let NumberZn = document.createElement('div');
                    NumberZn.className = ('number');
                    //NumberZn.textContent = 'Question 1'
                //cl 1.2.1.1.
                NumExZone.appendChild(NumberZn);
                //op 1.2.1.2. 
                let ButtonsZn = document.createElement('div');
                    ButtonsZn.className = ('buttons');
                    let beginButton = document.createElement('button');
                        beginButton.className = ('Begin');
                        beginButton.textContent='НАЧАТЬ';
                        beginButton.addEventListener('click',function(e){
                            buttonAction(Elements);
                        },false);
                    ButtonsZn.appendChild(beginButton); 
                //cl 1.2.1.2.
                NumExZone.appendChild(ButtonsZn);
            //cl 1.2.1.
            RuleZone.appendChild(NumExZone);
            //op 1.2.2.
            let QuestionZn = document.createElement('div');
                QuestionZn.className = ('questionZN');
                //op 1.2.2.1.
                let questionTx = document.createElement('div');
                    questionTx.className = ('Qtext');
                    questionTx.innerText = 'Добро пожаловать в Квиз с картинками!\n Для запуска квиза нажмите "Начать"';
                QuestionZn.appendChild(questionTx);
                //op 1.2.2.2.
                let Qpicture = document.createElement('img');
                    Qpicture.className = ('Qpic');
                    //Qpicture.src = 'Media/fit.png';
                    console.log (Qpicture.src);
                    if (Qpicture.src != ''){
                        //cl 1.2.2.2.
                        QuestionZn.appendChild(Qpicture);
                    }
            //cl 1.2.2.
            RuleZone.appendChild(QuestionZn);
        //cl 1.2.
        MainDeco.appendChild(RuleZone);
        //op 1.3.
        let AnswerZone = document.createElement('div');
            AnswerZone.className = ('AnsZn');
            //op 1.3.1.
            let ACzn = document.createElement('div');
                ACzn.className = ('AC');
                //op 1.3.1.1.
                let Azn = document.createElement('button');
                    Azn.className = ('A');
                    let IconA = document.createElement('img');
                        IconA.className = ('Icon');
                        IconA.src = 'Media/A.png';
                    Azn.appendChild(IconA);
                    let TextA = document.createElement('div');
                        TextA.className = ('Text');
                        //TextA.textContent = 'A) Svoloch'
                    Azn.appendChild(TextA);
                    Azn.addEventListener('click',function(e){
                        TempAnswer=1;
                        TextA.style.color='blue';
                        TextB.style.color='black';
                        TextC.style.color='black';
                        TextD.style.color='black';
                    },false)
                //cl 1.3.1.2.
                ACzn.appendChild(Azn);
                //op 1.3.1.1.
                let Czn = document.createElement('button');
                    Czn.className = ('C');
                    let IconC = document.createElement('img');
                        IconC.className = ('Icon');
                        IconC.src = 'Media/C.png';
                    Czn.appendChild(IconC);
                    let TextC = document.createElement('div');
                        TextC.className = ('Text');
                        //TextC.textContent = 'C) Alibaba'
                    Czn.appendChild(TextC);
                    Czn.addEventListener('click',function(e){
                        TempAnswer=3;
                        TextA.style.color='black';
                        TextB.style.color='black';
                        TextC.style.color='blue';
                        TextD.style.color='black';
                    },false)
                //cl 1.3.1.2.
                ACzn.appendChild(Czn);
            //cl 1.3.1.
            AnswerZone.appendChild(ACzn);
            //op 1.3.2.
            let BDzn = document.createElement('div');
                BDzn.className = ('BD');
                //op 1.3.2.1.
                let Bzn = document.createElement('button');
                    Bzn.className = ('B');
                    let IconB = document.createElement('img');
                        IconB.className = ('Icon');
                        IconB.src = 'Media/B.png';
                    Bzn.appendChild(IconB);
                    let TextB = document.createElement('div');
                        TextB.className = ('Text');
                        //TextB.textContent = 'B) Kurva'
                    Bzn.appendChild(TextB);
                    Bzn.addEventListener('click',function(e){
                        TempAnswer=2;
                        TextA.style.color='black';
                        TextB.style.color='blue';
                        TextC.style.color='black';
                        TextD.style.color='black';
                    },false)
                //cl 1.3.2.1.
                BDzn.appendChild(Bzn);
                //op 1.3.2.2.
                let Dzn = document.createElement('button');
                    Dzn.className = ('D');
                    let IconD = document.createElement('img');
                        IconD.className = ('Icon');
                        IconD.src = 'Media/D.png';
                    Dzn.appendChild(IconD);
                    let TextD = document.createElement('div');
                        TextD.className = ('Text');
                        //TextD.textContent = 'D) Ksushka-Shlushka'
                    Dzn.appendChild(TextD);
                    Dzn.addEventListener('click',function(e){
                        TempAnswer=4;
                        TextA.style.color='black';
                        TextB.style.color='black';
                        TextC.style.color='black';
                        TextD.style.color='blue';
                    },false)
                //cl 1.3.2.2
                BDzn.appendChild(Dzn);
            //cl 1.3.2.
            AnswerZone.appendChild(BDzn);
        //cl 1.3.
        //MainDeco.appendChild(AnswerZone);
    //cl 1.
    document.body.appendChild(MainDeco);

    let Elements = {
        QZN:QuestionZn,
        MainDeco:MainDeco,
        QuestionNumber:NumberZn,
        MainButton:beginButton,
        MainText:questionTx,
        MainPicture:Qpicture,
        AnswerZN:AnswerZone,
        A:Azn,
        B:Bzn,
        C:Czn,
        D:Dzn,
        Atext:TextA,
        Btext:TextB,
        Ctext:TextC,
        Dtext:TextD,
        isStar:true,
        isPlay:false,
        isAnswered:false,
        NOWis:1,
        RightAnswers:0,
        AnswerIs:0,
    }
}


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

let viewedQuestions = new Set();
let currentQuestion = 0;
let maxQuestions = 10;

function buttonAction(Elements){
    //Проверяем состояние
    console.log('>Pressed');
    if (Elements.isStar==true){
        console.log('>>Status: BEGIN');
        //Игра началась
        Elements.isStar=false;
        Elements.isAnswered=true;
        //Изменеие режима игры. Теперь мы не на старте. Мы выбираем.
        currentQuestion = rand();
        viewedQuestions.add(currentQuestion);
        //Выбрали вопрос.
        Elements.MainPicture.src=questions[currentQuestion].mainPicture;
        Elements.QZN.appendChild(Elements.MainPicture);
        Elements.MainText.textContent = (questions[currentQuestion].mainText);
        Elements.QuestionNumber.textContent = ('Вопрос №'+Elements.NOWis);
        Elements.MainButton.textContent = 'ПРОВЕРИТЬ'
        //Косметика зоны управления
        Elements.MainDeco.appendChild(Elements.AnswerZN);
        Elements.Atext.textContent = questions[currentQuestion].option1.text;
        Elements.Btext.textContent = questions[currentQuestion].option2.text;
        Elements.Ctext.textContent = questions[currentQuestion].option3.text;
        Elements.Dtext.textContent = questions[currentQuestion].option4.text;
        Elements.A.disabled = false;
        Elements.B.disabled = false;
        Elements.C.disabled = false;
        Elements.D.disabled = false;
        //Вызываем графу ответов
    }
    else if(Elements.isAnswered==true){
        console.log('>>Status: CHECKING ANSWER');
        if (TempAnswer==0){
            Elements.isAnswered=true;
            alert('Вы не выбрали ответ');
            //Ответ не выбран
        }
        else{
            Elements.isAnswered=false;
            //ответ выбран
            Elements.isPlay=true;
            Elements.MainButton.textContent = 'ДАЛЕЕ';
            Elements.A.disabled = true;
            Elements.B.disabled = true;
            Elements.C.disabled = true;
            Elements.D.disabled = true;
            //Индикаторы ниже
            switch(TempAnswer){
                case 1:{
                    TempAnswer=0;
                    if (questions[currentQuestion].option1.correct==true){
                        Elements.Atext.style.color='green';
                        Elements.RightAnswers++;
                    }
                    else if(questions[currentQuestion].option2.correct==true){
                        Elements.Atext.style.color='red';
                        Elements.Btext.style.color='green';
                    }
                    else if(questions[currentQuestion].option3.correct==true){
                        Elements.Atext.style.color='red';
                        Elements.Ctext.style.color='green';
                    }
                    else if(questions[currentQuestion].option4.correct==true){
                        Elements.Atext.style.color='red';
                        Elements.Dtext.style.color='green';
                    }
                    break;
                }
                case 2:{
                    TempAnswer=0;
                    if (questions[currentQuestion].option2.correct==true){
                        Elements.Btext.style.color='green';
                        Elements.RightAnswers++;
                    }
                    else if(questions[currentQuestion].option1.correct==true){
                        Elements.Btext.style.color='red';
                        Elements.Atext.style.color='green';
                    }
                    else if(questions[currentQuestion].option3.correct==true){
                        Elements.Btext.style.color='red';
                        Elements.Ctext.style.color='green';
                    }
                    else if(questions[currentQuestion].option4.correct==true){
                        Elements.Btext.style.color='red';
                        Elements.Dtext.style.color='green';
                    }
                    break;
                }
                case 3:{
                    TempAnswer=0;
                    if (questions[currentQuestion].option3.correct==true){
                        Elements.Ctext.style.color='green';
                        Elements.RightAnswers++;
                    }
                    else if(questions[currentQuestion].option2.correct==true){
                        Elements.Ctext.style.color='red';
                        Elements.Btext.style.color='green';
                    }
                    else if(questions[currentQuestion].option1.correct==true){
                        Elements.Ctext.style.color='red';
                        Elements.Atext.style.color='green';
                    }
                    else if(questions[currentQuestion].option4.correct==true){
                        Elements.Ctext.style.color='red';
                        Elements.Dtext.style.color='green';
                    }
                    break;
                }
                case 4:{
                    TempAnswer=0;
                    if (questions[currentQuestion].option4.correct==true){
                        Elements.Dtext.style.color='green';
                        Elements.RightAnswers++;
                    }
                    else if(questions[currentQuestion].option2.correct==true){
                        Elements.Dtext.style.color='red';
                        Elements.Btext.style.color='green';
                    }
                    else if(questions[currentQuestion].option3.correct==true){
                        Elements.Dtext.style.color='red';
                        Elements.Ctext.style.color='green';
                    }
                    else if(questions[currentQuestion].option1.correct==true){
                        Elements.Dtext.style.color='red';
                        Elements.Atext.style.color='green';
                    }
                    break;
                }
            }
        }
    }
    else if(viewedQuestions.size==maxQuestions){
        Elements.isPlay=false;
        Elements.isStar=true;
        console.log('>>END');
        //Меняем режим игры, это конец. Ставим режим игры "начало"
        Elements.MainDeco.removeChild(Elements.AnswerZN);
        //Убираем графу ответов
        Elements.QuestionNumber.textContent = 'Конец квиза';
        Elements.QZN.removeChild(Elements.MainPicture);
        Elements.MainButton.textContent = 'ПОВТОР'
        Elements.MainText.innerText = ('Квиз завершен.\nКоличество правильных ответов:\n'+Elements.RightAnswers+'/'+maxQuestions);
        viewedQuestions = new Set();
        currentQuestion = 0;
        Elements.Atext.style.color = 'black';
        Elements.Btext.style.color = 'black';
        Elements.Ctext.style.color = 'black';
        Elements.Dtext.style.color = 'black';
        Elements.RightAnswers=0;
        Elements.NOWis = 1;
    }
    else if(Elements.isPlay==true){
        console.log('>>Status: NEW QUESTION');
        Elements.isPlay=false;
        Elements.NOWis++;
        Elements.isAnswered=true;
        //Изменеие режима игры. Теперь мы не на N вопросе. Мы выбираем.
        currentQuestion = rand();
        viewedQuestions.add(currentQuestion);
        //Выбрали вопрос.
        Elements.MainPicture.src=questions[currentQuestion].mainPicture;
        Elements.QZN.appendChild(Elements.MainPicture);
        Elements.MainText.textContent = (questions[currentQuestion].mainText);
        Elements.QuestionNumber.textContent = ('Вопрос №'+Elements.NOWis);
        Elements.MainButton.textContent = 'ПРОВЕРИТЬ'
        //Косметика зоны управления
        Elements.Atext.textContent = questions[currentQuestion].option1.text;
        Elements.Btext.textContent = questions[currentQuestion].option2.text;
        Elements.Ctext.textContent = questions[currentQuestion].option3.text;
        Elements.Dtext.textContent = questions[currentQuestion].option4.text;
        Elements.Atext.style.color = 'black';
        Elements.Btext.style.color = 'black';
        Elements.Ctext.style.color = 'black';
        Elements.Dtext.style.color = 'black';
        Elements.A.disabled = false;
        Elements.B.disabled = false;
        Elements.C.disabled = false;
        Elements.D.disabled = false;
        //Изменяем графу ответов
    }
}