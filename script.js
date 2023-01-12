



var startBtn = document.querySelector("#startbtn")
var countDwnEl = document.querySelector("#countdown")
var timeDown = 11
var sectionOne = document.querySelector(".section1")
var opening = document.querySelector(".opening")
var answersBtn = document.querySelector(".answers")
var nextQ = document.querySelector("#nextquestion")
var x = document.querySelector("#header2")
var sectionQs = document.querySelectorAll(".section1")
var userChoice = 0
var currentQuestion = 1
var timerInterval = null
var correctAnswrs = ["3","3","4","3","4",]
var answersBtn2 = document.querySelector(".answers1")
const rememberMe = document.querySelector(".remember");
const forgetMe = document.querySelector(".forget");
const form = document.querySelector("form");
const getName = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn =document.querySelector("#forgetname");
const localStorageAnswrs = [];
const h3 = document.querySelector("h3");
const greeting = document.querySelector(".personal-greeting");


submitBtn.addEventListener("click", function(){
    localStorage.setItem("name", getName.value + " " + timeDown);

    nameDisplayCheck();
});

forgetBtn.addEventListener("click", function(){
    localStorage.removeItem("name");

    nameDisplayCheck();
});

function nameDisplayCheck(){
    if (localStorage.getItem("name")) {
        var name = localStorage.getItem("name");
         var scoreHere = document.querySelector("#alsoScoreHere")
        scoreHere.textContent = name;
        h3.textContent = "Congratulations" ;
        greeting.textContent = "Great Job" ;
        forgetMe.style.display = "block";
        rememberMe.style.display = "none";
    } else {
        h3.textContent = "How did you do?";
        greeting.textContent = "Lets see...";

        forgetMe.style.display= "none";
        rememberMe.style.display = "block";
    }
}

console.log(localStorage.getItem("name"));

function nextQuestion(correctAnswr){ 

    
    
    if (correctAnswr!==correctAnswrs[1]){
     timeDown-=10
    }
    
    var currentQuestionEl = document.querySelector("#q"+currentQuestion)
    var nextQuestionEl = document.querySelector("#q"+(currentQuestion+1))
    currentQuestionEl.classList.add("hide")  
    nextQuestionEl.classList.remove("hide")
    userChoice = null
    currentQuestion++
    
    
}

function nextQuestion2(correctAnswr){ 

    
    
    if (correctAnswr!==correctAnswrs[2]){
     timeDown-=10
    }
    
    var currentQuestionEl = document.querySelector("#q"+currentQuestion)
    var nextQuestionEl = document.querySelector("#q"+(currentQuestion+1))
    currentQuestionEl.classList.add("hide")  
    nextQuestionEl.classList.remove("hide")
    userChoice = null
    currentQuestion++
    
    
}

function nextQuestion3(correctAnswr){ 

    
    
    if (correctAnswr!==correctAnswrs[3]){
     timeDown-=10
    }
    
    var currentQuestionEl = document.querySelector("#q"+currentQuestion)
    var nextQuestionEl = document.querySelector("#q"+(currentQuestion+1))
    currentQuestionEl.classList.add("hide")  
    nextQuestionEl.classList.remove("hide")
    userChoice = null
    currentQuestion++
    
    
}

function nextQuestion4(correctAnswr){ 

    
    
    if (correctAnswr!==correctAnswrs[4]){
     timeDown-=10
    }
    
    var currentQuestionEl = document.querySelector("#q"+currentQuestion)
    var nextQuestionEl = document.querySelector("#q"+(currentQuestion+1))
    currentQuestionEl.classList.add("hide")  
    nextQuestionEl.classList.remove("hide")
    userChoice = null
    currentQuestion++
    myStopFunction()

    document.querySelector("#scoreHere").textContent=timeDown
    countDwnEl.textContent = " "
    
    
}

function decreaseCnt(){
    
    timeDown--
    if (timeDown<=0) 
    {
    timeDown=0
    myStopFunction()
    timeDown=0
    currentQuestion=5 
        }
    
    countDwnEl.innerText = timeDown

}

function myStopFunction() {
    clearInterval(timerInterval);
}


function timerCntDwn(){
    countDwnEl.innerText = timeDown
    timerInterval = setInterval(decreaseCnt, 1000)

    sectionOne.classList.remove("hide")  
    opening.classList.add("hide")
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
     currentQuestionEl.classList.add("hide")  
     nextQuestionEl.classList.remove("hide")
     userChoice = null
     currentQuestion++
     
     
 }



startBtn.addEventListener("click",timerCntDwn)

answersBtn.addEventListener("click", function (event){
    userChoice = event.target.getAttribute('data-button')
    console.log(userChoice)
    
})

var buttonOne = document.querySelector("#data-21")
buttonOne.addEventListener("click", function (){
    console.log(buttonOne.getAttribute("data-button"))
    nextQuestion(buttonOne.getAttribute("data-button"))
})
 
var buttonTwo = document.querySelector("#data-22")
buttonTwo.addEventListener("click", function(){
    console.log(buttonTwo.getAttribute("data-button"))
    nextQuestion(buttonTwo.getAttribute("data-button"))
})

var buttonThree = document.querySelector("#data-23")
buttonThree.addEventListener("click", function(){
    console.log(buttonThree.getAttribute("data-button"))
    nextQuestion(buttonThree.getAttribute("data-button"))
})
var buttonFour = document.querySelector("#data-24")
buttonFour.addEventListener("click", function(){
    console.log(buttonFour.getAttribute("data-button"))
    nextQuestion(buttonFour.getAttribute("data-button"))
})


//

var buttonFive = document.querySelector("#data-31")
buttonFive.addEventListener("click", function (){
    console.log(buttonFive.getAttribute("data-button"))
    nextQuestion2(buttonFive.getAttribute("data-button"))
})
var buttonSix = document.querySelector("#data-32")
buttonSix.addEventListener("click", function (){
    console.log(buttonSix.getAttribute("data-button"))
    nextQuestion2(buttonSix.getAttribute("data-button"))
})
var buttonSeven = document.querySelector("#data-33")
buttonSeven.addEventListener("click", function (){
    console.log(buttonSeven.getAttribute("data-button"))
    nextQuestion2(buttonSeven.getAttribute("data-button"))
})
var buttonEight = document.querySelector("#data-34")
buttonEight.addEventListener("click", function (){
    console.log(buttonEight.getAttribute("data-button"))
    nextQuestion2(buttonEight.getAttribute("data-button"))
})
//

var buttonNine = document.querySelector("#data-41")
buttonNine.addEventListener("click", function (){
    console.log(buttonNine.getAttribute("data-button"))
    nextQuestion3(buttonNine.getAttribute("data-button"))
})
var buttonTen = document.querySelector("#data-42")
buttonTen.addEventListener("click", function (){
    console.log(buttonTen.getAttribute("data-button"))
    nextQuestion3(buttonTen.getAttribute("data-button"))
})
var button11 = document.querySelector("#data-43")
button11.addEventListener("click", function (){
    console.log(button11.getAttribute("data-button"))
    nextQuestion3(button11.getAttribute("data-button"))
})
var button12 = document.querySelector("#data-44")
button12.addEventListener("click", function (){
    console.log(button12.getAttribute("data-button"))
    nextQuestion3(button12.getAttribute("data-button"))
})
//
var button13 = document.querySelector("#data-51")
button13.addEventListener("click", function (){
    console.log(button13.getAttribute("data-button"))
    nextQuestion4(button13.getAttribute("data-button"))
})
    var button14 = document.querySelector("#data-52")
button14.addEventListener("click", function (){
    console.log(button14.getAttribute("data-button"))
    nextQuestion4(button14.getAttribute("data-button"))
})
var button15 = document.querySelector("#data-53")
button15.addEventListener("click", function (){
    console.log(button15.getAttribute("data-button"))
    nextQuestion4(button15.getAttribute("data-button"))
})
var button16 = document.querySelector("#data-54")
button16.addEventListener("click", function (){
    console.log(button16.getAttribute("data-button"))
    nextQuestion4(button16.getAttribute("data-button"))
})
//


function selectAnswr(){
    console.log(1)
}

/*
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
*/

 



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
