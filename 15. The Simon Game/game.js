var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber]
    // playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
}

nextSequence();
nextSequence();
nextSequence();
nextSequence();

console.log(gamePattern);
/*
var ifLocked = true;
// flash the relevent color button
for (let i = 0; i < gamePattern.length; i++) {
    let className = "."+gamePattern[i];
    if (ifLocked) {
        ifLocked = false;
        console.log(className);
        $(className).animate({
            opacity: 0,
        }, 500).animate({
            opacity: 1
        }, 500);
        setTimeout(() => {
            ifLocked = true;
        }, 1000);
    }
}*/
var ifLocked = true;
let counter = 0;
while (counter < gamePattern.length) {
    console.log(counter);
    let className = "."+gamePattern[counter];
    if (ifLocked) {
        ifLocked = false;
        console.log(className);
        $(className).animate({
            opacity: 0,
        }, 500).animate({
            opacity: 1
        }, 500);
        setTimeout(() => {
            counter ++;
            ifLocked = true;
        }, 1000);
    }
}

// play sounds
$(".btn").click(function (e) { 
    let clickedElement = e.target;// which includes class, id, etc.
    let userChosenColour = clickedElement.id;
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
});

function playSound(name) {
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
}
