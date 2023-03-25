var str = [];
var currState = "-";
var visibleState = 1;
var visibleInput = 0;
var runClicked = false;

$("button").click(function () {
	if (!runClicked) {
		if (str.length < 9) {
			$("h1").html($("h1").html() + " " + this.innerHTML);
			str.push(this.innerHTML);
		}
	}
});

$(".btn-run").click(function () {
	$(".state-" + 1).removeClass("white-color");
	$(".state-p-" + 1).html("&#x2013;");
	if (!runClicked) {
		runClicked = true;
		for (var i = 0; i < str.length; i++) {
			if (currState === "-" && str[i] === "Switch") {
				currState = "ON";
				visibleState++;
				visibleInput++;
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("ON");
				$(".state-p-" + visibleState).addClass("named-state");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("Switch");
			} else if (currState === "-" && str[i] != "Switch") {
				$(".self-arrow-" + visibleState).removeClass("white-color");
				$(".self-arrow-p-" + visibleState).html(
					$(".self-arrow-p-" + visibleState).html() + str[i]
				);
			} else if (currState === "ON" && str[i] === "Ph") {
				visibleState++;
				visibleInput++;
				currState = "PH";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("PH");
				$(".state-p-" + visibleState).addClass("named-state");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("Ph");
			} else if (currState === "ON" && str[i] === "F") {
				visibleState++;
				visibleInput++;
				currState = "FA";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("FA");
				$(".state-p-" + visibleState).addClass("named-state");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("F");
			} else if (
				currState === "ON" &&
				str[i] != "F" &&
				str[i] != "Switch" &&
				str[i] != "Ph"
			) {
				var visibleSelfArrow = visibleInput + 1;
				$(".self-arrow-" + visibleSelfArrow).removeClass("white-color");
				$(".self-arrow-p-" + visibleSelfArrow).html(
					$(".self-arrow-p-" + visibleSelfArrow).html() + str[i]
				);
			} else if (currState === "PH" && str[i] === "F") {
				visibleState++;
				visibleInput++;
				currState = "FA";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("FA");
				$(".state-p-" + visibleState).addClass("named-state");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("F");
			} else if (currState === "PH" && str[i] != "F" && str[i] != "Switch") {
				var visibleSelfArrow = visibleInput + 1;
				$(".self-arrow-" + visibleSelfArrow).removeClass("white-color");
				$(".self-arrow-p-" + visibleSelfArrow).html(
					$(".self-arrow-p-" + visibleSelfArrow).html() + str[i]
				);
			} else if (
				currState === "FA" &&
				(str[i] === "C" || str[i] === "G" || str[i] === "Mw")
			) {
				visibleState++;
				visibleInput++;
				currState = "MA";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("MA");
				$(".state-p-" + visibleState).addClass("named-state");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html(str[i]);
			} else if (
				currState === "FA" &&
				str[i] != "C" &&
				str[i] != "Switch" &&
				str[i] != "Mw" &&
				str[i] != "G"
			) {
				var visibleSelfArrow = visibleInput + 1;
				$(".self-arrow-" + visibleSelfArrow).removeClass("white-color");
				$(".self-arrow-p-" + visibleSelfArrow).html(
					$(".self-arrow-p-" + visibleSelfArrow).html() + str[i]
				);
			} else if (currState === "MA" && str[i] === "Tmp") {
				visibleState++;
				visibleInput++;
				currState = "TP";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("TP");
				$(".state-p-" + visibleState).addClass("named-state");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("Tmp");
			} else if (currState === "MA" && str[i] != "Tmp" && str[i] != "Switch") {
				var visibleSelfArrow = visibleInput + 1;
				$(".self-arrow-" + visibleSelfArrow).removeClass("white-color");
				$(".self-arrow-p-" + visibleSelfArrow).html(
					$(".self-arrow-p-" + visibleSelfArrow).html() + str[i]
				);
			} else if (currState === "TP" && str[i] === "Tmr") {
				visibleState++;
				visibleInput++;
				currState = "TS";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("TS");
				$(".state-p-" + visibleState).addClass("named-state");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("Tmr");
			} else if (currState === "TP" && str[i] != "Tmr" && str[i] != "Switch") {
				var visibleSelfArrow = visibleInput + 1;
				$(".self-arrow-" + visibleSelfArrow).removeClass("white-color");
				$(".self-arrow-p-" + visibleSelfArrow).html(
					$(".self-arrow-p-" + visibleSelfArrow).html() + str[i]
				);
			} else if (currState === "TS" && str[i] === "St") {
				visibleState++;
				visibleInput++;
				currState = "+";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("&#43;");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("St");
			} else if (currState === "TS" && str[i] != "St" && str[i] != "Switch") {
				var visibleSelfArrow = visibleInput + 1;
				$(".self-arrow-" + visibleSelfArrow).removeClass("white-color");
				$(".self-arrow-p-" + visibleSelfArrow).html(
					$(".self-arrow-p-" + visibleSelfArrow).html() + str[i]
				);
			} else if (str[i] === "Switch") {
				visibleState++;
				visibleInput++;
				currState = "-";
				$(".state-" + visibleState).removeClass("white-color");
				$(".state-p-" + visibleState).html("&#x2013;");
				$(".arrow-" + visibleInput).removeClass("white-color");
				$(".input-" + visibleInput).html("Switch");
			} else if (currState === "+" && str[i] != "Switch") {
				var visibleSelfArrow = visibleInput + 1;
				$(".self-arrow-" + visibleSelfArrow).removeClass("white-color");
				$(".self-arrow-p-" + visibleSelfArrow).html(
					$(".self-arrow-p-" + visibleSelfArrow).html() + str[i]
				);
			}
		}
	}
});

$(".btn-clear").click(function () {
	str = [];
	$("h1").html("String : ");
	currState = "-";
	visibleState = 1;
	visibleInput = 0;
	runClicked = false;
	$(".state").addClass("white-color");
	$(".self-arrow").addClass("white-color");
	$(".arrow").addClass("white-color");
	$(".self-arrow-p").html("");
	$(".input").html("");
});

$(".btn-clearone").click(function() {
	$("h1").html( $("h1").html().substring(0, $("h1").html().length - 1 - str[str.length - 1].length));
	str.pop();
})

setInterval(function() {
	if(currState === "+")
		$(".foodstate").html("Food Prepared");
	else 
	$(".foodstate").html("Food Not Prepared");
}, 1000);


