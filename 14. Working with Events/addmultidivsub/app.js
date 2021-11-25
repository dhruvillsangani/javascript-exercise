// var num1 = document.getElementById("num1");
// var num2 = document.getElementById("num2");

function add() {

    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var n3 = parseInt(n1+n2);
    document.getElementById("result").innerHTML = n3;


}

function sub() {

    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var n3 = parseInt(n1-n2);
    document.getElementById("result").innerHTML = n3;

}

function multi() {

    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var n3 = parseInt(n1*n2);
    document.getElementById("result").innerHTML = n3;

}

function div() {

    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    var n3 = parseInt(n1 / n2);
    document.getElementById("result").innerHTML = n3;

}




