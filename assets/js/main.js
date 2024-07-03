/* =============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* =============== REMOVE MENU MOBILE =============== */
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* =============== ADD BLUR TO HEADER =============== */
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/* =============== EMAIL JS =============== */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ew0dbec', 'template_cxo9j8d', '#contact-form', 'JN_AYIoM_9ImJP01i')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset();
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)

/* =============== SHOW SCROLL UP =============== */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* =============== SCROLL REVEAL ANIMATION =============== */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /* Animation repeat */
})

sr.reveal(`.home_data, .home_social, .contact_container, .footer_container`)
sr.reveal(`.home_image`, { origin: 'bottom' })
sr.reveal(`.about_data, .skills_data`, { origin: 'left' })
sr.reveal(`.about_image, .skills_content`, { origin: 'right' })
sr.reveal(`.services_card, .projects_card`, { interval: 100 })

/* =============== ULTIMATE HACKER EFFECT =============== */
// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// document.getElementById('home-title').onmouseover = e => {
//     let interations = 0;

//     const interval = setInterval(() => {
//         e.target.innerText = e.target.innerText.split("")
//             .map((letter, index) => {
//                 if(index < interations) {
//                     return e.target.dataset.value[index];
//                 }

//                 return letters[Math.floor(Math.random() * 26)]
//             })
//             .join("");

//         if (interations >= e.target.dataset.value.length) {
//             clearInterval(interval);
//         }

//         interations += 1 / 3;
//     }, 30)
// }