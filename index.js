
let var1 = "CONSOLE: ";
let var2 = " SADF";
let var4 = "SUCCESS";
let pass = "password"
var userinput = document.getElementById("fname");
var passinput = document.getElementById("fpass");
passinput.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        event.preventDefault();
        document.getElementById("b1").click();
    }
});
document.getElementById("b1").onclick = function(){
    recInput();
    checklogin();
}
document.getElementById("spencerbutton").onclick = function(){
    document.getElementById("spencer").removeAttribute("hidden");
}
function recInput(){
    var2 = document.getElementById("fpass").value;
    document.getElementById("p1").textContent = var1 + var2;
}
function checklogin(){
    if(document.getElementById("fpass").value == "pass" && document.getElementById("fname").value == "user") {
        document.getElementById("loginlabel").style.backgroundColor = "green";
        document.getElementById("loginlabel").textContent ="SUCCESS";
        document.getElementById("nextpage").click();
    }
    else{
    document.getElementById("loginlabel").style.backgroundColor = "orange";
    document.getElementById("loginlabel").textContent ="INVALID LOGIN";
    }
}

