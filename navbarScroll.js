  
const header = document.querySelector(".header");

const home = document.querySelector("#hero");
const offers = document.querySelector("#offers");
const planner = document.querySelector("#planner");
const contact = document.querySelector("#contact");

const homeButton = document.querySelector(".nav-home");
const offersButton = document.querySelector(".nav-offers");
const plannerButton = document.querySelector(".nav-planner");
const contactButton = document.querySelector(".nav-contact");

function setAndRemove(toAdd, toRemoveOne, toRemoveTwo, toRemoveThree) {
    toAdd.classList.add("active");
    toRemoveOne.classList.remove("active");
    toRemoveTwo.classList.remove("active");
    toRemoveThree.classList.remove("active");
}

window.addEventListener("scroll", ()=>{
    let windowVar = window.pageYOffset;
    if(offers.offsetTop <= windowVar && planner.offsetTop > windowVar){
        setAndRemove(offersButton, homeButton, plannerButton, contactButton)
    }
    else if(planner.offsetTop <= windowVar && contact.offsetTop > windowVar){
        setAndRemove(plannerButton, homeButton, offersButton, contactButton)
    }
    else if(offers.offsetTop <= windowVar ){
        setAndRemove(contactButton, homeButton, plannerButton, offersButton)
    }
    else{
        setAndRemove(homeButton, offersButton, plannerButton, contactButton)
    }
});

window.addEventListener("scroll", ()=>{
    let windowVar = window.pageYOffset;
    if(offers.offsetTop -250 <= windowVar){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});