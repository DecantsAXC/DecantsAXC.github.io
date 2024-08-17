document.addEventListener('DOMContentLoaded', () => {
    const perfumes = document.querySelectorAll('.perfume');

    perfumes.forEach(perfume => {
        const originalImage = perfume.style.backgroundImage;
        const hoverImage = perfume.getAttribute('data-hover');

        perfume.addEventListener('mouseover', () => {
            perfume.style.backgroundImage = `url('${hoverImage}')`;
        });

        perfume.addEventListener('mouseout', () => {
            perfume.style.backgroundImage = originalImage;
        });
    });
});
