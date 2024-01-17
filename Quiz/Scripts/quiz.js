"use strict";

//User interface
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
                    NumberZn.textContent = 'Question 1'
                //cl 1.2.1.1.
                NumExZone.appendChild(NumberZn);
                //op 1.2.1.2.
                let ButtonsZn = document.createElement('div');
                    ButtonsZn.className = ('buttons');
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
                    questionTx.textContent = 'This field for question!';
                //cl 1.2.2.1.
                QuestionZn.appendChild(questionTx);
                //op 1.2.2.2.
                let Qpicture = document.createElement('img');
                    Qpicture.className = ('Qpic');
                    Qpicture.src = 'Media/pic1.png';
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
                        TextA.textContent = 'A) Svoloch'
                    Azn.appendChild(TextA);
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
                        TextC.textContent = 'C) Alibaba'
                    Czn.appendChild(TextC);
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
                        TextB.textContent = 'B) Kurva'
                    Bzn.appendChild(TextB);
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
                        TextD.textContent = 'D) Ksushka-Shlushka'
                    Dzn.appendChild(TextD);
                //cl 1.3.2.2
                BDzn.appendChild(Dzn);
            //cl 1.3.2.
            AnswerZone.appendChild(BDzn);
        //cl 1.3.
        MainDeco.appendChild(AnswerZone);
    //cl 1.
    document.body.appendChild(MainDeco);
}
