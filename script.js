// ===============================
// MCELL - script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // HEADER AO ROLAR
    // ===============================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "#08131f";
            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

        } else {

            header.style.background = "#08131f";
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

        }

    });

    // ===============================
    // MENU ATIVO
    // ===============================

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // ===============================
    // ANIMAÇÃO DOS CARDS
    // ===============================

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: .2

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = ".6s ease";

        observer.observe(card);

    });

    // ===============================
    // EFEITO BOTÕES
    // ===============================

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-4px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0)";

        });

    });

    // ===============================
    // SLIDER HERO
    // ===============================

    const slides = document.querySelectorAll(".slide");

    let slideAtual = 0;

    function mostrarSlide(indice){

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        slides[indice].classList.add("active");

    }

    function proximoSlide(){

        slideAtual++;

        if(slideAtual >= slides.length){

            slideAtual = 0;

        }

        mostrarSlide(slideAtual);

    }

    if(slides.length > 0){

        mostrarSlide(0);

        setInterval(proximoSlide,5000);

    }

});