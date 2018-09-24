document.getElementById('equ-btn').addEventListener("click",calculate);
function calculate(){
var a = document.getElementById('a').value;
var b = document.getElementById('b').value;
var c = document.getElementById('c').value;
if(a == "" || b == "" || c == ""){
  alert('All inputs must be filled !');
}else{
  linearCalc();
}
}

function linearCalc(){
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = document.getElementById('c').value;
var numerator = (b*b) - (4 * a * c);
var denominator = 2 * a;
if(Math.sign(numerator/denominator) == '-1'){
document.getElementById('answer').innerHTML = "Calculation Error<br>Please re-check values!";
}else{
var solutionPart = numerator/denominator;
var solutionMid = Math.sqrt(solutionPart);
var numNeg = 0 - b;
var solution1 = (numNeg/denominator) + solutionMid;
var solution2 = (numNeg/denominator) - solutionMid;
if(solution1 == solution2){
document.getElementById('answer').innerHTML = "X = " + solution1;
}else{
document.getElementById('answer').innerHTML = "X = " + solution1 + "<br>" + "X =" + solution2;
}

}
}
