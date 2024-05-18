document.addEventListener('DOMContentLoaded', function () {
    // Initialize text slider
    var textSwiper = new Swiper('.text-slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    // Initialize image slider
    var imageSwiper = new Swiper('.image-slider', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            640: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector(".navbar button[type='submit']");
    const searchBox = document.querySelector(".navbar .search-box");
    const gameCards = document.querySelectorAll(".game-card");

    // Search functionality
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();
        const searchTerm = searchBox.value.toLowerCase();
        gameCards.forEach(card => {
            const title = card.querySelector(".game-info h2").textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Add hover effect to game cards
    gameCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
        });
        card.addEventListener("mouseleave", function() {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".feedback-form form");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = {
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            email: emailInput.value.trim(),
            ageGroup: document.querySelector('input[name="age-group"]:checked')?.value,
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            comment: commentInput.value.trim(),
            services: document.querySelector('input[name="services"]:checked')?.value
        };

        // Validate the form data
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.comment) {
            alert("Please fill in all required fields.");
            return;
        }

        // Log the form data to the console (replace this with actual form submission)
        console.log("Form Submitted:", formData);

        // Show a success message
        alert("Thank you for your feedback!");

        // Clear the form
        form.reset();
    });

    // Optionally, add some interactivity to the emoji ratings
    const emojiRatings = document.querySelectorAll(".emoji-ratings input");
    emojiRatings.forEach(emoji => {
        emoji.addEventListener("change", function() {
            emojiRatings.forEach(e => e.parentElement.style.fontSize = "1em"); // Reset all emoji sizes
            this.parentElement.style.fontSize = "1.5em"; // Highlight the selected emoji
        });
    });
});
