/**
 * Projects Section Module
 */

// Projects section data
const PROJECTS_DATA = {
    "title": "Featured Projects",
    "intro": "Here are some of my notable projects that showcase my technical skills and problem-solving abilities.",
    "projects": [
        {
            "title": "E-commerce Platform",
            "description": "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment integration, and order management.",
            "icon": "fa-shopping-cart",
            "technologies": ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
            "liveUrl": "https://github.com/letspython3x/",
            "githubUrl": "https://github.com/letspython3x/",
            "featured": true
        },
        {
            "title": "Task Management System",
            "description": "A collaborative task management application with real-time updates using WebSockets. Includes features like task assignment, progress tracking, deadline notifications, and team collaboration tools.",
            "icon": "fa-tasks",
            "technologies": ["Python", "Django", "PostgreSQL", "WebSockets", "React"],
            "liveUrl": "https://github.com/letspython3x/",
            "githubUrl": "https://github.com/letspython3x/",
            "featured": true
        },
        {
            "title": "AI Content Generator",
            "description": "An AI-powered content generation tool that creates blog posts, social media content, and marketing copy based on user prompts. Utilizes natural language processing and machine learning algorithms.",
            "icon": "fa-robot",
            "technologies": ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
            "liveUrl": "https://github.com/letspython3x/",
            "githubUrl": "https://github.com/letspython3x/",
            "featured": false
        },
        {
            "title": "Financial Dashboard",
            "description": "An interactive financial dashboard that visualizes stock market data, portfolio performance, and investment analytics. Features include real-time data updates and customizable charts.",
            "icon": "fa-chart-line",
            "technologies": ["JavaScript", "D3.js", "React", "Node.js", "Financial APIs"],
            "liveUrl": "https://github.com/letspython3x/",
            "githubUrl": "https://github.com/letspython3x/",
            "featured": false
        }
    ]
};

// Load Projects Section
function loadProjectsSection() {
    const data = PROJECTS_DATA;
    if (!data) return;

    const projectsSection = document.getElementById('projects-section');
    if (!projectsSection) return;

    // Generate projects HTML
    const projectsHTML = data.projects.map(project => {
        const techHTML = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        const featuredClass = project.featured ? 'featured-project' : '';
        
        return `
        <div class="col-6 col-12-medium">
            <article class="project-card ${featuredClass}">
                <div class="project-header">
                    <div class="project-icon">
                        <i class="icon solid ${project.icon || 'fa-code'}"></i>
                    </div>
                    <div class="project-links">
                        <a href="${project.liveUrl}" target="_blank" class="button small">Live Demo</a>
                        <a href="${project.githubUrl}" target="_blank" class="button small">GitHub</a>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${techHTML}
                    </div>
                </div>
            </article>
        </div>`;
    }).join('');

    const html = `
    <section id="projects" class="five">
        <div class="container">
            <header>
                <h2>${data.title}</h2>
            </header>

            <p class="section-intro">${data.intro}</p>

            <div class="row projects-grid">
                ${projectsHTML}
            </div>
        </div>
    </section>`;

    projectsSection.innerHTML = html;
}

// Export the function for use in main loader
window.loadProjectsSection = loadProjectsSection;
