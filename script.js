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
if(a == 0){
  document.getElementById('answer').innerHTML = "This is not a quadratic equation!";
}else{
  if(Math.sign(numerator/denominator) == '-1'){
    document.getElementById('answer').innerHTML = "Calculation Error<br>Please re-check values!";
  }else{
  var solutionPart = numerator;
  var solutionMid = Math.sqrt(solutionPart);
  var numNeg = 0 - b;
  var solution1 = (numNeg + solutionMid)/denominator;
  var solution2 = (numNeg - solutionMid)/denominator;
  if(solution1 == solution2){
    document.getElementById('answer').innerHTML = "X = " + solution1;
  }else{
    document.getElementById('answer').innerHTML = "X = " + solution1 + "<br>" + "X =" + solution2;
  }

  }

}

}
