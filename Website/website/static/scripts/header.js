window.onload = function () {
    reveal();
};

function reveal() {
    var navbar = document.querySelectorAll(".navbar");
    for (var i = 0; i < navbar.length; i++) {
        console.log(scrollY);
        if (scrollY == 0) {
            navbar[i].classList.remove('navbar-inactive');
            navbar[i].classList.add('navbar-active');
        }
        else {
            navbar[i].classList.remove('navbar-active');
            navbar[i].classList.add('navbar-inactive');
        }
    }

}

window.addEventListener("scroll", reveal);

