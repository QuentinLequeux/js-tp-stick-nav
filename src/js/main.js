document.documentElement.classList.add("js-enabled");
const main = document.getElementById("main");
const positionTop = main.offsetTop;
window.addEventListener("scroll", () => {
    if (scrollY >= positionTop){
        document.body.classList.add("fixed-nav");
    } else {
        document.body.classList.remove("fixed-nav");
    }
})

//console.log(positionTop); 297