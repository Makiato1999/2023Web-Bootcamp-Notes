var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var ifStarted = false;
var level = 0;

$(document).keypress(function() {
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
    playSound(randomChosenColour);
}

$(".btn").click(function (e) { 
    let clickedElement = e.target;// which includes class, id, etc.
    let userChosenColour = clickedElement.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);
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
