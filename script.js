let menu = document.getElementById('menu');
let menuBtn = document.querySelector('.menu-button');
let closeBtn = document.querySelector('.close-button');

function openMenu() {
    menu.classList.add('open');
    menuBtn.classList.add('hide');
    closeBtn.classList.add('show');
}

function closeMenu() {
    menu.classList.remove('open');
    menuBtn.classList.remove('hide');
    closeBtn.classList.remove('show');
}
