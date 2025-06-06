/**
 * Section Loader - Main module that loads all section modules
 */

// Main function to initialize all sections
document.addEventListener('DOMContentLoaded', function() {
    // Load section scripts dynamically
    loadSectionScripts().then(() => {
        // Initialize all sections after scripts are loaded
        initializeSections();
    });
});

// Function to load all section scripts dynamically
async function loadSectionScripts() {
    const sections = [
        'intro',
        'portfolio',
        'posts',
        'career',
        'projects',
        'certifications',
        'about'
    ];
    
    const promises = sections.map(section => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = `assets/js/sections/${section}.js`;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load ${section}.js`));
            document.head.appendChild(script);
        });
    });
    
    try {
        await Promise.all(promises);
        console.log('All section scripts loaded successfully');
    } catch (error) {
        console.error('Error loading section scripts:', error);
    }
}

// Function to initialize all sections
function initializeSections() {
    // Call each section's load function if it exists
    if (typeof window.loadIntroSection === 'function') loadIntroSection();
    if (typeof window.loadPortfolioSection === 'function') loadPortfolioSection();
    if (typeof window.loadPostsSection === 'function') loadPostsSection();
    if (typeof window.loadCareerSection === 'function') loadCareerSection();
    if (typeof window.loadProjectsSection === 'function') loadProjectsSection();
    if (typeof window.loadCertificationsSection === 'function') loadCertificationsSection();
    if (typeof window.loadAboutSection === 'function') loadAboutSection();
    
    // Initialize navigation after all sections are loaded
    initializeNav();
}

// Function to initialize navigation
function initializeNav() {
    // Re-initialize the template's navigation system
    jQuery(function($) {
        // Initialize scrolly
        $('.scrolly').scrolly();
        
        // Initialize nav
        var $nav_a = $('#nav a');
        
        // Scrolly-fy nav links
        $nav_a
            .scrolly()
            .on('click', function(e) {
                var href = $(this).attr('href');
                if (href[0] !== '#')
                    return;
                e.preventDefault();
                
                // Deactivate all nav links
                $nav_a.removeClass('active');
                
                // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section)
                $(this).addClass('active').addClass('active-locked');
            })
            .each(function() {
                var $this = $(this),
                    id = $this.attr('href'),
                    $section = $(id);
                
                // No section for this link? Bail.
                if ($section.length < 1)
                    return;
                
                // Scrollex
                $section.scrollex({
                    mode: 'middle',
                    top: '-10vh',
                    bottom: '-10vh',
                    initialize: function() {
                        // Deactivate section
                        $section.addClass('inactive');
                    },
                    enter: function() {
                        // Activate section
                        $section.removeClass('inactive');
                        
                        // No locked links? Activate link.
                        if ($nav_a.filter('.active-locked').length == 0) {
                            $nav_a.removeClass('active');
                            $this.addClass('active');
                        }
                        
                        // Otherwise, if this section's link is the one that's locked, unlock it.
                        else if ($this.hasClass('active-locked')) {
                            $this.removeClass('active-locked');
                        }
                    }
                });
            });
    });
}