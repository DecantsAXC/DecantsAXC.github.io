document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');

    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            document.body.classList.remove('loaded');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 500); // Coincide con la duración de la transición en CSS
        });
    });
});
