window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").classList.add("scrolled");
    } else {
        document.getElementById("navbar").classList.remove("scrolled");
    }
};

// AOS
AOS.init({
    duration: 800,
});

/**
 * Scroll top button
 */
let scrollTop = document.querySelector(".scroll-top");

function toggleScrollTop() {
    if (scrollTop) {
        window.scrollY > 100
            ? scrollTop.classList.add("active")
            : scrollTop.classList.remove("active");
    }
}

window.addEventListener("load", toggleScrollTop);
document.addEventListener("scroll", toggleScrollTop);
