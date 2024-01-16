let creepy_guy = document.getElementById("cripay");
// Get all elements on the page
var allElements = document.querySelectorAll('*');


function hasOneInTwoHundredChance() {
    // Generate a random number between 1 and 200
    const randomNumber = Math.floor(Math.random() * 200) + 1;
  
    // Check if the random number equals 1
    return randomNumber === 1;
  }

// Function to reveal elements based on scroll position
function reveal() {
    let value = window.scrollY;
    // let side = window.scrollX;
    // if (side > 0) {
    //     window.scroll(0, window.scrollY);
    //     document.documentElement.style.overflowX = "hidden"
    //     document.documentElement.style.scrollBehavior = "auto"
    // };
    // if (side == 0) {
    //     document.documentElement.style.overflowX = "visible"
    //     document.documentElement.style.scrollBehavior = "smooth"
    // };


    // if (value * 0.1 <= 30) {
    //     creepy_guy.style.transform = `translateY(${value}px) rotate(-${value * 0.1}deg)`;
    // }
    // else {
    //     creepy_guy.style.transform = `translateY(${value}px) rotate(-30deg)`;
    // };

    // if (hasOneInTwoHundredChance()) {
    //     creepy_guy.classList.add("eyes")
    // };

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