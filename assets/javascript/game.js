$(document).ready(function() {

	var usertotalscore = 0;
	var randomtotalscore;
	var randomcrystalnumber1; 
	var randomcrystalnumber2;
	var randomcrystalnumber3;
	var randomcrystalnumber4;
	var wins = 1;
	var losses = 1;

	function gameoutcome() {
		if (usertotalscore == randomtotalscore) {
			gamewin();

		}
		else if (usertotalscore > randomtotalscore) {
			gamelose();
		}
	}

	function gamewin() {
//random number generated for the 5 variables
//win or losses updated
//total score reset to zero
generaterandomnumber();
generaterandomcrystalsnumber();
usertotalscore = 0;
console.log("User Total Score: " + usertotalscore);
console.log("Wins: " + wins);
$("#wins").html("Wins: " + wins++);
}
function gamelose() {
//random number generated for the 5 variables
//win or losses updated
//total score reset to zero
generaterandomnumber();
generaterandomcrystalsnumber();
usertotalscore = 0;
console.log("User Total Score: " + usertotalscore);
console.log("Losses: " + losses);
$("#losses").html("Losses: " + losses++);
}
//function to generate random total score between 19 to 120
function generaterandomnumber() {
	randomtotalscore = Math.floor((Math.random()*120) + 19);
	console.log("Randome Total Score: " + randomtotalscore);
	$("#randomtotalscore").html("Random Total: " + randomtotalscore);
}
//function to generate random number for each crystal between 1 to 12
function generaterandomcrystalsnumber() {
	randomcrystalnumber1 = Math.floor((Math.random() *12) + 1);
	randomcrystalnumber2 = Math.floor((Math.random() *12) + 1);
	randomcrystalnumber3 = Math.floor((Math.random() *12) + 1);
	randomcrystalnumber4 = Math.floor((Math.random() *12) + 1);
	console.log("Crystal#1: " + randomcrystalnumber1);
	console.log("Crystal#2: " + randomcrystalnumber2);
	console.log("Crystal#3: " + randomcrystalnumber3);
	console.log("Crystal#4: " + randomcrystalnumber4);
}
//call function to assign random number to variables
generaterandomnumber();
generaterandomcrystalsnumber();
//console.log to show computer answers in the function

$("#crystal1").on("click", function() {
//crystal random number will add to user total score
usertotalscore = randomcrystalnumber1 + usertotalscore;
console.log("User Total Score: " + usertotalscore);
gameoutcome();
$("#usertotalscore").html("Total Score: " + usertotalscore);
$("#crystal1").animate({width: '20%'}).animate({width: '15%'});
});

$("#crystal2").on("click", function() {
//crystal random number will add to user total score
usertotalscore = randomcrystalnumber2 + usertotalscore;
console.log("User Total Score: " + usertotalscore);
gameoutcome();
$("#usertotalscore").html("Total Score: " + usertotalscore);
$("#crystal2").animate({width: '20%'}).animate({width: '15%'});
});

$("#crystal3").on("click", function() {
//crystal random number will add to user total score
usertotalscore = randomcrystalnumber3 + usertotalscore;
console.log("User Total Score: " + usertotalscore);
gameoutcome();
$("#usertotalscore").html("Total Score: " + usertotalscore);
$("#crystal3").animate({width: '20%'}).animate({width: '15%'});
});

$("#crystal4").on("click", function() {
//crystal random number will add to user total score
usertotalscore = randomcrystalnumber4 + usertotalscore;
console.log("User Total Score: " + usertotalscore);
gameoutcome();
$("#usertotalscore").html("Total Score: " + usertotalscore);
$("#crystal4").animate({width: '20%'}).animate({width: '15%'});
});

});
