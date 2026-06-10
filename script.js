// ===============================
// STUDENTHUB SCRIPT.JS
// ===============================

// DARK MODE TOGGLE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeToggle.textContent = "☀️";
    }else{
        themeToggle.textContent = "🌙";
    }

});

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if(counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                parseInt(counter.getAttribute("data-target"));

            let current = 0;

            const increment =
                target / 100;

            const updateCounter = () => {

                if(current < target){

                    current += increment;

                    counter.innerText =
                        Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                }else{

                    if(target === 100){

                        counter.innerText = "100%";

                    }else if(target === 24){

                        counter.innerText = "24+";

                    }else{

                        counter.innerText =
                            target + "+";

                    }

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


// ===============================
// SMOOTH NAVBAR SHADOW
// ===============================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.boxShadow =
            "0 12px 40px rgba(0,0,0,0.15)";

    }else{

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.08)";

    }

});


// ===============================
// ACTIVE NAV LINK HIGHLIGHT
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if(window.scrollY >= sectionTop){

            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            .includes(current)
        ){

            link.classList.add("active-link");
        }

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons =
    document.querySelectorAll(
        ".primary-btn, .nav-btn"
    );

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1)";

    });

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
    "%c🎓 StudentHub Loaded Successfully!",
    "color:#4f46e5; font-size:16px; font-weight:bold;"
);