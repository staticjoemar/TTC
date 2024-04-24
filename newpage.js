
let auth = sessionStorage.getItem("goodlogin");
if((auth=="null")||(auth==null)){
    document.getElementById("backtologin").click();
}


document.getElementById("timeoutbutton").onclick = function() {
    document.getElementById("daylabel").style.backgroundColor = "green";
}
document.getElementById("timeinbutton").onclick = function(){
    document.getElementById("daylabel").style.backgroundColor = "red";
}
let startBtn = document.getElementById('timeoutbutton');
let stopBtn = document.getElementById('timeinbutton');
let resetBtn = document.getElementById('resetbutton');
let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let daycount = 0;
let pdcount = +localStorage.getItem("pdsaved");




startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});
stopBtn.addEventListener('click', function () {
    timer = false;
    printCount();
    saveData();
});
resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    printCount();
    saveData();
});
function stopWatch() {
    if (timer) {
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
        count++;
        daycount++;
        pdcount++;
        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }
        if (hour < 10) {
            hrString = "0" + hrString;
        }
        if (minute < 10) {
            minString = "0" + minString;
        }
        if (second < 10) {
            secString = "0" + secString;
        }
        if (count < 10) {
            countString = "0" + countString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}
let finalday = 0;
let finalpd = 0;
let grosspdcount = +localStorage.getItem("pdsaved");
function returngrosspdcount(){
    grosspdcount = +localStorage.getItem("pdsaved");
}
function printCount(){
    returngrosspdcount();
    unfixeddaycount = daycount/360000
    unfixedpdcount = grosspdcount/360000
    finalday = unfixeddaycount.toFixed(9);
    finalpd = unfixedpdcount.toFixed(9);
    document.getElementById("day").innerHTML = finalday;
    document.getElementById("totalpd").innerHTML = finalpd;
}
function saveData(){
    localStorage.setItem("daysaved", daycount);
    localStorage.setItem("pdsaved", pdcount );
}
document.getElementById("deletestorage").onclick = function(){
    localStorage.clear();
}
document.getElementById("console").onclick=function(){
    console.log(localStorage.getItem("pdsaved"));
    console.log(pdcount);
}
document.getElementById("totalpd").textContent = finalpd;
document.getElementById("day").textContent = finalday;


