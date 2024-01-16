// Function to reveal elements based on scroll position
function reveal() {
    // Selecting elements with class "reveal", "warning", and "animate"
    var reveals = document.querySelectorAll(".reveal");

    // Loop through elements with class "reveal"
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        // Check if the element is within the visible range
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

// Event listener for scroll event, calling the reveal function
window.addEventListener("scroll", reveal);