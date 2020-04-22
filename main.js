
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
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
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct <= 5) {
		score = 2;
	}

	if (correct > 5 && correct < 9) {
		score = 1;
	}

	if (correct == 10) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
