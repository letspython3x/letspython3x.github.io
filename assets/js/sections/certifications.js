/**
 * Certifications Section Module
 */

// Certifications section data
const CERTIFICATIONS_DATA = {
    "title": "Certifications & Training",
    "intro": "I'm committed to continuous learning and professional development. Here are some of my certifications and completed training programs.",
    "certifications": [
        {
            "title": "AWS Certified Solutions Architect",
            "issuer": "Amazon Web Services",
            "date": "2024",
            "description": "Validated expertise in designing distributed systems on AWS, including deployment of applications, implementation of security controls, and designing for reliability and performance.",
            "image": "images/cert-aws.png",
            "verificationUrl": "https://www.credly.com/badges"
        },
        {
            "title": "Professional Scrum Master I (PSM I)",
            "issuer": "Scrum.org",
            "date": "2023",
            "description": "Demonstrated understanding of Scrum framework and ability to apply Scrum in team environments to deliver high-value products.",
            "image": "images/cert-scrum.png",
            "verificationUrl": "https://www.scrum.org/certificates"
        },
        {
            "title": "MongoDB Certified Developer",
            "issuer": "MongoDB University",
            "date": "2022",
            "description": "Validated proficiency in MongoDB application development, including data modeling, indexing strategies, aggregation framework, and performance optimization.",
            "image": "images/cert-mongodb.png",
            "verificationUrl": "https://university.mongodb.com/certification"
        },
        {
            "title": "Microsoft Certified: Azure Developer Associate",
            "issuer": "Microsoft",
            "date": "2021",
            "description": "Demonstrated ability to design, build, test, and maintain cloud applications and services on Microsoft Azure.",
            "image": "images/cert-azure.png",
            "verificationUrl": "https://learn.microsoft.com/en-us/certifications"
        }
    ]
};

// Load Certifications Section
function loadCertificationsSection() {
    const data = CERTIFICATIONS_DATA;
    if (!data) return;

    const certificationsSection = document.getElementById('certifications-section');
    if (!certificationsSection) return;

    // Generate certifications HTML
    const certificationsHTML = data.certifications.map(cert => {
        return `
        <div class="col-6 col-12-medium">
            <article class="certification-card">
                <div class="certification-header">
                    <div class="certification-image">
                        <img src="${cert.image}" alt="${cert.title} Logo" />
                    </div>
                    <div class="certification-title">
                        <h3>${cert.title}</h3>
                        <p class="issuer">${cert.issuer} | ${cert.date}</p>
                    </div>
                </div>
                <div class="certification-content">
                    <p>${cert.description}</p>
                    <a href="${cert.verificationUrl}" target="_blank" class="verify-link">Verify Credential</a>
                </div>
            </article>
        </div>`;
    }).join('');

    const html = `
    <section id="certifications" class="six">
        <div class="container">
            <header>
                <h2>${data.title}</h2>
            </header>

            <p class="section-intro">${data.intro}</p>

            <div class="row certifications-grid">
                ${certificationsHTML}
            </div>
        </div>
    </section>`;

    certificationsSection.innerHTML = html;
}

// Export the function for use in main loader
window.loadCertificationsSection = loadCertificationsSection;
