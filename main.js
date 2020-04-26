
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;

	var correct = 0;


	if (question1 == "Python") {
		correct++;
	}
	if (question2 == "Javascript") {
		correct++;
	}
	if (question3 == "LineBreak") {
		correct++;
	}
	if (question4 == "World") {
		correct++;
	}
	if (question5 == "CD") {
		correct++;
	}
	if (question6 == "Secure") {
		correct++;
	}
	if (question7 == "Correct") {
		correct++;
	}
	if (question8 == "Correct") {
		correct++;
	}
	if (question9 == "Correct") {
		correct++;
	}
	if (question10 == "Correct") {
		correct++;
	}
	var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Nice. You really got this down.", "Not bad, You at least passed", "Might What to brush up a bit"];
	var score;

	if (correct <= 5) {
		score = 2;
	}

	if (correct > 5 && correct < 9) {
		score = 1;
	}

	if (correct == 9 || correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
