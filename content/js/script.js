let setion = document.querySelector(".container");
let stat = document.querySelectorAll(" .stats .sta");
let start = false;


window.onscroll = () => {
    if(window.scrollY >= setion.offsetTop){
        if(!start) {
            stat.forEach((sta) => startCount(sta));
        }
        start = true
    }
}

function startCount (e) {
    let max = e.dataset.max;
    let count = setInterval( () => {
        e.textContent++;
        if(e.textContent == max){
            clearInterval(count);
        }
    }, 2000 / stat)
}



    var swiper = new Swiper(".mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".fa-chevron-right",
        prevEl: ".fa-chevron-left",
      },
    });
 
