window.onload = function () {
    reveal();
};

function reveal() {
    var navbar = document.querySelectorAll(".navbar");
    var navbarlink = document.querySelectorAll(".nav-link");
    var navbarseparator = document.querySelectorAll(".nav-separator");
    var navbarimg = document.querySelectorAll(".nav-img");
    var lines = document.querySelector(".lines");
    
    for (var i = 0; i < navbar.length; i++) {
        if (scrollY == 0) {
            navbar[i].classList.remove('navbar-inactive');
            navbar[i].classList.add('navbar-active');
        }
        else {
            navbar[i].classList.remove('navbar-active');
            navbar[i].classList.add('navbar-inactive');
        }
    }
    for (var i = 0; i < navbarlink.length; i++) {
        if (scrollY == 0) {
            navbarlink[i].classList.remove('navbar-link-inactive');
            navbarlink[i].classList.add('navbar-link-active');
        }
        else {
            navbarlink[i].classList.remove('navbar-link-active');
            navbarlink[i].classList.add('navbar-link-inactive');
        }
    }
    for (var i = 0; i < navbarseparator.length; i++) {
        if (scrollY == 0) {
            navbarseparator[i].classList.remove('navbar-separator-inactive');
            navbarseparator[i].classList.add('navbar-separator-active');
        }
        else {
            navbarseparator[i].classList.remove('navbar-separator-active');
            navbarseparator[i].classList.add('navbar-separator-inactive');
        }
    }
    for (var i = 0; i < navbarimg.length; i++) {
        if (scrollY == 0) {
            navbarimg[i].src = '/static/images/home/PPLogoWhite.png';
        }
        else {
            navbarimg[i].src = '/static/images/home/PPLogoBlack.png';
        }
    }
    for (var i = 0; i < lines.length; i++) {
        if (scrollY == 0) {
            lines[i].classList.remove('lines-inactive');
            lines[i].classList.add('lines-active');
        }
        else {
            lines[i].classList.remove('lines-active');
            lines[i].classList.add('lines-inactive');
        }
    }
}

window.addEventListener("scroll", reveal);
