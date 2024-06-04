document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggle-menu');
    const content = document.getElementById('navbar-nav');

    button.addEventListener('click', function (e) {
        e.stopPropagation();
        content.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!content.contains(e.target) && !button.contains(e.target)) {
            content.classList.remove('show');
        }
    });
});