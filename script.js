



var startBtn = document.querySelector("#startbtn")
var countDwnEl = document.querySelector("#countdown")
var timeDown = 300
var sectionOne = document.querySelector(".section1")
var opening = document.querySelector(".opening")
var answersBtn = document.querySelector(".answers")
var nextQ = document.querySelector("#nextquestion")
var x = document.querySelector("#header2")
var sectionQs = document.querySelectorAll(".section1")
var userChoice = 0
var currentQuestion = 1
var timerInterval = null
var correctAnswrs = ["3","2","1","4","3","2"]

function decreaseCnt(){
    timeDown--
    countDwnEl.innerText = timeDown
}

function timerCntDwn(){
    countDwnEl.innerText = timeDown
    timerInterval = setInterval(decreaseCnt, 1000)
    sectionOne.classList.remove("hide")  
    opening.classList.add("hide")
}

startBtn.addEventListener("click",timerCntDwn)
answersBtn.addEventListener("click", function (event){
    userChoice = event.target.getAttribute('data-button')
    console.log(userChoice)
    
})
function selectAnswr(){
    console.log(1)
}


function submitHandler(){ 
   if ( !userChoice){
    return
   }
   
   
    if (userChoice!==correctAnswrs[currentQuestion-1]){
     timeDown-=10
    }
    
    var currentQuestionEl = document.querySelector("#q"+currentQuestion)
    var nextQuestionEl = document.querySelector("#q"+(currentQuestion+1))
    currentQuestion++
    currentQuestionEl.classList.add("hide")  
    nextQuestionEl.classList.remove("hide")
    userChoice = null

    
    
}
    
    



/*function changeText(text) {
    document.getElementById("header2").firstChild.data = text;
  }
  const nextQ = document.getElementById('nextquestion');
  nextQ.addEventListener('click', () => changeText('The Condition in an if/else statement is enclosed with:'));             






/* call function for hiding and showing new question*/

/*function myFunction() {
    var x = document.getElementById("header2");
    if (x.innerHTML === "Commonly used data types Do NOT include:") {
      x.innerHTML = "The Condition in an if/else statement is enclosed with:";
    } else {
      x.innerHTML = "Commonly used data types Do NOT include:";
    }

     }
  
/*
function answerButton(){
    var x = document.getElementById("answrbtn1");
    if (x.innerHTML === "1.strings") {
      x.innerHTML = "1.quotes";
    } else {
      x.innerHTML = "1.strings";
    }
}
answerBtns.addEventListener("click",myFunction)

/*function changeSection3(){
    sectionThree.classList.remove("hide")
    sectionTwo.classList.add("hide")
    }
    answerBtns.addEventListener("click",changeSection3)

 function changeSection4(){
    sectionThree.classList.remove("hide")
    sectionTwo.classList.add("hide")
    }
    startBtn.addEventListener("click",changeSection4)

function changeSection5(){
    sectionFive.classList.remove("hide")
    sectionFour.classList.add("hide")
    }
    startBtn.addEventListener("click",changeSection5)

function changeSection6(){
    sectionSix.classList.remove("hide")
    sectionFive.classList.add("hide")
    }
    startBtn.addEventListener("click",changeSection6)

function changeFinalPrompt(){
    finalPrompt.classList.remove("hide")
    sectionSix.classList.add("hide")
    }
    startBtn.addEventListener("click",changeFinalPrompt)

for(var i = 0; i < answerBtns.length; i++){
    answerBtns[i].addEventListener('click', selectAnswr);
}
*/