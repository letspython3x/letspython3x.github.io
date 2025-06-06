/**
 * Posts Section Module
 */

// Posts section data
const POSTS_DATA = {
    "title": "Latest Posts",
    "intro": "I regularly write about software development, best practices, and emerging technologies.",
    "viewMoreLink": "https://medium.com/@letspython3.x",
    "posts": [
        {
            "title": "Building Scalable Microservices with Python and FastAPI",
            "excerpt": "Learn how to design and implement scalable microservices architecture using Python and FastAPI framework.",
            "image": "images/post1.jpg",
            "imageAlt": "Microservices Architecture Diagram",
            "url": "https://medium.com/@letspython3.x",
            "date": "May 15, 2025",
            "readTime": "8 min read",
            "tags": ["Python", "Microservices", "FastAPI"],
            "featured": true
        },
        {
            "title": "React Performance Optimization Techniques",
            "excerpt": "Discover advanced techniques to optimize your React applications for better performance and user experience.",
            "image": "images/post2.jpg",
            "imageAlt": "React Performance Chart",
            "url": "https://medium.com/@letspython3.x",
            "date": "April 22, 2025",
            "readTime": "6 min read",
            "tags": ["React", "JavaScript", "Performance"],
            "featured": false
        },
        {
            "title": "Implementing CI/CD Pipelines with GitHub Actions",
            "excerpt": "A step-by-step guide to setting up continuous integration and deployment pipelines using GitHub Actions.",
            "image": "images/post3.jpg",
            "imageAlt": "CI/CD Pipeline Diagram",
            "url": "https://medium.com/@letspython3.x",
            "date": "March 10, 2025",
            "readTime": "10 min read",
            "tags": ["DevOps", "CI/CD", "GitHub"],
            "featured": false
        }
    ]
};

// Load Posts Section
function loadPostsSection() {
    const data = POSTS_DATA;
    if (!data) return;

    const postsSection = document.getElementById('posts-section');
    if (!postsSection) return;

    // Generate posts HTML
    const postsHTML = data.posts.map(post => {
        const tagsHTML = post.tags.map(tag => `<span>${tag}</span>`).join('');
        const featuredClass = post.featured ? 'featured' : '';
        
        return `
        <article class="blog-card ${featuredClass}">
            <div class="blog-card-inner">
                <a href="${post.url}" target="_blank" class="image fit">
                    <div class="card-image-container">
                        <img src="${post.image}" alt="${post.imageAlt}" />
                        <div class="overlay">
                            <div class="overlay-content">
                                <span class="read-more">Read Article</span>
                            </div>
                        </div>
                    </div>
                </a>
                <div class="card-content">
                    <div class="card-tags">
                        ${tagsHTML}
                    </div>
                    <header>
                        <h3>${post.title}</h3>
                    </header>
                    <p class="card-excerpt">${post.excerpt}</p>
                    <div class="card-meta">
                        <span class="date">${post.date}</span>
                        <span class="read-time">${post.readTime}</span>
                    </div>
                </div>
            </div>
        </article>`;
    }).join('');

    const html = `
    <section id="posts" class="two" style="background-color: #f7f7f7;">
        <div class="container">
            <header>
                <h2>${data.title}</h2>
            </header>

            <p class="section-intro">${data.intro}</p>

            <div class="blog-grid">
                ${postsHTML}
            </div>

            <div class="view-more-container">
                <a href="${data.viewMoreLink}" target="_blank" class="button view-more">View More Articles</a>
            </div>
        </div>
    </section>`;

    postsSection.innerHTML = html;
}

// Export the function for use in main loader
window.loadPostsSection = loadPostsSection;
