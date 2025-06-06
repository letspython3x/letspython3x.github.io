/**
 * About Section Module
 */

// About section data
const ABOUT_DATA = {
    "title": "About Me",
    "content": "I'm a passionate software engineer with over 11 years of experience in full-stack development. I specialize in building scalable web applications using Python, JavaScript, and modern frameworks. I'm dedicated to writing clean, maintainable code and constantly learning new technologies.",
    "features": [
        {
            "icon": "fa-code",
            "title": "Clean Code Advocate",
            "description": "I believe in writing clean, readable, and maintainable code that follows best practices and design patterns."
        },
        {
            "icon": "fa-cubes",
            "title": "Architecture Design",
            "description": "Experienced in designing scalable system architectures that can handle growth and changing requirements."
        },
        {
            "icon": "fa-book",
            "title": "Continuous Learning",
            "description": "I'm committed to continuous learning and staying updated with the latest technologies and industry trends."
        },
        {
            "icon": "fa-users",
            "title": "Team Collaboration",
            "description": "I enjoy collaborating with cross-functional teams and mentoring junior developers to achieve project goals."
        }
    ]
};

// Load About Section
function loadAboutSection() {
    const data = ABOUT_DATA;
    if (!data) return;

    const aboutSection = document.getElementById('about-section');
    if (!aboutSection) return;

    // Generate features HTML
    const featuresHTML = data.features.map(feature => {
        return `
        <div class="col-6 col-12-mobile">
            <section class="feature-item">
                <span class="icon solid major ${feature.icon}"></span>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </section>
        </div>`;
    }).join('');

    const html = `
    <section id="about" class="four">
        <div class="container">
            <header>
                <h2>${data.title}</h2>
            </header>

            <p class="about-intro">${data.content}</p>

            <div class="row features">
                ${featuresHTML}
            </div>
        </div>
    </section>`;

    aboutSection.innerHTML = html;
}

// Export the function for use in main loader
window.loadAboutSection = loadAboutSection;
