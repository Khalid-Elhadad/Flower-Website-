let navbar = document.querySelector(".nav-bar");
let navbaricon = document.querySelectorAll(".nav-bar a");
let barsIcon = document.querySelector("#bars");

barsIcon.onclick=()=>{
    barsIcon.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}
window.onscroll=()=>{
    barsIcon.classList.remove("fa-times")
    navbar.classList.remove("active")
}

