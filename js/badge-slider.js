var $slider = $("#slider");
var counter = 0;
var startRemove = false;
window.onload = function start(){
    // debugger;
    addBadge();
};

var badgesURL = [
    {
        SRC: "img/badges/badges_JavaScript_AJAXBasics_Stage1.png",
        ALT: "AJAX Basics Badge"
    },
    {
        SRC: "img/badges/badges_JavaScript_AJAXBasics_Stage2.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges_JavaScript_AJAXBasics_Stage3.png",
        ALT: "AJAX Basics Badge"
    },
    {
        SRC: "img/badges/badges_JavaScript_AJAXBasics_Stage4.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges_javaScript_oojs_Stage1.png",
        ALT: "AJAX Basics Badge"
    },
    {
        SRC: "img/badges/badges_javaScript_oojs_Stage2.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges_javaScript_oojs_Stage3.png",
        ALT: "OOJS"
    },
    {
        SRC: "img/badges/badges_javaScript_oojs_Stage4.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges-CSS-ResponsiveLayouts-stage1.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges-CSS-ResponsiveLayouts-stage2.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges-CSS-ResponsiveLayouts-stage3.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges-html-videoaudio-stage1.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges-html-videoaudio-stage2.png",
        ALT: "AJAX Badge Badge"
    },
    {
        SRC: "img/badges/badges-html-videoaudio-stage3.png",
        ALT: "AJAX Badge Badge"
    },
];

function addBadge(){
    window.setInterval(function(){
        var $badgeIMG = $("<img>");
        $badgeIMG.attr("src", badgesURL[counter].SRC);
        $badgeIMG.attr("alt", badgesURL[counter].ALT);
        $slider.prepend($badgeIMG);
        console.log(badgesURL[counter].ALT + ", " + counter);
        counter = (counter + 1) % badgesURL.length;

        if(startRemove){
            $slider.find("img").last().remove();
        }
        if(counter == 5){
            startRemove = true;
        }
    }, 1500)
}