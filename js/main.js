document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById("element");
    var typed = new Typed(element, {
        strings: ['Designer', 'Jerry Daniels', 'Developer'],
        typeSpeed: 35,
        backSpeed: 40,
        backDelay: 400,
        startDelay: 600,
        loop: true,
    });
})