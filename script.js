//Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
const sentences = 
  `The quick brown fox jumps over the lazy dog.
  Sphinx of black quartz, judge my vow.
  Pack my box with five dozen liquor jugs.
  How vexingly quick daft zebras jump!`
;

let time=30;
let settimer;
let ans;
let count =0;
let speed=0;
let accuracy=0;

const result = document.getElementById("result");
const typingArea = document.getElementById("input");
const sentencesPara = document.getElementById("sentence");
const startBtn = document.getElementById("start-btn");
const timer = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accElement = document.getElementById("accuracy");
const retryBtn =document.getElementById("retry-btn");


startBtn.addEventListener('click',()=>{
    typingArea.disabled = false;
    sentencesPara.textContent = sentences;
    startBtn.disabled = true;
    timer.textContent = `Time left: ${time}`;
    startTimer();
    retryBtn.disabled = true;
});

function startTimer()
{
    settimer = setInterval(()=>{
        time--;
        timer.textContent = `Time left: ${time}`;
        if(time<=0){
            endTest();
        }
    },1000);
}

function endTest(){
    clearInterval(settimer);
    timer.textContent = "";  
    displayResult();
    retryBtn.disabled = false;
    typingArea.disabled = true;
}

function displayResult(){
    ans = typingArea.value;
    typingArea.value ="";
    console.log(ans);
    result.display = block;
    for(let i=0;i<sentences.length && i<ans.length;i++)
    {
        if(ans[i]===sentences[i])
        { count++;
        }
        console.log(count);
    }

    speed=(count/30)*60;
    accuracy = (count/sentences.length)*100;
    speedElement.textContent= ` ${speed}`;
    accElement.textContent = `${accuracy}`;
}

retryBtn.addEventListener('click',()=>
{
    startBtn.disabled = false;
    result.display = "none";
    typingArea.value = "";
});