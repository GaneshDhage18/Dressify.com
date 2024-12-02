const featureItems = document.querySelectorAll('.feature-item');
const videoPlaceholder = document.querySelector('.video-placeholder');

featureItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const featureName = item.getAttribute('data-feature');
        videoPlaceholder.textContent = featureName;
    });

    item.addEventListener('mouseleave', () => {
        videoPlaceholder.textContent = 'Hover over a feature to see the name here!';
    });
});



let scrollSection = document.querySelector('.scrollable-section');
let sparkFill = document.querySelector('.spark-fill');
let scrollInterval;

function startAutoScroll() {
    scrollInterval = setInterval(() => {
        scrollSection.scrollBy({
            left: window.innerWidth,
            behavior: 'smooth'
        });
        // Reset the spark line width to 0 and then animate it back to full width
        sparkFill.style.width = '0%';
        setTimeout(() => {
            sparkFill.style.width = '100%';
        }, 100); // Small delay to make the animation visible
    }, 3000); // Auto-scroll every 3 seconds
}

// On hover, pause both scrolling and the spark line progress
scrollSection.addEventListener('mouseover', () => {
    clearInterval(scrollInterval); // Pause auto-scroll on hover
    sparkFill.style.width = '0%'; // Reset spark line on hover
});

// Resume scrolling and spark line animation when hover is removed
scrollSection.addEventListener('mouseout', () => {
    startAutoScroll(); // Resume auto-scroll
});

startAutoScroll(); // Start auto-scroll on page load




// Add smooth hover effects
const steps = document.querySelectorAll('.step-content');

steps.forEach(step => {
    step.addEventListener('mouseenter', () => {
        step.classList.add('highlight');
    });

    step.addEventListener('mouseleave', () => {
        step.classList.remove('highlight');
    });
});






// script.js
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.fade-in'); // Select only fade-in sections

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; // Trigger when section is 80% visible
        sections.forEach(section => {
            const box = section.getBoundingClientRect();
            if (box.top < triggerBottom) {
                section.classList.add('visible'); // Add visible class
            } else {
                section.classList.remove('visible'); // Remove visible class if not in view
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on page load
});

















