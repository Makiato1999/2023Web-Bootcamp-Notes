var numOfButtons = document.querySelectorAll(".drum").length;

for (let index = 0; index < numOfButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        //alert("you click on "+document.querySelectorAll(".drum")[index].className);
        this.style.color = "rgba(252, 24, 13)";
        switch (index) {
            case 0:
                path = "sounds/tom-1.mp3";
                break;
            case 1:
                path = "sounds/tom-2.mp3";
                break;
            case 2:
                path = "sounds/tom-3.mp3";
                break;
            case 3:
                path = "sounds/tom-4.mp3";
                break;
            case 4:
                path = "sounds/snare.mp3";
                break;
            case 5:
                path = "sounds/crash.mp3";
                break;
            case 6:
                path = "sounds/kick-bass.mp3";
                break;
            default:
                break;
        }
        var audio = new Audio(path);
        audio.play();
    });
}