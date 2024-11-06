// Show or hide the button based on scroll position
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

// Scroll to the top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
}

function searchTools() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const tools = document.querySelectorAll('.tool-card');

    tools.forEach(tool => {
        const toolName = tool.querySelector('h2').textContent.toLowerCase();
        if (toolName.includes(query)) {
            tool.style.display = "block";
        } else {
            tool.style.display = "none";
        }
    });
}
