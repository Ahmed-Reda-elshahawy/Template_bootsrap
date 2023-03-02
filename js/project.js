// change active from catigoty to anthor
let catigories = document.querySelectorAll(".catigory li");

catigories.forEach((catigory) => {
    catigory.addEventListener("click", (e) => {
        catigories.forEach((ele) => {
            ele.classList.remove("active");
            ele.classList.remove("rounded-pill");
        });
        e.target.classList.add("active");
        e.target.classList.add("rounded-pill");
    });
});

// scroll into section
let links = document.querySelectorAll(".navbar-nav li a");

function moveToSection(links) {
    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: "smooth" });
        });
    });
}
moveToSection(links);