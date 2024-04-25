

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
    checklogin();
}
document.getElementById("spencerbutton").onclick = function(){
    document.getElementById("spencer").removeAttribute("hidden");
}

function checklogin(){
    if(document.getElementById("fpass").value == "tester" && document.getElementById("fname").value == "devtest") {
        document.getElementById("loginlabel").style.backgroundColor = "green";
        document.getElementById("loginlabel").textContent ="SUCCESS";
        document.getElementById("nextpage").click();
        sessionStorage.setItem("goodlogin", "0");
        sessionStorage.setItem("username", document.getElementById("fname").value);
    }
    else{
    document.getElementById("loginlabel").style.backgroundColor = "orange";
    document.getElementById("loginlabel").textContent ="INVALID LOGIN";
    }
}

