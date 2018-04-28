const threat = new Audio();
threat.src = "audio/threat.wav";

let linksL = document.querySelectorAll(".linksL");
for (var x = 0; x < linksL.length; x++) {
	linksL[x].addEventListener("click", function() {
    	threat.play();
  	});
}

const cometo = new Audio();
cometo.src = "audio/cometo.wav";

let linksR = document.querySelectorAll(".linksR");
for (var x = 0; x < linksR.length; x++) {
	linksR[x].addEventListener("click", function() {
    	cometo.play();
  	});
}
                                                                      /*TUKA*/
(function($) {
    $("#cornholio").hide();
    $(".hiddenVideo").hide();
    $("#upContainer").hide();
    $("#santaButthead").hide();
})($);

$("#topLink").click(function () {
    $("#main1").fadeIn(300);
    $("#cornholio").hide();
    $("#santaButthead").hide();
});

$(".linkL1").click(function () {
    $("#cornholio").fadeIn(300);
    $("#main1").hide();
    $("#santaButthead").hide();
});

$(".linkR1").click(function () {
    $("#santaButthead").fadeIn(300);
    $("#cornholio").hide();
    $("#main1").hide();
});

function removeImg () {
    let img = document.querySelector("#hiddenVideoImg");
        if (img !== null) {
            setInterval(function(){img.remove()}, 300);
        }
}

let iframe = document.querySelector("hiddenVideo");
    $(".carouselPreviewImg1").click(function () {
        $(".hiddenVideo").fadeIn(80);
        document.querySelector(".hiddenVideo").src="https://www.youtube.com/embed/4n6D8lB0A9w?rel=0";
        removeImg();
});

$(".carouselPreviewImg2").click(function () {
  	$(".hiddenVideo").fadeIn(150);
  	document.querySelector(".hiddenVideo").src="";
    removeImg();
});

$(".carouselPreviewImg3").click(function () {
    $(".hiddenVideo").fadeIn(150);
    document.querySelector(".hiddenVideo").src="https://www.youtube-nocookie.com/embed/OdaOaq2TIjg?rel=0";
    removeImg();
});

$(".carouselPreviewImg4").click(function () {
    $(".hiddenVideo").fadeIn(150);
    document.querySelector(".hiddenVideo").src="https://www.youtube-nocookie.com/embed/hymtLFqNAoY?rel=0";
    removeImg();
});

$(".carouselPreviewImg5").click(function () {
    $(".hiddenVideo").fadeIn(150);
    document.querySelector(".hiddenVideo").src="https://www.youtube-nocookie.com/embed/lBF9sp6-hh4?rel=0";
    removeImg();
});

$(".carouselPreviewImg6").click(function () {
    $(".hiddenVideo").fadeIn(150);
    document.querySelector(".hiddenVideo").src="https://www.youtube-nocookie.com/embed/1SQk52MHsYE?rel=0";
    removeImg();
});

$(".carouselPreviewImg7").click(function () {
    $(".hiddenVideo").fadeIn(150);
    document.querySelector(".hiddenVideo").src="https://www.youtube-nocookie.com/embed/L69ZEfbcYXw?rel=0";
    removeImg();
});

$(".carouselPreviewImg8").click(function () {
    $(".hiddenVideo").fadeIn(150);
    document.querySelector(".hiddenVideo").src="https://www.youtube-nocookie.com/embed/QDyb4tjZ91I?rel=0";
    removeImg();
});

$('#upLink').click(function(){
    $('#sectDimm').animate({scrollTop:0}, 500, 'swing');
});

$("#upLink").mouseenter(function(){
    $("#upLink").animate({bottom: '8px'}, 130);
    $("#upLink").animate({bottom: '0px'}, 130);
    $("#upLink").animate({bottom: '8px'}, 130);
    $("#upLink").animate({bottom: '0px'}, 130);
});

$(".carouselScrollButtonL").click(function (){
    console.log(document.querySelector("#carouselRow2Container").style.width);
    if (document.querySelector("#carouselRow2Container").style.width == "255px") {
        $("#carouselRow2Container").animate({scrollLeft: "-=250px"}, 500);
        checkPreviewPosition();
    }
    else {
        $("#carouselRow2Container").animate({scrollLeft: "-=373px"}, 500);
        checkPreviewPosition();
    }
});
$(".carouselScrollButtonR").click(function (){
    if ($("#carouselRow2Container").width == "255px") {
        $("#carouselRow2Container").animate({scrollLeft: "+=250px"}, 500);
        checkPreviewPosition();
    }
    else {
        $("#carouselRow2Container").animate({scrollLeft: "+=373px"}, 500);
        checkPreviewPosition();
    }
});

function checkPreviewPosition () {
    let scroll = document.querySelector("#carouselRow2Container");
    let position1 = [document.querySelector(".previewPositionShadow1") ,document.querySelector(".positionNumber1")];
    let position2 = [document.querySelector(".previewPositionShadow2") ,document.querySelector(".positionNumber2")];
    setTimeout(function() {
            if (scroll.scrollLeft > 160) {
                position2[0].style.boxShadow = "0 0 15px 1px rgba(255,255,255,.8)";
                position2[1].style.boxShadow = "inset 0 0 5px 1px rgba(255,255,255,.8)";
                removePositionShadow(position1[0] ,position1[1]);
            }
            else {
                position1[0].style.boxShadow = "0 0 15px 2px rgba(255,255,255,.8)";
                position1[1].style.boxShadow = "inset 0 0 5px 1px rgba(255,255,255,.8)";
                removePositionShadow(position2[0] ,position2[1]);
            }
    }, 300);
};
checkPreviewPosition();

function removePositionShadow (pos1 ,pos2 ,pos3) {
    pos1.style.boxShadow = "0 0 0 0 black";
    pos2.style.boxShadow = "0 0 0 0 black";
}

$("#sectDimm").scroll(function() {
    if ($("#sectDimm").scrollTop() > 150) {
        $("#upContainer").fadeIn(280);
    }
    else {
        $("#upContainer").fadeOut(280);
    }
});
                                                                                        /*CORNHOLIO*/