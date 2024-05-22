/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.hero-content, .about-section-content, .heading--large, .portfolio-image-1`) 
sr.reveal(`.hero-image, .services-heading, .services-caption, .services-link , .about-section-image, .portfolio-image-2, .cta-caption-2,.footer-top,.footer-bottom`,{delay: 600, origin: 'bottom'})
sr.reveal(`.services-item,.logos-item`,{interval: 100}) 
sr.reveal(`.heading--normal, .about-caption, .services-caption, .portfolio-image-4 ,.cta-caption-1`,{origin: 'right'})
sr.reveal(`.heading--big, .heading--bigger, .portfolio-image-3`,{origin: 'left'})
