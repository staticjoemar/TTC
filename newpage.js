
let auth = sessionStorage.getItem("goodlogin");
if((auth=="null")||(auth==null)){
    document.getElementById("backtologin").click();
}

let sec = 0;
let count =0;
total = 0; 
let init = +localStorage.getItem("init");

document.getElementById("timeOutBtn").onclick=function(){
    document.getElementById("timerActive").style.backgroundColor="green";
    document.getElementById("timerActive").style.color="black";



    document.getElementById("timeInBtn").removeAttribute("disabled");
    document.getElementById("timeInBtn").style.backgroundColor="red";
    document.getElementById("timeOutBtn").setAttribute("disabled", "disabled");
    document.getElementById("timeOutBtn").style.backgroundColor="gray";


    let x = new Date();
    let y = x.getTime();
    localStorage.setItem("startTime",y);
}
document.getElementById("timeInBtn").onclick=function(){
    document.getElementById("timerActive").style.backgroundColor="red";
    document.getElementById("timerActive").style.color="red";




    document.getElementById("timeOutBtn").removeAttribute("disabled");
    document.getElementById("timeOutBtn").style.backgroundColor="red";
    document.getElementById("timeInBtn").setAttribute("disabled", "disabled");
    document.getElementById("timeInBtn").style.backgroundColor="gray";

    document.getElementById("day").innerHTML = sec;

    splitTime();
    dayTime();
    
}



function splitTime(){
    
    count++;
    let x = new Date();
    let y = x.getTime();
    let z = +localStorage.getItem("startTime");
    let a = (y - z)/1000;
    sec = a/60;
    localStorage.setItem("splitTime"+count, sec);
    localStorage.setItem("init", init);
   document.getElementById("day").textContent = sec;
}

document.getElementById("deletestorage").onclick=function(){
    localStorage.clear();
}

function dayTime(){

let x = +localStorage.getItem("init");
let y = +localStorage.getItem("splitTime"+count);
 init = x+y;
localStorage.setItem("init",init);
document.getElementById("totalpd").innerHTML = init;


 




}





