const header = document.querySelector('.header');

window.onscroll = function () {
    if (window.scrollY > 100) {
        header.classList.add('header__scrolled');
    }
    else {
        header.classList.remove('header__scrolled');
    }
}