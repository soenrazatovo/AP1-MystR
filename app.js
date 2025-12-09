const smoke = document.querySelector("main section:nth-child(1) img:nth-child(2)");
let degree = 0;

function rotate(){
    step = 0.1;
    degree += step;
    if (degree > 360) {
        degree -= 360;
    }
    smoke.style.transform = 'rotate(-' + degree + 'deg)';
    setTimeout(rotate, 20);   
}

rotate();

const left_arrow = document.getElementById("left-arrow");
const right_arrow = document.getElementById("right-arrow");
const carousel = document.getElementsByClassName("carousel")[0];

function scrollLeft(){
    carousel.scrollBy({top:0, left:-300, behavior:'smooth'});
}

function scrollRight(){
    carousel.scrollBy({top:0, left:300, behavior:'smooth'});
}

left_arrow.addEventListener("click", scrollLeft);
right_arrow.addEventListener("click", scrollRight);