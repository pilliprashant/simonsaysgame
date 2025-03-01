let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let btns = ["yellow","red","green","purple"];
document.addEventListener("keypress",function(){
    
    if(started==false){
        console.log("game started");
        started = true;
     levelUp();
    }
   
    
});
function flashbtn(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },500);
}
function levelUp(){
    userseq = [];
   level++;
   h3.innerText = `level ${level}`;
   let rndIndx = Math.floor(Math.random()*3);
   let rndColor = btns[rndIndx];
   let rndBtn = document.querySelector(`.${rndColor}`);
   gameseq.push(rndColor);
   flashbtn(rndBtn);
}
function checkAns(idx){
   
   if(userseq[idx]==gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp,1000);
    }
   }else{
    h3.innerHTML = `game over<b>your score was:${level}</b><br>press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
   }
}
function btnpress(){
    let btn = this;
    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    flashbtn(btn);
    checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}