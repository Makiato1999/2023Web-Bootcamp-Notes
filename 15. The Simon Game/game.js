var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];
var ifStarted = false;

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour);

    // flash the relevent color button
    let className = "#"+randomChosenColour;
    console.log(className);
    $(className).animate({
        opacity: 0,
    }, 500).animate({
        opacity: 1
    }, 500);

    playSound(randomChosenColour);
}

$(".btn").click(function (e) { 
    let clickedElement = e.target;// which includes class, id, etc.
    let userChosenColour = clickedElement.id;
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
});

// play sounds
function playSound(name) {
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}

$(document).keypress(function() {
    if (!ifStarted) {
        ifStarted = true;
        nextSequence();
    }
});