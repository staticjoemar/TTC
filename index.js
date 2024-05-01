
let count =0;
document.getElementById("Btn1").onclick=function(){
    document.getElementById("Btn1").innerHTML="X";
    count++
        setTimeout(npcMove,1500);
        checkWin();
}
document.getElementById("Btn2").onclick=function(){
    document.getElementById("Btn2").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
document.getElementById("Btn3").onclick=function(){
    document.getElementById("Btn3").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
document.getElementById("Btn4").onclick=function(){
    document.getElementById("Btn4").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
document.getElementById("Btn5").onclick=function(){
    document.getElementById("Btn5").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
document.getElementById("Btn6").onclick=function(){
    document.getElementById("Btn6").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
document.getElementById("Btn7").onclick=function(){
    document.getElementById("Btn7").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
document.getElementById("Btn8").onclick=function(){
    document.getElementById("Btn8").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
document.getElementById("Btn9").onclick=function(){
    document.getElementById("Btn9").innerHTML="X";
    setTimeout(npcMove,1500);
    checkWin();
}
function npcMove(){
    let a = document.getElementById("Btn1").innerHTML;
    let b = document.getElementById("Btn2").innerHTML;
    let c = document.getElementById("Btn3").innerHTML;
    let d = document.getElementById("Btn4").innerHTML;
    let e = document.getElementById("Btn5").innerHTML;
    let f = document.getElementById("Btn6").innerHTML;
    let g = document.getElementById("Btn7").innerHTML;
    let h = document.getElementById("Btn8").innerHTML;
    let i = document.getElementById("Btn9").innerHTML;
    if(a=="-"){
        document.getElementById("Btn1").innerHTML="O";
    }
    else if(d=="-"){
        document.getElementById("Btn4").innerHTML="O";
    }
    else if(c=="-"){
        document.getElementById("Btn3").innerHTML="O";
    }
    else if(e=="-"){
        document.getElementById("Btn5").innerHTML="O";
    }
    else if(i=="-"){
        document.getElementById("Btn9").innerHTML="O";
    }
    else if(f=="-"){
        document.getElementById("Btn6").innerHTML="O";
    }
    else if(b=="-"){
        document.getElementById("Btn2").innerHTML="O";
    }
    else if(g=="-"){
        document.getElementById("Btn7").innerHTML="O";
    }
    else if(h=="-"){
        document.getElementById("Btn8").innerHTML="O";
    }}
function checkWin(){
checkHoriz();
checkVert();
checkDiag();
}
function checkHoriz(){
    let a = document.getElementById("Btn1").innerHTML;
    let b = document.getElementById("Btn2").innerHTML;
    let c = document.getElementById("Btn3").innerHTML;
    let d = document.getElementById("Btn4").innerHTML;
    let e = document.getElementById("Btn5").innerHTML;
    let f = document.getElementById("Btn6").innerHTML;
    let g = document.getElementById("Btn7").innerHTML;
    let h = document.getElementById("Btn8").innerHTML;
    let i = document.getElementById("Btn9").innerHTML;
if(a==b){
    if(a==c){
        if(a=="X"){
            console.log("row1win");
            setTimeout(printRow1Win,200);
        }}}
if(d==e){
    if(d==f){
        if(d=="X"){
            setTimeout(printRow2Win,200);
        }}}
if(g==h){
    if(g==i){
        if(g=="X"){
            setTimeout(printRow3Win,200);
        }}}}
function checkVert(){
    let a = document.getElementById("Btn1").innerHTML;
    let b = document.getElementById("Btn2").innerHTML;
    let c = document.getElementById("Btn3").innerHTML;
    let d = document.getElementById("Btn4").innerHTML;
    let e = document.getElementById("Btn5").innerHTML;
    let f = document.getElementById("Btn6").innerHTML;
    let g = document.getElementById("Btn7").innerHTML;
    let h = document.getElementById("Btn8").innerHTML;
    let i = document.getElementById("Btn9").innerHTML;
    if(a==d){
        if(a==g){
            if(a=="X"){
                setTimeout(printColumn1Win,200);
            }}}
    if(b==e){
        if(b==h){
            if(b=="X"){
                setTimeout(printColumn2Win,200);
            }}}
    if(c==f){
        if(c==i){
            if(c=="X"){
                setTimeout(printColumn3Win,200);
            }}}}
function checkDiag(){
    let a = document.getElementById("Btn1").innerHTML;
    let b = document.getElementById("Btn2").innerHTML;
    let c = document.getElementById("Btn3").innerHTML;
    let d = document.getElementById("Btn4").innerHTML;
    let e = document.getElementById("Btn5").innerHTML;
    let f = document.getElementById("Btn6").innerHTML;
    let g = document.getElementById("Btn7").innerHTML;
    let h = document.getElementById("Btn8").innerHTML;
    let i = document.getElementById("Btn9").innerHTML;
    if(a==e){
       if(a==i){
        if(a=="X"){
            setTimeout(printDiag1Win,200);
        }}}
    if(c==e){
       if(c==g){
        if(c=="X"){
            setTimeout(printDiag2Win,200);
        }}}}
function printRow1Win(){
    function printBtn2win(){
        function printBtn3win(){
            document.getElementById("Btn3").innerHTML="win"
            winner();
        }
        document.getElementById("Btn2").innerHTML="win";
        setTimeout(printBtn3win,200);
    }
    document.getElementById("Btn1").innerHTML="win";
    setTimeout(printBtn2win,200);   
}
function printRow2Win(){
    function printBtn5win(){
        function printBtn6win(){
            document.getElementById("Btn5").innerHTML="win"
            winner();
        }
        document.getElementById("Btn6").innerHTML="win";
        setTimeout(printBtn6win,200);
    }
    document.getElementById("Btn4").innerHTML="win";
    setTimeout(printBtn5win,200);   
}
function printRow3Win(){
    function printBtn8win(){
        function printBtn9win(){
            document.getElementById("Btn8").innerHTML="win"
            winner();
        }
        document.getElementById("Btn9").innerHTML="win";
        setTimeout(printBtn9win,200);
    }
    document.getElementById("Btn7").innerHTML="win";
    setTimeout(printBtn8win,200);   
}
function printColumn1Win(){
    function printBtn4win(){
        function printBtn7win(){
            document.getElementById("Btn7").innerHTML="win"
            winner();
        }
        document.getElementById("Btn4").innerHTML="win";
        setTimeout(printBtn7win,200);
    }
    document.getElementById("Btn1").innerHTML="win";
    setTimeout(printBtn4win,200);
}
function printColumn2Win(){
    function printBtn5win(){
        function printBtn8win(){
            document.getElementById("Btn8").innerHTML="win"
            winner();
        }
        document.getElementById("Btn5").innerHTML="win";
        setTimeout(printBtn8win,200);
    }
    document.getElementById("Btn2").innerHTML="win";
    setTimeout(printBtn5win,200);
}
function printColumn3Win(){
    function printBtn6win(){
        function printBtn9win(){
            document.getElementById("Btn9").innerHTML="win"
            winner();
        }
        document.getElementById("Btn6").innerHTML="win";
        setTimeout(printBtn9win,200);
    }
    document.getElementById("Btn3").innerHTML="win";
    setTimeout(printBtn6win,200);   
}
function printDiag1Win(){
    function printBtn5win(){
        function printBtn9win(){
            document.getElementById("Btn9").innerHTML="win"
            winner();
        }
        document.getElementById("Btn5").innerHTML="win";
        setTimeout(printBtn9win,200);
    }
    document.getElementById("Btn1").innerHTML="win";
    setTimeout(printBtn5win,200);
}
function printDiag2Win(){
    function printBtn5win(){
        function printBtn7win(){
            document.getElementById("Btn7").innerHTML="win"
            winner();

        }
        document.getElementById("Btn5").innerHTML="win";
        setTimeout(printBtn7win,200);
    }
    document.getElementById("Btn3").innerHTML="win";
    setTimeout(printBtn5win,200);
    winner()   
}
function winner(){
    setTimeout(winCon,200);
}
function winCon(){
    document.getElementById("gameFrame").setAttribute("hidden","hidden");
    document.getElementById("winMessage").removeAttribute("hidden");
}
