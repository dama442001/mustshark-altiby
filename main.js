/* ======================================================
   Mostasharak Medical Clinic
   main.js
   ====================================================== */


/* ===============================
LOADER
=============================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/* ===============================
MOBILE MENU
=============================== */

const mobileMenu = document.querySelector(".mobile-menu");

const navbar = document.querySelector(".navbar");

if(mobileMenu){

    mobileMenu.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}


/* ===============================
CLOSE MENU AFTER CLICK
=============================== */

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});


/* ===============================
STICKY HEADER
=============================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});


/* ===============================
BACK TO TOP
=============================== */

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.classList.add("show");

    }

    else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ======================================================
   SCROLL REVEAL ANIMATION
====================================================== */

const revealElements = document.querySelectorAll(".fade-up");

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ======================================================
   ANIMATED COUNTERS
====================================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = parseInt(counter.dataset.target);

            let current = 0;

            const increment = target / 120;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/* ======================================================
   FAQ ACCORDION
====================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/* ======================================================
   TESTIMONIAL SLIDER
====================================================== */

const testimonials = document.querySelectorAll(".testimonial-card");

let currentSlide = 0;

function showSlide(index){

    testimonials.forEach(card => {

        card.style.display = "none";

    });

    testimonials[index].style.display = "block";

}

if(testimonials.length){

    showSlide(currentSlide);

    setInterval(() => {

        currentSlide++;

        if(currentSlide >= testimonials.length){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    },5000);

}/* ======================================================
   BOOKING FORM (WhatsApp)
====================================================== */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const department = document.getElementById("department").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        const message =
`🏥 طلب حجز موعد

👤 الاسم: ${name}

📱 الهاتف: ${phone}

🏥 القسم: ${department}

👨‍⚕️ الطبيب: ${doctor}

📅 التاريخ: ${date}

🕒 الوقت: ${time}`;

        window.open(

            "https://wa.me/249113442001?text=" +

            encodeURIComponent(message),

            "_blank"

        );

    });

}


/* ======================================================
   ASK DOCTOR FORM
====================================================== */

const questionForm = document.getElementById("questionForm");

if(questionForm){

questionForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("questionName").value;

const phone=document.getElementById("questionPhone").value;

const department=document.getElementById("questionDepartment").value;

const question=document.getElementById("questionMessage").value;

const text=

`💬 سؤال طبي جديد

👤 الاسم : ${name}

📱 الهاتف : ${phone}

🏥 القسم : ${department}

❓ السؤال :

${question}`;

window.open(

"https://wa.me/249113442001?text="+

encodeURIComponent(text),

"_blank"

);

});

}


/* ======================================================
IMAGE GALLERY LIGHTBOX
====================================================== */

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image=>{

image.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.className="lightbox";

overlay.innerHTML=

`<img src="${image.src}">

<span class="close-lightbox">&times;</span>`;

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});


/* ======================================================
ACTIVE NAVIGATION
====================================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

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


/* ======================================================
SMOOTH SCROLL
====================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/* ======================================================
CURRENT YEAR
====================================================== */

const year=document.querySelector(".current-year");

if(year){

year.textContent=new Date().getFullYear();

}


/* ======================================================
END OF FILE
====================================================== */

/* ===================================
   Feedback To WhatsApp
=================================== */

const feedbackForm = document.getElementById("feedbackForm");

const badWords = [

"سب",

"شتيمة",

"لعنة",

"كلمةسيئة1",

"كلمةسيئة2"

];

function cleanText(text){

    let result = text;

    badWords.forEach(word=>{

        const regex = new RegExp(word,"gi");

        result = result.replace(regex,"****");

    });

    return result;

}

if(feedbackForm){

feedbackForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("fbName").value;

const phone=document.getElementById("fbPhone").value;

const rating=document.getElementById("fbRating").value;

const message=cleanText(document.getElementById("fbMessage").value);

const whatsappMessage=

`🏥 مستشارك الطبي

📩 رأي أو مقترح جديد

👤 الاسم:

${name}

📱 الهاتف:

${phone}

⭐ التقييم:

${rating}

📝 الرسالة:

${message}`;

window.open(

"https://wa.me/249113442001?text="+

encodeURIComponent(whatsappMessage),

"_blank"

);

feedbackForm.reset();

});

}