/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
       navToggle = document.getElementById('nav-toggle'),
       navClose = document.getElementById('nav-close')

/*======= MENU SHOW =======*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*======= MENU HIDDEN =======*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu click event
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey // create account in emailjs.com and get your details
    emailjs.sendForm('service_2hhhf5q','template_2cuaiw9','#contact-form', '3U3up2nxrv-HEWtGG')
    .then(() => {
        // show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()

    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== experiences ===============*/ 

// Get all toggles and details
const expToggles = document.querySelectorAll('.exp__toggle');
const expDetails = document.querySelectorAll('.details');

// Set the initial state: Only the first company's details should be visible
document.querySelector('.exp__toggle[data-target="company1"]').classList.add('active');
document.getElementById('company1').style.display = 'block';

// Add event listeners to each toggle
expToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Hide all details
        expDetails.forEach(detail => {
            detail.style.display = 'none';
            detail.style.visibility = 'hidden'; 
            detail.style.opacity = '0';         
        });

        // Remove 'active' class from all toggles
        expToggles.forEach(t => {
            t.classList.remove('active');
        });

        // Add 'active' class to the clicked toggle
        toggle.classList.add('active');

        // Display the details corresponding to the clicked toggle
        const targetDetail = document.getElementById(toggle.getAttribute('data-target'));
        targetDetail.style.display = 'block';
        targetDetail.style.visibility = 'visible'; 
        targetDetail.style.opacity = '1';         
        
    });
});



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop -58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    document.body.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     // reset: true //Animations repeat
// })

// sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
// sr.reveal(`.home__name, .home__info,
//             .about__container .section__title-1, .about__info,
//             .contact__social, .contact__data`, {origin: 'left'})
// sr.reveal(`.skills__card, .projects__card`, {interval: 100})
// sr.reveal('.section__title-2', {origin: 'top'});
// sr.reveal('.section__title-1', {origin: 'top'}); 
// sr.reveal('.exp__toggle', {origin: 'left', interval: 100}); 
// // sr.reveal('.details', {origin: 'right'});


