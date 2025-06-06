/**
 * Intro Section Module
 */

// Intro section data
const INTRO_DATA = {
    "name": "Abhishake Gupta",
    "title": "Senior Software Engineer with 11+ Years of Full-Stack Development Experience",
    "skills": "Python | JavaScript (React, NextJS) | SQL | MongoDB | Golang | Docker"
};

// Load Intro Section
function loadIntroSection() {
    const data = INTRO_DATA;
    if (!data) return;

    const introSection = document.getElementById('intro-section');
    if (!introSection) return;
    
    // Save the thumbnail container if it exists
    const thumbnailContainer = introSection.querySelector('.thumbnail-container');
    
    let html = `
        <section id="top" class="one dark cover">
            <div class="container">
                ${thumbnailContainer ? thumbnailContainer.outerHTML : ''}
                <header>
                    <h2 class="alt"><strong>${data.name}</strong></h2>
                    <p>${data.title}</p>
                    <p>${data.skills}</p>
                </header>
            </div>
        </section>
    `;

    introSection.innerHTML = html;
}

// Export the function for use in main loader
window.loadIntroSection = loadIntroSection;
