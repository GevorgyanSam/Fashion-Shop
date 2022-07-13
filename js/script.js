"use strict";

let navTop = document.querySelector(".navTop");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navTop.style.height = "0px";
    }
    else if (document.body.scrollTop < 1 || document.documentElement.scrollTop < 1) {
        navTop.style.height = "30px";
    }
});