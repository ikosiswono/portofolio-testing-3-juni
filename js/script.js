/*=====================================================
  IKO SISWONO PORTFOLIO
  Modern Portfolio 2026
=====================================================*/

"use strict";

/*=====================================================
    DOM READY
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initAOS();

    loadingScreen();

    smoothScroll();

    navbarScroll();

    activeNavigation();

    scrollProgress();

});

/*=====================================================
    AOS INITIALIZATION
=====================================================*/

function initAOS(){

    AOS.init({

        duration:1000,

        once:true,

        easing:"ease-in-out",

        offset:80

    });

}

/*=====================================================
    LOADING SCREEN
=====================================================*/

function loadingScreen(){

    const loader=document.getElementById("loader");

    if(!loader) return;

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            loader.classList.add("hide");

            document.body.classList.add("loaded");

        },1200);

    });

}

/*=====================================================
    SMOOTH SCROLL
=====================================================*/

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(link=>{

        link.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}

/*=====================================================
    NAVBAR SCROLL
=====================================================*/

function navbarScroll(){

    const header=document.getElementById("header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            header.classList.add("active");

        }else{

            header.classList.remove("active");

        }

    });

}

/*=====================================================
    ACTIVE NAVIGATION
=====================================================*/

function activeNavigation(){

    const sections=document.querySelectorAll("section[id]");

    const navLinks=document.querySelectorAll(".nav-menu a");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-150;

            const height=section.offsetHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")==="#"+current){

                link.classList.add("active");

            }

        });

    });

}

/*=====================================================
    SCROLL PROGRESS BAR
=====================================================*/

function scrollProgress(){

    const progress=document.getElementById("scroll-progress");

    if(!progress) return;

    window.addEventListener("scroll",()=>{

        const total=document.documentElement.scrollHeight-window.innerHeight;

        const current=window.scrollY;

        const percent=(current/total)*100;

        progress.style.width=percent+"%";

    });

}

Bagian2/8

/*=====================================================
    MOBILE HAMBURGER MENU
=====================================================*/

function mobileMenu(){

    const hamburger=document.querySelector(".hamburger");
    const navMenu=document.querySelector(".nav-menu");

    if(!hamburger || !navMenu) return;

    hamburger.addEventListener("click",()=>{

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");

    });

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            document.body.classList.remove("menu-open");

        });

    });

}

/*=====================================================
    DARK MODE
=====================================================*/

function darkMode(){

    const button=document.getElementById("darkMode");

    if(!button) return;

    const body=document.body;

    const icon=button.querySelector("i");

    const savedTheme=localStorage.getItem("theme");

    if(savedTheme==="dark"){

        body.classList.add("dark-mode");

        if(icon){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

        }

    }

    button.addEventListener("click",()=>{

        body.classList.toggle("dark-mode");

        const dark=body.classList.contains("dark-mode");

        localStorage.setItem("theme",dark?"dark":"light");

        if(icon){

            icon.className=dark
            ?"fa-solid fa-sun"
            :"fa-solid fa-moon";

        }

    });

}

/*=====================================================
    BACK TO TOP
=====================================================*/

function backToTop(){

    let button=document.getElementById("backToTop");

    if(!button){

        button=document.createElement("button");

        button.id="backToTop";

        button.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

        document.body.appendChild(button);

    }

    window.addEventListener("scroll",()=>{

        if(window.scrollY>500){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    });

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*=====================================================
    CUSTOM CURSOR
=====================================================*/

function customCursor(){

    const cursor=document.querySelector(".cursor");

    if(!cursor) return;

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left=e.clientX+"px";
        cursor.style.top=e.clientY+"px";

    });

    document.querySelectorAll(

        "a,button,.btn-primary,.btn-secondary,.info-card,.skill-category,.experience-card,.timeline-content"

    ).forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            cursor.classList.add("hover");

        });

        item.addEventListener("mouseleave",()=>{

            cursor.classList.remove("hover");

        });

    });

}

/*=====================================================
    MOUSE GLOW EFFECT
=====================================================*/

function mouseGlow(){

    const glow=document.createElement("div");

    glow.className="mouse-glow";

    document.body.appendChild(glow);

    document.addEventListener("mousemove",(e)=>{

        glow.style.left=e.clientX+"px";
        glow.style.top=e.clientY+"px";

    });

}

/*=====================================================
    RIPPLE EFFECT
=====================================================*/

function rippleEffect(){

    document.querySelectorAll(

        ".btn-primary,.btn-secondary"

    ).forEach(button=>{

        button.addEventListener("click",function(e){

            const circle=document.createElement("span");

            const diameter=Math.max(

                this.clientWidth,

                this.clientHeight

            );

            circle.style.width=diameter+"px";
            circle.style.height=diameter+"px";

            circle.className="ripple";

            const rect=this.getBoundingClientRect();

            circle.style.left=

            e.clientX-rect.left-diameter/2+"px";

            circle.style.top=

            e.clientY-rect.top-diameter/2+"px";

            const ripple=this.querySelector(".ripple");

            if(ripple){

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

}

/*=====================================================
    MICRO INTERACTION
=====================================================*/

function microInteraction(){

    document.querySelectorAll(

        ".info-card,.skill-category,.experience-card,.timeline-content"

    ).forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.setProperty("--x",x+"px");
            card.style.setProperty("--y",y+"px");

        });

    });

}

/*=====================================================
    INITIALIZE PART 2
=====================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    mobileMenu();

    darkMode();

    backToTop();

    customCursor();

    mouseGlow();

    rippleEffect();

    microInteraction();

});

/*=====================================================
    HERO TYPING EFFECT
=====================================================*/

function typingEffect(){

    const typing=document.getElementById("typing-text");

    if(!typing) return;

    const words=[

        "School Administration",

        "Web Development",

        "Graphic Design",

        "Photography",

        "Videography",

        "IT Support",

        "Digital Documentation"

    ];

    let wordIndex=0;
    let charIndex=0;
    let deleting=false;

    function type(){

        const current=words[wordIndex];

        if(!deleting){

            typing.textContent=current.substring(0,charIndex++);

            if(charIndex>current.length){

                deleting=true;

                setTimeout(type,1800);

                return;

            }

        }else{

            typing.textContent=current.substring(0,charIndex--);

            if(charIndex<0){

                deleting=false;

                wordIndex++;

                if(wordIndex>=words.length){

                    wordIndex=0;

                }

            }

        }

        setTimeout(type,deleting?45:90);

    }

    type();

}

/*=====================================================
    HERO FLOATING EFFECT
=====================================================*/

function floatingHero(){

    const target=document.querySelector(".hero-circle");

    if(!target) return;

    let time=0;

    function animate(){

        time+=0.02;

        const y=Math.sin(time)*12;

        target.style.transform=`translateY(${y}px)`;

        requestAnimationFrame(animate);

    }

    animate();

}

/*=====================================================
    FLOATING EXPERIENCE CARD
=====================================================*/

function floatingCard(){

    const card=document.querySelector(".experience-card");

    if(!card) return;

    let t=0;

    function loop(){

        t+=0.018;

        const y=Math.cos(t)*8;

        card.style.transform=`translateY(${y}px)`;

        requestAnimationFrame(loop);

    }

    loop();

}

/*=====================================================
    HERO PARALLAX
=====================================================*/

function heroParallax(){

    const blob1=document.querySelector(".hero-blob-1");
    const blob2=document.querySelector(".hero-blob-2");
    const image=document.querySelector(".hero-image");

    if(!blob1 || !blob2 || !image) return;

    window.addEventListener("mousemove",(e)=>{

        const x=(e.clientX/window.innerWidth-.5);

        const y=(e.clientY/window.innerHeight-.5);

        blob1.style.transform=

        `translate(${x*30}px,${y*30}px)`;

        blob2.style.transform=

        `translate(${x*-40}px,${y*-35}px)`;

        image.style.transform=

        `translate(${x*15}px,${y*15}px)`;

    });

}

/*=====================================================
    HERO ENTRANCE
=====================================================*/

function heroEntrance(){

    const hero=document.querySelector(".hero-content");

    const image=document.querySelector(".hero-image");

    if(!hero || !image) return;

    hero.style.opacity=0;
    image.style.opacity=0;

    hero.style.transform="translateY(60px)";
    image.style.transform="translateY(60px)";

    setTimeout(()=>{

        hero.style.transition="1s ease";
        image.style.transition="1s ease";

        hero.style.opacity=1;
        image.style.opacity=1;

        hero.style.transform="translateY(0)";
        image.style.transform="translateY(0)";

    },500);

}

/*=====================================================
    SCROLL INDICATOR
=====================================================*/

function scrollIndicator(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    const indicator=document.createElement("div");

    indicator.className="scroll-indicator";

    indicator.innerHTML=`

        <span></span>

        <small>Scroll Down</small>

    `;

    hero.appendChild(indicator);

    indicator.addEventListener("click",()=>{

        const about=document.querySelector("#about");

        if(about){

            about.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}

/*=====================================================
    HERO BACKGROUND MOTION
=====================================================*/

function animatedBackground(){

    const blobs=document.querySelectorAll(".hero-blob");

    if(!blobs.length) return;

    let angle=0;

    function move(){

        angle+=0.003;

        blobs.forEach((blob,index)=>{

            const x=Math.cos(angle+index)*20;

            const y=Math.sin(angle+index)*20;

            blob.style.marginLeft=x+"px";
            blob.style.marginTop=y+"px";

        });

        requestAnimationFrame(move);

    }

    move();

}

/*=====================================================
    HERO PARTICLE HOVER
=====================================================*/

function heroHoverEffect(){

    const hero=document.querySelector(".hero");

    if(!hero) return;

    hero.addEventListener("mousemove",(e)=>{

        hero.style.setProperty(

            "--mouse-x",

            e.clientX+"px"

        );

        hero.style.setProperty(

            "--mouse-y",

            e.clientY+"px"

        );

    });

}

/*=====================================================
    INITIALIZE HERO
=====================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    typingEffect();

    floatingHero();

    floatingCard();

    heroParallax();

    heroEntrance();

    scrollIndicator();

    animatedBackground();

    heroHoverEffect();

});

/*==================================================
COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;
        const target = +counter.dataset.target;

        animateCounter(counter, target);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

function animateCounter(element, target) {

    let current = 0;

    const duration = 1800;

    const increment = target / (duration / 16);

    function updateCounter() {

        current += increment;

        if (current < target) {

            element.innerText = Math.floor(current);

            requestAnimationFrame(updateCounter);

        } else {

            element.innerText = target + "+";

        }

    }

    updateCounter();

}

/*==================================================
SKILL PROGRESS ANIMATION
==================================================*/

const progressBars = document.querySelectorAll(".progress-bar");

const progressObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const progress = entry.target;

        const value = progress.dataset.progress;

        progress.style.width = value + "%";

        progressObserver.unobserve(progress);

    });

}, {

    threshold: 0.5

});

progressBars.forEach(bar => {

    bar.style.width = "0%";

    progressObserver.observe(bar);

});

/*==================================================
NUMBER COUNT EFFECT
==================================================*/

function numberAnimation(el, target) {

    let start = 0;

    const speed = Math.max(15, 2000 / target);

    const timer = setInterval(() => {

        start++;

        el.innerHTML = start;

        if (start >= target) {

            el.innerHTML = target + "+";

            clearInterval(timer);

        }

    }, speed);

}

/*==================================================
INTERSECTION OBSERVER
==================================================*/

const observerOptions = {

    root: null,

    rootMargin: "0px",

    threshold: 0.2

};

const revealElements = document.querySelectorAll(

    ".skill-category, .stat-card, .experience-card, .timeline-item"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, observerOptions);

revealElements.forEach(item => {

    revealObserver.observe(item);

});

/*==================================================
STAGGER ANIMATION
==================================================*/

document.querySelectorAll(".skill-category").forEach((card, index) => {

    card.style.transitionDelay = `${index * 120}ms`;

});

document.querySelectorAll(".stat-card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 120}ms`;

});

document.querySelectorAll(".timeline-item").forEach((item, index) => {

    item.style.transitionDelay = `${index * 150}ms`;

});

document.querySelectorAll(".experience-card").forEach((item, index) => {

    item.style.transitionDelay = `${index * 180}ms`;

});

/*==================================================
LAZY FADE ANIMATION
==================================================*/

const lazyItems = document.querySelectorAll(

    ".about-wrapper, .personal-grid, .statistics-grid"

);

const lazyObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: 0.25

});

lazyItems.forEach(item => {

    lazyObserver.observe(item);

});

/*==================================================
SKILL GLOW EFFECT
==================================================*/

progressBars.forEach(bar => {

    bar.addEventListener("transitionend", () => {

        bar.classList.add("active-glow");

    });

});

/*==================================================
CARD FLOAT EFFECT
==================================================*/

document.querySelectorAll(

    ".skill-category, .experience-card, .stat-card"

).forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", x + "px");

        card.style.setProperty("--mouse-y", y + "px");

    });

});

/*==================================================
SECTION OBSERVER
==================================================*/

const sections = document.querySelectorAll("section");

const activeSectionObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("section-active");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    activeSectionObserver.observe(section);

});


/*==================================================
PORTFOLIO FILTER
==================================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            const category = item.dataset.category;

            if (filter === "all" || category === filter) {

                item.style.display = "block";

                requestAnimationFrame(() => {

                    item.classList.remove("portfolio-hide");

                    item.classList.add("portfolio-show");

                });

            } else {

                item.classList.remove("portfolio-show");

                item.classList.add("portfolio-hide");

                setTimeout(() => {

                    item.style.display = "none";

                }, 300);

            }

        });

    });

});

/*==================================================
PORTFOLIO HOVER PARALLAX
==================================================*/

portfolioItems.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 18;

        const rotateY = (x - centerX) / 18;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.02)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/*==================================================
PORTFOLIO GLOW FOLLOW CURSOR
==================================================*/

portfolioItems.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);

    });

});

/*==================================================
IMAGE PRELOAD
==================================================*/

function preloadImages() {

    const images = document.querySelectorAll("img");

    images.forEach(img => {

        const preload = new Image();

        preload.src = img.src;

    });

}

window.addEventListener("load", preloadImages);

/*==================================================
MASONRY GALLERY
==================================================*/

const masonry = document.querySelector(".gallery-grid");

function masonryLayout() {

    if (!masonry) return;

    const items = masonry.querySelectorAll(".gallery-item");

    items.forEach(item => {

        const img = item.querySelector("img");

        if (!img) return;

        const resize = () => {

            const rowHeight = parseInt(
                getComputedStyle(masonry).getPropertyValue("grid-auto-rows")
            );

            const rowGap = parseInt(
                getComputedStyle(masonry).getPropertyValue("gap")
            );

            const height = item.querySelector(".gallery-content")
                ? item.querySelector(".gallery-content").getBoundingClientRect().height
                : img.getBoundingClientRect().height;

            const span = Math.ceil((height + rowGap) / (rowHeight + rowGap));

            item.style.gridRowEnd = `span ${span}`;

        };

        if (img.complete) {

            resize();

        } else {

            img.onload = resize;

        }

    });

}

window.addEventListener("load", masonryLayout);
window.addEventListener("resize", masonryLayout);

/*==================================================
LIGHTBOX
==================================================*/

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const lightboxTitle = document.querySelector(".lightbox-title");
const lightboxClose = document.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-item img").forEach(image => {

    image.addEventListener("click", () => {

        if (!lightbox) return;

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

        lightboxImg.alt = image.alt;

        if (lightboxTitle) {

            lightboxTitle.innerHTML = image.alt;

        }

        document.body.style.overflow = "hidden";

    });

});

if (lightboxClose) {

    lightboxClose.addEventListener("click", () => {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

}

if (lightbox) {

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}

/*==================================================
LIGHTBOX KEYBOARD
==================================================*/

document.addEventListener("keydown", e => {

    if (e.key === "Escape" && lightbox) {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});

/*==================================================
GALLERY HOVER ZOOM
==================================================*/

document.querySelectorAll(".gallery-item").forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.classList.add("gallery-hover");

    });

    item.addEventListener("mouseleave", () => {

        item.classList.remove("gallery-hover");

    });

});

/*==================================================
FADE IN GALLERY
==================================================*/

const galleryObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("gallery-visible");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".gallery-item").forEach(item => {

    galleryObserver.observe(item);

});

/*==================================================
PORTFOLIO CARD ENTRANCE
==================================================*/

const portfolioObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("portfolio-visible");

        }

    });

}, {

    threshold: 0.15

});

portfolioItems.forEach(item => {

    portfolioObserver.observe(item);

});


/*==================================================
CONTACT FORM VALIDATION
==================================================*/

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    const inputs = contactForm.querySelectorAll("input, textarea");

    inputs.forEach(input => {

        input.addEventListener("input", () => {

            validateInput(input);

        });

        input.addEventListener("blur", () => {

            validateInput(input);

        });

    });

}

function validateInput(input) {

    const value = input.value.trim();

    input.classList.remove("success", "error");

    if (value.length === 0) {

        input.classList.add("error");

        return false;

    }

    if (input.type === "email") {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(value)) {

            input.classList.add("error");

            return false;

        }

    }

    input.classList.add("success");

    return true;

}

/*==================================================
FORM SUBMIT
==================================================*/

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let valid = true;

        const fields = this.querySelectorAll("input, textarea");

        fields.forEach(field => {

            if (!validateInput(field)) {

                valid = false;

            }

        });

        if (!valid) {

            toast(
                "Mohon lengkapi seluruh data dengan benar.",
                "error"
            );

            return;

        }

        submitAnimation();

        sendEmail();

    });

}

/*==================================================
EMAILJS
==================================================*/

// Ganti sesuai akun EmailJS Anda

const EMAIL_SERVICE = "YOUR_SERVICE_ID";
const EMAIL_TEMPLATE = "YOUR_TEMPLATE_ID";
const EMAIL_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

function sendEmail() {

    if (typeof emailjs === "undefined") {

        toast("EmailJS belum dimuat.", "error");

        return;

    }

    emailjs.sendForm(

        EMAIL_SERVICE,

        EMAIL_TEMPLATE,

        contactForm,

        EMAIL_PUBLIC_KEY

    )

    .then(() => {

        toast("Pesan berhasil dikirim.", "success");

        contactForm.reset();

    })

    .catch(() => {

        toast("Gagal mengirim pesan.", "error");

    });

}

/*==================================================
FLOATING LABEL
==================================================*/

document.querySelectorAll(".form-group input, .form-group textarea")

.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.classList.add("active");

    });

    input.addEventListener("blur", () => {

        if (input.value.trim() === "") {

            input.parentElement.classList.remove("active");

        }

    });

});

/*==================================================
REALTIME CHARACTER COUNTER
==================================================*/

document.querySelectorAll("textarea")

.forEach(textarea => {

    const counter = textarea.nextElementSibling;

    if (!counter) return;

    textarea.addEventListener("input", () => {

        counter.innerHTML =

            textarea.value.length + " karakter";

    });

});

/*==================================================
RIPPLE EFFECT BUTTON
==================================================*/

document.querySelectorAll(".btn, button")

.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left =

            e.clientX - rect.left + "px";

        ripple.style.top =

            e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 700);

    });

});

/*==================================================
SUBMIT LOADING
==================================================*/

function submitAnimation() {

    const submitBtn =

        contactForm.querySelector("button[type='submit']");

    if (!submitBtn) return;

    submitBtn.disabled = true;

    submitBtn.innerHTML =

        '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';

    setTimeout(() => {

        submitBtn.disabled = false;

        submitBtn.innerHTML =

            '<i class="fa-solid fa-paper-plane"></i> Kirim Pesan';

    }, 2500);

}

/*==================================================
TOAST NOTIFICATION
==================================================*/

function toast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className =

        "toast toast-" + type;

    toast.innerHTML =

        `
        <div class="toast-icon">

            <i class="${type === "success"

                ? "fa-solid fa-circle-check"

                : "fa-solid fa-circle-xmark"}"></i>

        </div>

        <div class="toast-text">

            ${message}

        </div>
        `;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 50);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 500);

    }, 3500);

}

/*==================================================
INPUT AUTO ANIMATION
==================================================*/

document.querySelectorAll("input, textarea")

.forEach(input => {

    input.addEventListener("focus", () => {

        input.parentElement.classList.add("focus");

    });

    input.addEventListener("blur", () => {

        input.parentElement.classList.remove("focus");

    });

});

/*==================================================
AUTO RESIZE TEXTAREA
==================================================*/

document.querySelectorAll("textarea")

.forEach(textarea => {

    textarea.addEventListener("input", function () {

        this.style.height = "auto";

        this.style.height = this.scrollHeight + "px";

    });

});

/*==================================================
FORM SHAKE EFFECT
==================================================*/

function shakeForm() {

    contactForm.classList.add("shake");

    setTimeout(() => {

        contactForm.classList.remove("shake");

    }, 600);

}

/*==================================================
INVALID AUTO SHAKE
==================================================*/

document.querySelectorAll("input, textarea")

.forEach(field => {

    field.addEventListener("invalid", e => {

        e.preventDefault();

        shakeForm();

    });

});

/*==================================================
SUCCESS GLOW
==================================================*/

function successGlow() {

    contactForm.classList.add("success-glow");

    setTimeout(() => {

        contactForm.classList.remove("success-glow");

    }, 1200);

}

/*==================================================
EMAIL SUCCESS CALLBACK
==================================================*/

document.addEventListener(

    "email-success",

    successGlow

);


/*==================================================
SMOOTH SCROLL ENGINE
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    });

});

/*==================================================
ACTIVE NAVBAR
==================================================*/

const sectionsNav = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sectionsNav.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (pageYOffset >= top &&
            pageYOffset < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/*==================================================
EXTRA SCROLL REVEAL
==================================================*/

const revealItems = document.querySelectorAll(

    ".portfolio-item,.gallery-item,.coming-card,.testimonial-card"

);

const revealObserver2 = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.15

});

revealItems.forEach(item=>{

revealObserver2.observe(item);

});

/*==================================================
SCROLL PROGRESS BAR
==================================================*/

const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll",()=>{

const scrollTop =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const width =
(scrollTop / height) * 100;

if(progressBar){

progressBar.style.width = width + "%";

}

});

/*==================================================
MAGNETIC BUTTON EFFECT
==================================================*/

document.querySelectorAll(

".btn-primary,.btn-secondary,.btn"

).forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect = button.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const moveX =
(x - rect.width/2) * .20;

const moveY =
(y - rect.height/2) * .20;

button.style.transform =

`translate(${moveX}px,${moveY}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="";

});

});

/*==================================================
CURSOR PARTICLE EFFECT
==================================================*/

const cursor = document.querySelector(".cursor");

function createParticle(x,y){

const particle =
document.createElement("span");

particle.className = "cursor-particle";

particle.style.left = x + "px";

particle.style.top = y + "px";

document.body.appendChild(particle);

setTimeout(()=>{

particle.remove();

},700);

}

document.addEventListener("mousemove",(e)=>{

if(!cursor) return;

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

if(Math.random()>.82){

createParticle(e.clientX,e.clientY);

}

});

/*==================================================
CURSOR SCALE
==================================================*/

document.querySelectorAll(

"a,button,.btn,.portfolio-item,.gallery-item"

).forEach(item=>{

item.addEventListener("mouseenter",()=>{

cursor.classList.add("cursor-hover");

});

item.addEventListener("mouseleave",()=>{

cursor.classList.remove("cursor-hover");

});

});

/*==================================================
PARALLAX DECORATION
==================================================*/

const blobs =
document.querySelectorAll(

".hero-blob,.floating-shape"

);

window.addEventListener("mousemove",(e)=>{

const x =
e.clientX / window.innerWidth;

const y =
e.clientY / window.innerHeight;

blobs.forEach((blob,index)=>{

const speed =
(index+1)*18;

blob.style.transform=

`translate(
${x*speed}px,
${y*speed}px
)`;

});

});

/*==================================================
RAF SCROLL ENGINE
==================================================*/

let latestScroll = 0;

let ticking = false;

function updateScroll(){

document.body.style.setProperty(

"--scroll",

latestScroll

);

ticking=false;

}

window.addEventListener("scroll",()=>{

latestScroll = window.scrollY;

if(!ticking){

requestAnimationFrame(updateScroll);

ticking=true;

}

});

/*==================================================
SECTION FADE
==================================================*/

document.querySelectorAll("section")

.forEach(section=>{

const io = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(

"section-visible"

);

}

});

},

{

threshold:.18

});

io.observe(section);

});

/*==================================================
PREMIUM CARD HOVER
==================================================*/

document.querySelectorAll(

".experience-card,.skill-category,.portfolio-item,.info-card"

)

.forEach(card=>{

card.addEventListener(

"mousemove",

e=>{

const rect =

card.getBoundingClientRect();

const x =

e.clientX-rect.left;

const y =

e.clientY-rect.top;

card.style.setProperty(

"--x",

x+"px"

);

card.style.setProperty(

"--y",

y+"px"

);

});

});

/*==================================================
FPS OPTIMIZER
==================================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

clearTimeout(resizeTimer);

resizeTimer=setTimeout(()=>{

window.dispatchEvent(

new Event("optimizedResize")

);

},200);

});

/*==================================================
END PART 7
==================================================*/


/*==================================================
PART 8
FINAL POLISHING
Production Ready
==================================================*/

/*==================================================
PRELOADER PREMIUM
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.classList.add("loaded");

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

});

/*==================================================
WELCOME ANIMATION
==================================================*/

window.addEventListener("load", () => {

    document.body.classList.add("website-loaded");

});

/*==================================================
DARK MODE
SAVE LOCAL STORAGE
==================================================*/

const darkButton = document.getElementById("darkMode");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");

    if (darkButton) {

        darkButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

}

if (darkButton) {

    darkButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            darkButton.innerHTML =
                '<i class="fa-solid fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "light");

            darkButton.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        }

    });

}

/*==================================================
SAVE SCROLL POSITION
==================================================*/

window.addEventListener("beforeunload", () => {

    sessionStorage.setItem(

        "scrollPosition",

        window.scrollY

    );

});

window.addEventListener("load", () => {

    const scroll = sessionStorage.getItem(

        "scrollPosition"

    );

    if (scroll) {

        window.scrollTo({

            top: Number(scroll),

            behavior: "instant"

        });

    }

});

/*==================================================
LAZY IMAGE LOADING
==================================================*/

const lazyImages = document.querySelectorAll(

    "img[data-src]"

);

if ("IntersectionObserver" in window) {

    const imageObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                imageObserver.unobserve(img);

            });

        },

        {

            threshold: 0.15

        }

    );

    lazyImages.forEach(img => {

        imageObserver.observe(img);

    });

}

/*==================================================
IMAGE FADE EFFECT
==================================================*/

document.querySelectorAll("img")

.forEach(image => {

    image.addEventListener("load", () => {

        image.classList.add("loaded");

    });

});

/*==================================================
KEYBOARD SHORTCUT
==================================================*/

document.addEventListener("keydown", e => {

    if (e.altKey && e.key === "h") {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    if (e.altKey && e.key === "c") {

        const contact = document.querySelector("#contact");

        if (contact) {

            contact.scrollIntoView({

                behavior: "smooth"

            });

        }

    }

});

/*==================================================
FOCUS ACCESSIBILITY
==================================================*/

document.querySelectorAll(

    "button,a,input,textarea"

)

.forEach(item => {

    item.addEventListener("keyup", e => {

        if (e.key === "Tab") {

            item.classList.add("focus-visible");

        }

    });

});

/*==================================================
AUTO CURRENT YEAR
==================================================*/

const year = document.getElementById("year");

if (year) {

    year.innerHTML =

        new Date().getFullYear();

}

/*==================================================
REDUCE MOTION SUPPORT
==================================================*/

if (

    window.matchMedia(

        "(prefers-reduced-motion: reduce)"

    ).matches

) {

    document.documentElement.classList.add(

        "reduce-motion"

    );

}

/*==================================================
ONLINE OFFLINE STATUS
==================================================*/

window.addEventListener("offline", () => {

    toast(

        "Koneksi internet terputus.",

        "error"

    );

});

window.addEventListener("online", () => {

    toast(

        "Koneksi internet kembali normal.",

        "success"

    );

});

/*==================================================
COPY EMAIL
==================================================*/

document.querySelectorAll(

    "[data-copy]"

).forEach(item => {

    item.addEventListener("click", () => {

        navigator.clipboard.writeText(

            item.dataset.copy

        );

        toast(

            "Berhasil disalin.",

            "success"

        );

    });

});

/*==================================================
AUTO EXTERNAL LINK
==================================================*/

document.querySelectorAll(

    'a[target="_blank"]'

).forEach(link => {

    link.setAttribute(

        "rel",

        "noopener noreferrer"

    );

});

/*==================================================
LIGHTHOUSE OPTIMIZATION
==================================================*/

document.querySelectorAll("img")

.forEach(img => {

    img.loading = "lazy";

    img.decoding = "async";

});

/*==================================================
ERROR HANDLER
==================================================*/

window.addEventListener("error", e => {

    console.warn(

        "Website Error:",

        e.message

    );

});

/*==================================================
UNHANDLED PROMISE
==================================================*/

window.addEventListener(

    "unhandledrejection",

    e => {

        console.warn(

            "Promise Error:",

            e.reason

        );

    }

);

/*==================================================
FINAL INITIALIZATION
==================================================*/

document.addEventListener(

    "DOMContentLoaded",

    () => {

        console.log(

            "%cWebsite Portfolio Iko Siswono",

            "color:#005BAC;font-size:20px;font-weight:bold;"

        );

        console.log(

            "%cProduction Build Ready",

            "color:#1B75D0;font-size:13px;"

        );

    }

);

/*==================================================
THE END
==================================================*/


