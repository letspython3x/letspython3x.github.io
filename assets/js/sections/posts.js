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
            "title": "PDF Compression Tool with Python and Ghostscript",
            "excerpt": "Learn how to compress PDF files using Python and Ghostscript.",
            "image": "assets/css/images/compress-pdf.webp",
            "imageAlt": "PDF Compression Tool",
            "url": "https://medium.com/@letspython3.x/pdf-compression-tool-with-python-and-ghostscript-e0f25d35d958",
            "date": "May 15, 2025",
            "readTime": "8 min read",
            "tags": ["Python", "Ghostscript", "PDF"],
            "featured": true
        },
        {
            "title": "What if I had bought Nifty50 every day since year 2000 ?",
            "excerpt": "Discover the potential returns of buying Nifty50 every day since year 2000.",
            "image": "assets/css/images/nifty50.webp",
            "imageAlt": "Nifty50",
            "url": "https://medium.com/@letspython3.x/what-if-i-had-bought-nifty50-every-day-since-year-2000-60b20cb78545",
            "date": "April 22, 2025",
            "readTime": "6 min read",
            "tags": ["Nifty50", "Stocks", "Investing"],
            "featured": false
        },
        {
            "title": "Gotta MacOS Install Homebrew, iTerm2, Zsh, Oh My Zsh",
            "excerpt": "A step-by-step guide to setting up a new MacOS system with Homebrew, iTerm2, Zsh, and Oh My Zsh.",
            "image": "assets/css/images/macos-setup.webp",
            "imageAlt": "MacOS Setup",
            "url": "https://medium.com/@letspython3.x/gotta-macos-install-homebrew-iterm2-zsh-ohmyzsh-4b620e7ac0d",
            "date": "March 10, 2025",
            "readTime": "10 min read",
            "tags": ["MacOS", "Homebrew", "iTerm2", "Zsh", "Oh My Zsh"],
            "featured": false
        },
        {
            "title": "Learn and Implement Candlestick Patterns in Python",
            "excerpt": "A step-by-step guide to setting up a new MacOS system with Homebrew, iTerm2, Zsh, and Oh My Zsh.",
            "image": "assets/css/images/candlestick.webp",
            "imageAlt": "Candlestick Patterns",
            "url": "https://medium.com/@letspython3.x/learn-and-implement-candlestick-patterns-python-6de09854fa3e",
            "date": "Dec 20, 2022",
            "readTime": "8 min read",
            "tags": ["Candlestick", "Python", "Stocks", "Investing"],
            "featured": false
        },
        {
            "title": "Python File Format Conversion: RPT to CSV Files",
            "excerpt": "A step-by-step guide to setting up a new MacOS system with Homebrew, iTerm2, Zsh, and Oh My Zsh.",
            "image": "assets/css/images/rpt-to-csv.jpg",
            "imageAlt": "RPT to CSV Conversion",
            "url": "https://medium.com/@letspython3.x/python-file-format-conversion-rpt-to-csv-files-e0ca7d1cd7b2",
            "date": "Nov 13, 2022",
            "readTime": "2 min read",
            "tags": ["Python", "File Format Conversion", "RPT", "CSV"],
            "featured": false
        },
        {
            "title": "PyCharm Configuration to Run Pytest",
            "excerpt": "A step-by-step guide to setting up PyCharm to run pytest.",
            "image": "assets/css/images/pycharm-setup.jpg",
            "imageAlt": "PyCharm Setup",
            "url": "https://medium.com/@letspython3.x/pycharm-configuration-to-run-pytest-5ea9929a6c4",
            "date": "Nov 11, 2022",
            "readTime": "2 min read",
            "tags": ["PyCharm", "pytest"],
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
