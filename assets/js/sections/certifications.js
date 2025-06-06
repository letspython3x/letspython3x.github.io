/**
 * Certifications Section Module
 */

// Certifications section data
const CERTIFICATIONS_DATA = {
    "title": "Certifications & Training",
    "intro": "I'm committed to continuous learning and professional development. Here are some of my certifications and completed training programs.",
    "certifications": [
        {
            "title": "Advanced Options Concepts - Probability, Greeks, Simulation",
            "issuer": "Udemy",
            "date": "Jan 2024",
            "description": "Validated expertise in advanced options concepts, including probability, Greeks, and simulation.",
            "image": "assets/css/images/option-greeks.webp",
            "verificationUrl": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6bd023a2-0d58-483f-a2dc-c54c3708494b.pdf"
        },
        {
            "title": "The Complete FastAPI Course With OAuth & JWT Authentication",
            "issuer": "Udemy",
            "date": "Jan 2023",
            "description": "Demonstrated understanding of FastAPI framework",
            "image": "assets/css/images/cert-fastapi.png",
            "verificationUrl": "https://www.udemy.com/certificate/UC-7422906a-4537-492e-a7e2-7a4e18630d92/"
        },
        {
            "title": "Stock market factor investing quantitative trading",
            "issuer": "Udemy",
            "date": "Dec 2022",
            "description": "Demonstrated proficiency in stock market factor investing and quantitative trading.",
            "image": "assets/css/images/cert-stock-trading.jpg",
            "verificationUrl": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-2a5ac93e-a899-4452-a16b-9d611d1fe750.pdf"
        },
        {
            "title": "Interactive Brokers Python Api Advanced Concepts",
            "issuer": "Udemy",
            "date": "Nov 2022",
            "description": "Demonstrated proficiency in Interactive Brokers Python API advanced concepts.",
            "image": "assets/css/images/cert-ib.png",
            "verificationUrl": "https://udemy-certificate.s3.amazonaws.com/pdf/UC-fac918c3-ebf1-4cc0-a309-dbf1046468a4.pdf"
        },
        {
            "title": "Introduction to Kubernetes",
            "issuer": "Linux Academy",
            "date": "Aug 2021",
            "description": "Demonstrated proficiency in Kubernetes introduction.",
            "image": "images/cert-kubernetes.png",
            "verificationUrl": ""
        },
        {
            "title": "Docker",
            "issuer": "LinkedIn",
            "date": "Jan 2020",
            "description": "Demonstrated proficiency in learning Docker.",
            "image": "assets/css/images/cert-docker.jpeg",
            "verificationUrl": "https://www.linkedin.com/learning/certificates/02c6a173aac4ca0e640bba548bbcba19a9fb94b8a1e820a5741f4fd4d025dd16?trk=backfilled_certificate"
        },
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
