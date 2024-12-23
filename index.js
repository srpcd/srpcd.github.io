const hamburgerButton = document.querySelector('.hamburgerButton');
const hamburgerMenu = document.querySelector('.hamburgerButtonMenu');

let hamburgerMenuHovered = false;

hamburgerMenu.addEventListener('mouseenter', () => {
    hamburgerMenuHovered = true
});

hamburgerMenu.addEventListener('mouseleave', () => {
    hamburgerMenuHovered = false
    hamburgerMenu.style.display = 'none';
});

hamburgerButton.addEventListener('mouseenter', () => {
    hamburgerMenu.style.display = 'block';
});

hamburgerButton.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!hamburgerMenuHovered) {
            hamburgerMenu.style.display = 'none';
        }
    }, 100);
});


