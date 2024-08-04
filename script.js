let label = document.querySelector("#darkmode-toggle");
let img1 = document.querySelector(".main-ball")
let img2 = document.querySelector(".sun-image")
let nav = document.querySelector("nav");
let a = document.querySelectorAll("a");
let body = document.querySelector("body");
let p = document.querySelector("p");


label.addEventListener("click", () => {
    if (body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white";
        nav.style.backgroundColor = "white";
        nav.style.color = "black";
        a.forEach(link => {
            link.style.color = "black";
        });
    } else {
        body.style.backgroundColor = "black";
        nav.style.backgroundColor = "black";
        nav.style.color = "white";
        a.forEach(link => {
            link.style.color = "white";
        });
    }
});
