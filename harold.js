document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("dark-mode");

});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
        });
        navLink.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});

/*Link to different sections */
document.addEventListener('DOMContentLoaded', function() {
    const homeSection = document.getElementById('home');
    const projectSection = document.getElementById('project');
    const connectSection = document.getElementById('connect'); 
    const skillSection = document.getElementById("skill");
    
    const homeLink = document.getElementById('home-link');
    const projectLink = document.getElementById('project-link');
    const connectLink = document.getElementById('connect-link'); 
    const skillLink = document.getElementById('skill-link')
    
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'block';
        projectSection.style.display = 'none';
        connectSection.style.display = 'none';
        skillSection.style.display = "none";
    });
    
    projectLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'none';
        projectSection.style.display = 'block';
        connectSection.style.display = 'none';
        skillSection.style.display = "none";
    });

    connectLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'none';
        projectSection.style.display = 'none';
        connectSection.style.display = 'block';
        skillSection.style.display = "none";

    });

    skillLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'none';
        projectSection.style.display = 'none';
        connectSection.style.display = 'none';
        skillSection.style.display = "block";

    });
});

/*Page animation*/ 
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");

    function slideUpSection() {
        sections.forEach(function(section) {
            if (isElementInViewport(section)) {
                section.classList.add("slide-up");
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener("scroll", slideUpSection);
    window.addEventListener("resize", slideUpSection);
    window.addEventListener("DOMContentLoaded", slideUpSection);
    window.addEventListener("load", slideUpSection);
});


// Skill boxes
document.addEventListener("DOMContentLoaded", function() {
    const skillBoxes = document.querySelectorAll('.skill-box');

    skillBoxes.forEach(skillBox => {
        skillBox.addEventListener('click', () => {
            const description = skillBox.querySelector('.skill-description');
            const isVisible = window.getComputedStyle(description).display !== 'none';
            
            if (!isVisible) {
                // Show the description with sliding animation
                description.style.display = 'block';
                description.style.height = 'auto'; // Set height to auto to measure content height
                const height = description.scrollHeight;
                description.style.height = '0px'; // Start with 0 height for animation
                description.offsetHeight; // Trigger reflow to apply new height
                description.style.transition = 'height 0.5s ease';
                description.style.height = height + 'px'; // Set the height to reveal content
            } else {
                // Hide the content inside immediately
                description.querySelectorAll('p').forEach(paragraph => {
                    paragraph.style.display = 'none';
                });
                // Hide the description box with sliding animation
                description.style.height = '0px'; // Set height to 0 for animation
                description.style.transition = 'height 0.5s ease';
                setTimeout(() => {
                    // Reset CSS properties to enable reopening
                    description.style.display = 'none'; // Hide the description after animation
                    description.querySelectorAll('p').forEach(paragraph => {
                        paragraph.style.display = 'block';
                    });
                }, 500); // Adjust the time to match the transition duration
            }
        });
    });
});


