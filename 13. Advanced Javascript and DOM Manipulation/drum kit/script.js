var numOfButtons = document.querySelectorAll(".drum").length;
var flash = false;

for (let index = 0; index < numOfButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function(event) {
        //alert("you click on "+document.querySelectorAll(".drum")[index].className);
        if (flash) {
            this.style.color = "rgba(252, 24, 13)";
        } else {
            this.style.color = "";
        }
        let key = this.innerHTML;
        makeSoundByButton(key);
        flash = !flash;
    });
}

document.addEventListener("keypress", function(event) {
    let button = document.getElementsByClassName(event.key);
    if (flash) {
        button[0].style.color = "rgba(252, 24, 13)";
    } else {
        button[0].style.color = "";
    }
    makeSoundByButton(event.key);
    flash = !flash;
});

function makeSoundByButton(key) {
    switch (key) {
        case "q":
            path = "sounds/tom-1.mp3";
            break;
        case "w":
            path = "sounds/tom-2.mp3";
            break;
        case "e":
            path = "sounds/tom-3.mp3";
            break;
        case "r":
            path = "sounds/tom-4.mp3";
            break;
        case "t":
            path = "sounds/snare.mp3";
            break;
        case "y":
            path = "sounds/crash.mp3";
            break;
        case "u":
            path = "sounds/kick-bass.mp3";
            break;
        default:
            break;
    }
    var audio = new Audio(path);
    audio.play();
}