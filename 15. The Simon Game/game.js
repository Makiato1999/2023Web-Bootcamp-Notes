var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
gamePattern.push(randomChosenColour);
gamePattern.push(randomChosenColour);
gamePattern.push(randomChosenColour);

// flash the relevent color button
for (let i = 0; i < gamePattern.length; i++) {
    let className = "."+gamePattern[i];
    $(className).animate({
        opacity: 0,
    }, 10).animate({
        opacity: 1
    });
}

// play sounds
$(".btn").click(function (e) { 
    e.preventDefault();
    let clickedElement = e.target;// which includes class, id, etc.
    let userChosenColour = clickedElement.id;
    var audio = new Audio('sounds/'+userChosenColour+'.mp3');
    audio.play();
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});
/*
function handle(color) {
    $("."+color).click(function (e) { 
        e.preventDefault();
        var audio = new Audio('sounds/'+color+'.mp3');
        audio.play();
    });
}
handle("red");
handle("green");
handle("blue");
handle("yellow");
*/
