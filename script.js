// Dark Mode Toggle Script

const modeToggles = document.querySelectorAll('.mode-tog');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', 'inactive');
}

const initTheme = () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'active') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
}

modeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentMode = localStorage.getItem('darkMode');
        currentMode !== 'active' ? enableDarkMode() : disableDarkMode();
    });
});

initTheme();

// Hamburger Toggle Script

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
