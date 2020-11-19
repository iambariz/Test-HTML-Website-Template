const menuBarOpen = document.querySelector(".fa-bars");
const menuBar = document.querySelector(".nav-list");
const menuBarClose = document.querySelector(".fa-times");
function toggler(){
        menuBar.classList.toggle('open');
        menuBarClose.classList.toggle('open');
}

menuBarOpen.addEventListener("click", toggler);
menuBarClose.addEventListener("click", toggler);
