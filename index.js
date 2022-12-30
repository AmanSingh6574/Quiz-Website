const questions = [
    {
        "que": "Which of the folowing is a markup language",
        "a": "HTML",
        "b": "CSS",
        "c": "PYTHON",
        "d": "C++",
        "correct": "a",
        "option": "option1",
        "number": "0"
    },
    {
        "que": "Which of the following tag is used to insert a line-break in HTML",
        "a": "<br>",
        "b": "<a>",
        "c": "<pre>",
        "d": "<b>",
        "correct": "a",
        "option": "option2",
        "number": "0"
    },
    {
        "que": "HTML stands for",
        "a": "HighText Machine Language",
        "b": "HyperText and links Markup Language",
        "c": "HyperText Markup Language",
        "d": "None of these",
        "correct": "c",
        "option": "option3",
        "number": "2"
    },
    {
        "que": "The correct sequence of HTML tags for starting a webpage is",
        "a": "Head, Title, HTML, body",
        "b": "HTML, Head, Title, Body",
        "c": "HTML, Body, Title, Head",
        "d": "None of these",
        "correct": "b",
        "option": "option4",
        "number": "1"

    },
    {
        "que": " What is the correct syntax of doctype in HTML5",
        "a": "</doctype html>",
        "b": "<doctype html>",
        "c": "<doctype html!>",
        "d": "<!doctype html>",
        "correct": "d",
        "option": "option5",
        "number": "3"

    },
    {
        "que": "What is DOM in HTML",
        "a": "Language dependent application programming",
        "b": "Hierarchy of objects in ASP.NET",
        "c": "Application programming interface",
        "d": "Convention for representing and interacting with objects in html documents",
        "correct": "d",
        "option": "option6",
        "number": "3"

    },
    {
        "que": "The correct sequence of HTML tags for starting a webpage is",
        "a": "Web server",
        "b": "Web network",
        "c": "Web browser",
        "d": "Web matrix",
        "correct": "c",
        "option": "option7",
        "number": "2"

    },
    {
        "que": "Which of the following is not a HTML5 tag",
        "a": "<slider>",
        "b": "<video>",
        "c": "<track>",
        "d": "<source>",
        "correct": "a",
        "option": "option8",
        "number": "0"

    },
    {
        "que": "How do we write comments in HTML",
        "a": "</…….>",
        "b": "<!……>",
        "c": "</……/>",
        "d": "<…….!>",
        "correct": "b",
        "option": "option9",
        "number": "1"

    },
    {
        "que": "Which element is used for styling HTML5 layout",
        "a": "CSS",
        "b": "javaScript",
        "c": "PHP",
        "d": "jQuery",
        "correct": "a",
        "option": "option10",
        "number": "0"

    }

]

let PersonName = prompt("Please enter your name to start the quiz")
while(PersonName==null){
    PersonName=prompt("Please enter your name")
}
if(PersonName.length>20){
    PersonName=prompt("Please enter your proper name")
}
else{
    alert(`Thank you for registering ${PersonName} , Enjoy the QUIZ`)
}



let index = 0;
let innerquestion = document.getElementById('que')
let lableoption = document.getElementsByClassName('option')
let submitbtn = document.getElementById('btn')
const answers = document.querySelectorAll('.answer')
// console.log(questions);
const loadquestion = () => {
    const data = questions[index]
    // console.log(data);
    innerquestion.innerText = `${index + 1}. ${data.que}`
    lableoption[0].innerText = data.a
    lableoption[1].innerText = data.b
    lableoption[2].innerText = data.c
    lableoption[3].innerText = data.d
}
loadquestion()


const getcheckans = () => {
    let ans;
    answers.forEach(element => {

        if (element.checked) {
            // console.log("yes");
            ans = element.value;
            // console.log(ans);
            option = element.id;
            console.log(option);
        }
    });
    return ans;
}

function color() {
    let optioninput;
    let optionvalue;
    answers.forEach(input => {
        if (input.checked) {
            optioninput = input.id;
            if (optioninput == questions[index].option) {
                console.log("clicked");
                lableoption[0].style.color = "red"
                lableoption[1].style.color = "red"
                lableoption[2].style.color = "red"
                lableoption[3].style.color = "red"
                lableoption[questions[index].number].style.color = "green"
            }
            else {
                lableoption[0].style.color = "red"
                lableoption[1].style.color = "red"
                lableoption[2].style.color = "red"
                lableoption[3].style.color = "red"
                lableoption[questions[index].number].style.color = "green"

            }
        }
        

    })
    

}



const deselect = () => {
    answers.forEach(element => {
        element.checked = false;
    })
}

const deselectinput = () => {
    Array.from(lableoption).forEach(element=>{
        element.style.color="black"
    })
}

const ReloadFunction = () => {
    location.reload();
}

let score = 0;
var blankArray = [];

const showscore = document.getElementById('showscore')

submitbtn.addEventListener('click', () => {
    const checkans = getcheckans()
    // console.log(checkans);

    
    if (checkans == questions[index].correct) {
        score++
    }
    else {

        let wrongAns = index + 1;
        blankArray.push(wrongAns);
        console.log(blankArray)
    }

    index++;
    deselect()
    deselectinput()

    if (index < questions.length) {

        loadquestion();
    }

    else {
        if (score == 10) {
            showscore.innerHTML = `<h2> ${PersonName}, you scored ${score} / ${questions.length} excellent job 🥳</h2>
            <h2>All the questions attempted are correct</h2>
        <button class="btn" id="final-btn" onclick="ReloadFunction()" >Play Again</button>`
        }
        else if (score == 9) {
            showscore.innerHTML = `<h2> ${PersonName}, you scored ${score} / ${questions.length} Nice one 🎉</h2>   <h2>Question number ${blankArray} is wrong try again</h2>
        <button class="btn" id="final-btn" onclick="ReloadFunction()" >Play Again</button>`
        }
        else if (score == 8) {
            showscore.innerHTML = `<h2> ${PersonName}, you scored ${score} / ${questions.length} Nice one 🎉</h2>   <h2>Question number ${blankArray} are wrong try again</h2>
        <button class="btn" id="final-btn" onclick="ReloadFunction()" >Play Again</button>`
        }
        else if (score == 7 || score == 6) {
            showscore.innerHTML = `<h2> ${PersonName}, you scored ${score} / ${questions.length} good job ✌️</h2>  <h2>Question number ${blankArray} are wrong try again</h2>
        <button class="btn" id="final-btn" onclick="ReloadFunction()" >Play Again</button>`
        }
        else if (score == 5 || score == 4) {
            showscore.innerHTML = `<h2> ${PersonName}, you scored ${score} / ${questions.length} Try onec more 😊</h2> <h2>Question number ${blankArray} are wrong try again</h2>
        <button class="btn" id="final-btn" onclick="ReloadFunction()" >Play Again</button>`
        }
        else {
            showscore.innerHTML = `<h2> ${PersonName}, you scored ${score} / ${questions.length} 😶</h2> <h2>Question number ${blankArray} are wrong try again</h2>
        <button class="btn" id="final-btn" onclick="ReloadFunction()" >Play Again</button>`
        }

    }

})