
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    const iconMenu = menuToggle.querySelector('.icon-menu');
    const iconClose = menuToggle.querySelector('.icon-close');
    
    navLinks.classList.toggle('open');
    
    if (navLinks.classList.contains('open')) {
        iconMenu.style.display = 'none';
        iconClose.style.display = 'block';
    } else {
        iconMenu.style.display = 'block';
        iconClose.style.display = 'none';
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navLinks = document.getElementById('navLinks');
    
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    if (navLinks.classList.contains('open')) {
        toggleMenu();
    }
    
    // Prevent default anchor behavior
    return false;
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    const navContent = document.querySelector('.nav-content');
    
    if (navLinks.classList.contains('open') && 
        !navContent.contains(event.target)) {
        toggleMenu();
    }
});

// Prevent menu close when clicking inside nav
document.querySelector('.nav-content').addEventListener('click', function(event) {
    event.stopPropagation();
});