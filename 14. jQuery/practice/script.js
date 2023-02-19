$("h1").addClass("fontSize");

// change the header color
function changeHeaderColor(className) {
    $(className).click(function (e) { 
        e.preventDefault();
        if (className === ".a") {
            $("h1").css("color", "rgb(73, 102, 218)");
        } else {
            $("h1").css("color", "rgb(141, 83, 196)");
            // of course i can write addclass and remove
            // this is only for presentation
        }
    });
}
changeHeaderColor(".a");
changeHeaderColor(".b");
$(".c").click(function (e) { 
    e.preventDefault();
    $("h1").text("Hello jQuery!");
    counter = 0;
});

// add hint text
$(".hint").addClass("hint-fontSize");
$(".hint").text("look for more events by searching 'event reference'");


// update the header content by using keyboard
var counter = 0;
$(document).keypress(function (e) { 
    if (counter == 0) {
        $("h1").text(e.key);
    } else {
        $("h1").append(e.key);
    }
    counter++;
});

// add mouse hover
$("h1").on("mouseover", function () { 
    $("h1").css("color", "rgb(229, 92, 120)");
});

// toggle
$(".d").click(function (e) { 
    e.preventDefault();
    // $("h1").toggle();
    // $("h1").fadeToggle();
    $("h1").slideToggle();
});

// animate
$(".e").click(function (e) { 
    $("h1").slideUp().slideDown().animate({
        opacity: 0.5,
        margin: "20% auto"// 上下 左右，这个顺序老是忘记
    }).animate({
        opacity: 1,
        margin: "30px auto"
    });
});