document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("dark-mode");

});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".nav-item");
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


// Nav Bar Toggle
document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.getElementById('home');
    const projectSection = document.getElementById('project');
    const connectSection = document.getElementById('connect');
    const skillSection = document.getElementById('skill');
    const footerSection = document.getElementById('footer')
    const sections = [homeSection, projectSection, connectSection, skillSection,footerSection];
    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    let currentSection = homeSection; // Default to home section

    // Hide all sections
    function hideAllSections() {
        sections.forEach(section => section.style.display = 'none');
    }

    // Show a specific section
    function showSection(section) {
        hideAllSections();
        section.style.display = 'block';
        currentSection = section;
    }

    // Initial display setup
    showSection(currentSection);

    // Toggle section visibility with menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            hideAllSections(); // Hide sections when the menu is active
        } else {
            showSection(currentSection); // Show the current section when the menu is closed
        }
    });

    // Close Navigation Menu on Link Click and show corresponding section
    document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default anchor behavior

        const targetId = link.getAttribute("href").substring(1); // Get the target section id
        const targetSection = document.getElementById(targetId);

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

        showSection(targetSection); // Show the clicked section
    }));
});





  