let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    slides.forEach((slide) => (slide.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
    slideIndex += n - 1;
    if (slideIndex < 0) slideIndex = 0;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}


// Modal and Background Blur
const loginModal = document.getElementById("loginModal");
const loginBtn = document.querySelector('.nav-options a[href="#"]');
const closeBtn = document.querySelector(".close");

// Toggle Buttons
const driverBtn = document.getElementById("driverBtn");
const authorityBtn = document.getElementById("authorityBtn");

// Forms
const driverForm = document.getElementById("driverForm");
const authorityForm = document.getElementById("authorityForm");

// Open Modal
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "flex";
});

// Close Modal
closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

// Close Modal when clicking outside the box
window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// Toggle Between Driver and Authority Forms
driverBtn.addEventListener("click", () => {
    driverBtn.classList.add("active");
    authorityBtn.classList.remove("active");
    driverForm.style.display = "block";
    authorityForm.style.display = "none";
});

authorityBtn.addEventListener("click", () => {
    authorityBtn.classList.add("active");
    driverBtn.classList.remove("active");
    authorityForm.style.display = "block";
    driverForm.style.display = "none";
});

function toggleExpand(boxId) {
    const box = document.getElementById(boxId).parentElement;
    box.classList.toggle("expanded");
}

