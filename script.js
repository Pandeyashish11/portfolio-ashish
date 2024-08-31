document.getElementById('menu-toggle').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
});
