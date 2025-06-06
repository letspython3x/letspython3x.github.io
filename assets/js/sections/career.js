/**
 * Career Section Module
 */

// Career section data
const CAREER_DATA = {
    "title": "Career Journey",
    "timeline": [
        {
            "period": "July 2023 - Present",
            "title": "Senior Software Engineer",
            "company": "Itsacheckmate",
            "description": "Leading full-stack development initiatives using Python, React, and NextJS. Architecting scalable solutions and mentoring junior developers. Implementing microservices architecture and CI/CD pipelines.",
            "tags": ["Python", "React", "NextJS", "MongoDB", "Docker"]
        },
        {
            "period": "Aug 2022 - June 2023",
            "title": "Senior Software Engineer",
            "company": "Bluetick Consultants",
            "description": "Leading full-stack development initiatives using Python, React, and NextJS. Architecting scalable solutions and mentoring junior developers. Implementing microservices architecture and CI/CD pipelines.",
            "tags": ["Python", "React", "NextJS", "MongoDB", "Docker"]
        },
        {
            "period": "Aug 2020 - June 2022",
            "title": "Senior Software Engineer",
            "company": "Rackspace (Tricore Solutions)",
            "description": "Leading full-stack development initiatives using Python, React, and NextJS. Architecting scalable solutions and mentoring junior developers. Implementing microservices architecture and CI/CD pipelines.",
            "tags": ["Python", "React", "NextJS", "MongoDB", "Docker"]
        },
        {
            "period": "Aug 2020 - July 2022",
            "title": "Senior Software Engineer",
            "company": "Gemini Solutions",
            "description": "Leading full-stack development initiatives using Python, React, and NextJS. Architecting scalable solutions and mentoring junior developers. Implementing microservices architecture and CI/CD pipelines.",
            "tags": ["Python", "React", "NextJS", "MongoDB", "Docker"]
        },
        {
            "period": "Aug 2016 - Nov 2017",
            "title": "DevOps Engineer",
            "company": "Global Analytics",
            "description": "Developed and maintained backend services using Python. Implemented RESTful APIs and database solutions. Collaborated with cross-functional teams to deliver high-quality software products.",
            "tags": ["Python", "SQL", "REST APIs", "Automation"]
        },
        {
            "period": "Feb 2014 - July 2016",
            "title": "Senior Software Engineer",
            "company": "Infosys",
            "description": "Worked on enterprise-level applications Python. Participated in all phases of the software development lifecycle. Gained experience in database design and optimization.",
            "tags": ["Python", "SQL"]
        },
        {
            "period": "2011 - 2014",
            "title": "B.Tech Engineering",
            "company": "Bhagwan Parshuram Institute of Technology",
            "description": "Completed B.Tech in Electronics and Communication Engineering. Gained foundational experience in programming and software development methodologies.",
            "tags": ["Electronics", "Communication", "Coding"]
        }
    ]
};

// Load Career Section
function loadCareerSection() {
    const data = CAREER_DATA;
    if (!data) return;

    const careerSection = document.getElementById('career-section');
    if (!careerSection) return;

    // Generate timeline HTML
    const timelineHTML = data.timeline.map(item => {
        const tagsHTML = item.tags.map(tag => `<span>${tag}</span>`).join('');
        
        return `
        <div class="timeline-item">
            <div class="timeline-date">${item.period}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <h4>${item.company}</h4>
                <p>${item.description}</p>
                <div class="tags-container">
                    ${tagsHTML}
                </div>
            </div>
        </div>`;
    }).join('');

    const html = `
    <section id="career" class="three">
        <div class="container">
            <header>
                <h2>${data.title}</h2>
            </header>

            <div class="timeline">
                ${timelineHTML}
            </div>
        </div>
    </section>`;

    careerSection.innerHTML = html;
}

// Export the function for use in main loader
window.loadCareerSection = loadCareerSection;
