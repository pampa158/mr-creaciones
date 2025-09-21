window.addEventListener('scroll', function() {
        var navbar = document.querySelector('header');
        if (window.scrollY > 150) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

});