
//////////////////////////////////////start 3d////////////////////////////////////////////////////////

let media = document.querySelector(".video-media")
let container = document.querySelector(".video-holder")
let videotitle = document.querySelector(".video-title")
let btn = document.querySelector(".video-button")
var elem = document.getElementById("myVideo");


container.addEventListener("mousemove", (e) => {
    let xAxis = (media.offsetWidth  - e.pageX   ) / -15;
    let yAxis = (media.offsetHeight - e.pageY) / 20;
    media.style.transform = `rotateY(${xAxis }deg) rotateX(${yAxis }deg)`;


});


container.addEventListener("mouseenter", (e) => {
    media.style.transition = "none";

    videotitle.style.transform = "translateZ(320px)";
});

container.addEventListener("mouseleave", (e) => {
    media.style.transition = "all 0.9s ease";
    media.style.transform = `rotateY(0deg) rotateX(0deg)`;
    videotitle.style.transform = "translateZ(320px)";
});

var cursor1 = document.querySelector('.cursor1');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e) {
    cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX +
        "px; top: " + e.clientY + "px;";
});


let mouseCursor = document.querySelector(".video-button");
let imagesHover = document.querySelectorAll(".about-images");
let textHover = document.querySelector(".about-info-p");
let homeImageHover = document.querySelector(".img-home");
let navLinks = document.querySelectorAll(".navbar-nav li");
let titleText = document.querySelector(".video-title");
let showreel = document.querySelector('#showreel');

showreel.addEventListener('mousemove', function(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";

    cursor1.classList.add('hidden-cursour');
    cursor2.classList.add('hidden-cursour');

})

showreel.addEventListener('mouseleave', function(e) {

    // cursor1.classList.remove('hidden');
    // cursor2.classList.remove('hidden');

})


document.addEventListener('keydown', function(e) {

    if (e.key === "Escape") {
        openFullscreen();
        
        // document.querySelector('.border-layer').classList.remove('movies-layer-hidden');
       

    }
})


// document.addEventListener("backbutton", function() {
//     document.exitFullscreen();
// });



//mouse move detector


//video resize
// let touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
elem.muted = true;
// container.addEventListener(touchEvent, openFullscreen);
// media.addEventListener(touchEvent, openFullscreen);
// media.addEventListener("touchstart", openFullscreen);




function openFullscreen() {
    elem.currentTime = 0;
    elem.muted = false;
    titleText.classList.toggle("hidden")
    container.classList.toggle("widthfull")
    media.classList.toggle("widthfull");
    // media.style.
    media.classList.toggle('video-media-widthfull')


    if (container.classList.contains('widthfull')) {
        container.requestFullscreen();
        // document.querySelector('.border-layer').classList.add('movies-layer-hidden')


    } else {
        document.exitFullscreen();
        // document.querySelector('.border-layer').classList.remove('movies-layer-hidden')
    }


    //cursor pointer
    if (mouseCursor.innerHTML == "press") {
        mouseCursor.innerHTML = "close";
        


        container.addEventListener("mousemove", (e) => {
            media.style.transform = `rotateY(0deg) rotateX(0deg)`;


        });

    } else {
        mouseCursor.innerHTML = "press";
        elem.currentTime = 2;
        container.addEventListener("mousemove", (e) => {
            let xAxis = (media.offsetWidth  - e.pageX   ) / -15;
            let yAxis = (media.offsetHeight - e.pageY) / 20;
            media.style.transform = `rotateY(${xAxis }deg) rotateX(${yAxis }deg)`;


        });
      
        elem.muted = true;
    }
}








var elem2 = document.getElementById("myvideo2");

function openFullscreenMobile() {

    $("#myvideo2").click(function() {
        screenfull.request();
    });
}




// exports.printMsg = function() {
//     console.log("This is a message from the demo package");
//   }










