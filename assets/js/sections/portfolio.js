/**
 * Portfolio Section Module
 */

// Portfolio section data
const PORTFOLIO_DATA = {
    "title": "Portfolio",
    "platforms": [
        {
            "name": "GitHub Projects",
            "icon": "fa-github",
            "url": "https://github.com/letspython3x/",
            "description": "Check out my open-source projects and code repositories"
        },
        {
            "name": "Technical Articles",
            "icon": "fa-medium",
            "url": "https://medium.com/@letspython3.x",
            "description": "Read my in-depth technical tutorials and insights"
        },
        {
            "name": "Video Tutorials",
            "icon": "fa-youtube",
            "url": "https://www.youtube.com/@LetsPython3x",
            "description": "Watch my coding tutorials and tech discussions"
        }
    ],
    "skills": [
        {
            "title": "Full-Stack Development",
            "description": "11+ years of expertise in complete Software Development Life Cycle (SDLC) including requirements analysis, architecture design, development, testing, and deployment."
        },
        {
            "title": "Backend Technologies",
            "description": "Proficient in Python, Django, Flask, FastAPI, Node.js, and Express. Experienced in building RESTful APIs, microservices, and serverless architectures."
        },
        {
            "title": "Frontend Development",
            "description": "Expert in React, Next.js, JavaScript/TypeScript, HTML5, and CSS3. Skilled in building responsive, accessible, and performant user interfaces."
        }
    ]
};

// Load Portfolio Section
function loadPortfolioSection() {
    const data = PORTFOLIO_DATA;
    if (!data) return;

    const portfolioSection = document.getElementById('portfolio-section');
    if (!portfolioSection) return;

    // Generate platforms HTML
    const platformsHTML = data.platforms.map(platform => {
        return `
        <div class="col-4 col-12-mobile">
            <article class="platform-card">
                <div class="platform-icon">
                    <i class="icon brands ${platform.icon}"></i>
                </div>
                <header>
                    <h3>${platform.name}</h3>
                </header>
                <p>${platform.description}</p>
                <div class="platform-link">
                    <a href="${platform.url}" target="_blank" class="button small">Visit</a>
                </div>
            </article>
        </div>`;
    }).join('');

    // Generate skills HTML
    const skillsHTML = data.skills.map(skill => {
        return `
        <div class="col-4 col-12-mobile">
            <section class="skill-item">
                <header>
                    <h3>${skill.title}</h3>
                </header>
                <p>${skill.description}</p>
            </section>
        </div>`;
    }).join('');

    const html = `
    <section id="portfolio" class="two">
        <div class="container">
            <header>
                <h2>${data.title}</h2>
            </header>

            <div class="row">
                ${platformsHTML}
            </div>

            <div class="row skills-row">
                ${skillsHTML}
            </div>
        </div>
    </section>`;

    portfolioSection.innerHTML = html;
}

// Export the function for use in main loader
window.loadPortfolioSection = loadPortfolioSection;
