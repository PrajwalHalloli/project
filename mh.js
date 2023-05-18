var questionCount = 0;
var lowScore = 0;
var mildScore = 0;
var mild_severeScore = 0;
var severeScore = 0;

//Variables for each quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

var q10a1 = document.getElementById("q10a1");
var q10a2 = document.getElementById("q10a2");
var q10a3 = document.getElementById("q10a3");
var q10a4 = document.getElementById("q10a4");

var q11a1 = document.getElementById("q11a1");
var q11a2 = document.getElementById("q11a2");
var q11a3 = document.getElementById("q11a3");
var q11a4 = document.getElementById("q11a4");

var q12a1 = document.getElementById("q12a1");
var q12a2 = document.getElementById("q12a2");
var q12a3 = document.getElementById("q12a3");
var q12a4 = document.getElementById("q12a4");


var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", low);
q1a2.addEventListener("click", mild);
q1a3.addEventListener("click", mild_severe);
q1a4.addEventListener("click", severe);
q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);
q1a3.addEventListener("click", disableBtn1);
q1a4.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", low);
q2a2.addEventListener("click", mild);
q2a3.addEventListener("click", mild_severe);
q2a4.addEventListener("click", severe);
q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);
q2a3.addEventListener("click", disableBtn2);
q2a4.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", low);
q3a2.addEventListener("click", mild);
q3a3.addEventListener("click", mild_severe);
q3a4.addEventListener("click", severe);
q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);
q3a3.addEventListener("click", disableBtn3);
q3a4.addEventListener("click", disableBtn3);

q4a1.addEventListener("click", low);
q4a2.addEventListener("click", mild);
q4a3.addEventListener("click", mild_severe);
q4a4.addEventListener("click", severe);
q4a1.addEventListener("click", disableBtn4);
q4a2.addEventListener("click", disableBtn4);
q4a3.addEventListener("click", disableBtn4);
q4a4.addEventListener("click", disableBtn4);

q5a1.addEventListener("click", low);
q5a2.addEventListener("click", mild);
q5a3.addEventListener("click", mild_severe);
q5a4.addEventListener("click", severe);
q5a1.addEventListener("click", disableBtn5);
q5a2.addEventListener("click", disableBtn5);
q5a3.addEventListener("click", disableBtn5);
q5a4.addEventListener("click", disableBtn5);

q6a1.addEventListener("click", low);
q6a2.addEventListener("click", mild);
q6a3.addEventListener("click", mild_severe);
q6a4.addEventListener("click", severe);
q6a1.addEventListener("click", disableBtn6);
q6a2.addEventListener("click", disableBtn6);
q6a3.addEventListener("click", disableBtn6);
q6a4.addEventListener("click", disableBtn6);

q7a1.addEventListener("click", low);
q7a2.addEventListener("click", mild);
q7a3.addEventListener("click", mild_severe);
q7a4.addEventListener("click", severe);
q7a1.addEventListener("click", disableBtn7);
q7a2.addEventListener("click", disableBtn7);
q7a3.addEventListener("click", disableBtn7);
q7a4.addEventListener("click", disableBtn7);


q8a1.addEventListener("click", low);
q8a2.addEventListener("click", mild);
q8a3.addEventListener("click", mild_severe);
q8a4.addEventListener("click", severe);
q8a1.addEventListener("click", disableBtn8);
q8a2.addEventListener("click", disableBtn8);
q8a3.addEventListener("click", disableBtn8);
q8a4.addEventListener("click", disableBtn8);

q9a1.addEventListener("click", low);
q9a2.addEventListener("click", mild);
q9a3.addEventListener("click", mild_severe);
q9a4.addEventListener("click", severe);
q9a1.addEventListener("click", disableBtn9);
q9a2.addEventListener("click", disableBtn9);
q9a3.addEventListener("click", disableBtn9);
q9a4.addEventListener("click", disableBtn9);


q10a1.addEventListener("click", low);
q10a2.addEventListener("click", mild);
q10a3.addEventListener("click", mild_severe);
q10a4.addEventListener("click", severe);
q10a1.addEventListener("click", disableBtn10);
q10a2.addEventListener("click", disableBtn10);
q10a3.addEventListener("click", disableBtn10);
q10a4.addEventListener("click", disableBtn10);

q11a1.addEventListener("click", low);
q11a2.addEventListener("click", mild);
q11a3.addEventListener("click", mild_severe);
q11a4.addEventListener("click", severe);
q11a1.addEventListener("click", disableBtn11);
q11a2.addEventListener("click", disableBtn11);
q11a3.addEventListener("click", disableBtn11);
q11a4.addEventListener("click", disableBtn11);

q12a1.addEventListener("click", low);
q12a2.addEventListener("click", mild);
q12a3.addEventListener("click", mild_severe);
q12a4.addEventListener("click", severe);
q12a1.addEventListener("click", disableBtn12);
q12a2.addEventListener("click", disableBtn12);
q12a3.addEventListener("click", disableBtn12);
q12a4.addEventListener("click", disableBtn12);
restart.addEventListener("click", refresh);

//#TODO: Define quiz functions here
function disableBtn1() {
    document.getElementById("q1a1").disabled = true;
    document.getElementById("q1a2").disabled = true;
    document.getElementById("q1a3").disabled = true;
    document.getElementById("q1a4").disabled = true;
}
function disableBtn2() {
    document.getElementById("q2a1").disabled = true;
    document.getElementById("q2a2").disabled = true;
    document.getElementById("q2a3").disabled = true;
    document.getElementById("q2a4").disabled = true;
}
function disableBtn3() {
    document.getElementById("q3a1").disabled = true;
    document.getElementById("q3a2").disabled = true;
    document.getElementById("q3a3").disabled = true;
    document.getElementById("q3a4").disabled = true;
}
function disableBtn4() {
    document.getElementById("q4a1").disabled = true;
    document.getElementById("q4a2").disabled = true;
    document.getElementById("q4a3").disabled = true;
    document.getElementById("q4a4").disabled = true;
}
function disableBtn5() {
    document.getElementById("q5a1").disabled = true;
    document.getElementById("q5a2").disabled = true;
    document.getElementById("q5a3").disabled = true;
    document.getElementById("q5a4").disabled = true;
}
function disableBtn6() {
    document.getElementById("q6a1").disabled = true;
    document.getElementById("q6a2").disabled = true;
    document.getElementById("q6a3").disabled = true;
    document.getElementById("q6a4").disabled = true;
}
function disableBtn7() {
  document.getElementById("q7a1").disabled = true;
  document.getElementById("q7a2").disabled = true;
  document.getElementById("q7a3").disabled = true;
  document.getElementById("q7a4").disabled = true;
}
function disableBtn8() {
  document.getElementById("q8a1").disabled = true;
  document.getElementById("q8a2").disabled = true;
  document.getElementById("q8a3").disabled = true;
  document.getElementById("q8a4").disabled = true;
}
function disableBtn9() {
  document.getElementById("q9a1").disabled = true;
  document.getElementById("q9a2").disabled = true;
  document.getElementById("q9a3").disabled = true;
  document.getElementById("q9a4").disabled = true;
}
function disableBtn10() {
  document.getElementById("q10a1").disabled = true;
  document.getElementById("q10a2").disabled = true;
  document.getElementById("q10a3").disabled = true;
  document.getElementById("q10a4").disabled = true;
}
function disableBtn11() {
  document.getElementById("q11a1").disabled = true;
  document.getElementById("q11a2").disabled = true;
  document.getElementById("q11a3").disabled = true;
  document.getElementById("q11a4").disabled = true;
}
function disableBtn12() {
  document.getElementById("q12a1").disabled = true;
  document.getElementById("q12a2").disabled = true;
  document.getElementById("q12a3").disabled = true;
  document.getElementById("q12a4").disabled = true;
}

function low() {
  lowScore += 1;
  questionCount += 1;
  //alert("One point to bad guy!");
  if (questionCount >=11){
    updateResult();
  }
}

function mild() {
  mildScore += 1;
  questionCount += 1;
  //alert("One point to when the party's over!");
  if (questionCount >=11){
    updateResult();
  }
}

function mild_severe() {
  mild_severeScore += 1;
  questionCount += 1;
  //alert("One point to mild_severe");
  if (questionCount >=11){
    updateResult();
  }
}

function severe() {
  severeScore += 1;
  questionCount += 1;
  //alert("One point to severe!");
  if (questionCount >=11){
    updateResult();
  }
}
  
function updateResult() {
  if (lowScore >=3) {
    result.innerHTML = "Your result is... <i>low symptom of poor mental health!</i>";
  }
  else if (mildScore <=5) {
    result.innerHTML = "Your result is... <i>mild symptom of poor mental health!</i>";
  }
  else if (mild_severeScore <=7) {
    result.innerHTML = "Your result is... <i>mild to severe</i>";
  }
  else if (severeScore <=10) {
    result.innerHTML = "Your result is... <i>severe!</i>";
  }  
  else {
    result.innerHTML = "Hmm... try again!";
  }
}

function refresh(){
  result.innerHTML = "Your result is...";
  var questionCount = 0;
  var lowScore = 0;
  var mildScore = 0;
  var mild_severeScore = 0;
  var severeScore = 0;
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;

  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
  
  document.getElementById("q5a1").disabled = false;
  document.getElementById("q5a2").disabled = false;
  document.getElementById("q5a3").disabled = false;
  document.getElementById("q5a4").disabled = false;
  
  document.getElementById("q6a1").disabled = false;
  document.getElementById("q6a2").disabled = false;
  document.getElementById("q6a3").disabled = false;
  document.getElementById("q6a4").disabled = false;

  document.getElementById("q7a1").disabled = false;
  document.getElementById("q7a2").disabled = false;
  document.getElementById("q7a3").disabled = false;
  document.getElementById("q7a4").disabled = false;

  document.getElementById("q8a1").disabled = false;
  document.getElementById("q8a2").disabled = false;
  document.getElementById("q8a3").disabled = false;
  document.getElementById("q8a4").disabled = false;

  document.getElementById("q9a1").disabled = false;
  document.getElementById("q9a2").disabled = false;
  document.getElementById("q9a3").disabled = false;
  document.getElementById("q9a4").disabled = false;

  document.getElementById("q10a1").disabled = false;
  document.getElementById("q10a2").disabled = false;
  document.getElementById("q10a3").disabled = false;
  document.getElementById("q10a4").disabled = false;

  document.getElementById("q11a1").disabled = false;
  document.getElementById("q11a2").disabled = false;
  document.getElementById("q11a3").disabled = false;
  document.getElementById("q11a4").disabled = false;

  document.getElementById("q12a1").disabled = false;
  document.getElementById("q12a2").disabled = false;
  document.getElementById("q12a3").disabled = false;
  document.getElementById("q12a4").disabled = false;

  
}