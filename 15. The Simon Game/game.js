var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var ifStarted = false;
var level = 0;

// game start and continue 
$(document).keypress(function() {
    // triggle when it is first time 
    if (!ifStarted) {
        ifStarted = true;
        nextSequence();
    }
});

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);
    // flash the relevent color button
    let id = "#"+randomChosenColour;
    $(id).animate({
        opacity: 0,
    }, 500).animate({
        opacity: 1
    }, 500);
    // play sounds
    playSound(randomChosenColour);
    // update level
    level++;
    $("h1").text("Level "+ level);
}

$(".btn").click(function (e) { 
    if (ifStarted) {
        let clickedElement = e.target;// which includes class, id, etc.
        let userChosenColour = clickedElement.id;
        userClickedPattern.push(userChosenColour);
        // flash the relevent color button
        animatePress(userChosenColour);
        // play sounds
        playSound(userChosenColour);

        checkAnswer(level);
    }
});

// play sounds
function playSound(name) {
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}
// press button animate
function animatePress(currentColour) {
    let id = "#"+currentColour;
    $(id).addClass("pressed");
    setTimeout(() => {
        $(id).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    //debugger;
    let usrSize = userClickedPattern.length;
    console.log("userClickedPattern: "+userClickedPattern);
    console.log("gamePattern: "+gamePattern);

    if (userClickedPattern[usrSize-1] === gamePattern[usrSize-1]) {
        console.log("success");
        if (usrSize == currentLevel) {
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
            $("h1").text("Game Over, Press Any Key to Restart");
            startOver();
        }, 200);
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    ifStarted = false;
}