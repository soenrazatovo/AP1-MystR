let path = window.location.pathname;
let page = path.split("/").pop();

if (page === "index.html"){
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
}

if (page === "boutique.html"){
    const searchbar = document.querySelector("#searchbar input");
    const names = document.querySelectorAll(".article h2:nth-child(2)");
    console.log(names);
    searchbar.addEventListener("input", () => {
        for(let i=0; i<names.length; i++){
            // console.log(names[i].innerHTML);
            if (names[i].innerHTML.toLowerCase().includes(searchbar.value.toLowerCase())){
                names[i].parentElement.style.display = "flex";
            }else{
                names[i].parentElement.style.display = "none";
            }
        }
    });
}