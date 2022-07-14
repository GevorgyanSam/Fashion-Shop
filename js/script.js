"use strict";

let navTop = document.querySelector(".navTop");
let scollUp = document.querySelector(".scrollUp");
let hurryUpContent = document.querySelector(".hurryUpContent");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navTop.style.height = "0px";
        scollUp.style.opacity = "1";
    }
    else if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        hurryUpContent.style.display = "none";
    }
    else if (document.body.scrollTop < 1 || document.documentElement.scrollTop < 1) {
        navTop.style.height = "30px";
        scollUp.style.opacity = "0";
    }
});

scollUp.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        hurryUpContent.style.display = "block";
    }
});