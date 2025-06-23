let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');

}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 100, origin: 'top'})
sr.reveal('.form-container form',{delay: 500, origin: 'left'})
sr.reveal('.heading',{delay: 400, origin: 'top'})