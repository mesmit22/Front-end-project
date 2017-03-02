var $img = $("<img>");
var i = 0;
$img.attr({
    src: "img/badges/badges_JavaScript_AJAXBasics_Stage1.png",
    alt: "AJAX Basics Stage 1"
});

$(function(){
    console.log("ready");
    do{
        $("#slider").append($img);
        $("#slider").append($img);
        $("#slider").append($img);
        $("#slider").append($img);
        $("#slider").append($img);
        $("#slider").slideToggle("slow", function(){
            console.log("Slider: " + i + " completed");
        });
        i++;
    }while(i < 100);
});