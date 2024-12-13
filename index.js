function updateNavbar() {
    const mediaQuery = window.matchMedia("(max-width: 820px)");
    if (mediaQuery.matches) {
        const navButtons = document.getElementsByClassName("navbuttons");
        const hamburgerBtn = document.getElementById("hamburgerBtn");
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.display = 'none';
        }
        hamburgerBtn.style.display = 'flex';
    } else {
        const navButtons = document.getElementsByClassName("navbuttons");
        const hamburgerBtn = document.getElementById("hamburgerBtn");
        for (let i = 0; i < navButtons.length; i++) {
            navButtons[i].style.display = 'flex';
        }
        hamburgerBtn.style.display = 'none';
    }
}

function openNavbar() {
    const hamburgerBtnMenu = document.getElementById("hamburgerBtnMenu");
    hamburgerBtnMenu.setAttribute('tabindex', '-1');
    let focusEvent = () => {
        setTimeout(() => {
            hamburgerBtnMenu.style.display = 'none';
            hamburgerBtnMenu.removeEventListener('focusout', focusEvent);
            window.removeEventListener('resize', focusEvent);
        }, 1000);
    }
    hamburgerBtnMenu.style.display = 'block';
    hamburgerBtnMenu.focus();
    hamburgerBtnMenu.addEventListener('focusout', focusEvent);
    window.addEventListener('resize', focusEvent);
}

window.addEventListener('resize', () => {updateNavbar()});
updateNavbar();


