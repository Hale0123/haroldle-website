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


