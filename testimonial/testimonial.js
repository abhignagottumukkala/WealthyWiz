document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        {
            name: "John Doe",
            feedback: "This platform has completely changed the way I manage my finances. Highly recommended!",
            date: "March 20, 2025"
        },
        {
            name: "Jane Smith",
            feedback: "The tools and resources provided here are top-notch. I feel more confident about my financial future.",
            date: "March 15, 2025"
        },
        {
            name: "Michael Brown",
            feedback: "The glossary and FAQ sections are incredibly helpful. Great job!",
            date: "March 10, 2025"
        }
    ];

    const testimonialBox = document.getElementById("testimonial-box");

    // Dynamically add testimonials to the DOM
    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement("div");
        testimonialDiv.classList.add("testimonial");

        testimonialDiv.innerHTML = `
            <p class="feedback">"${testimonial.feedback}"</p>
            <p class="testimonial-author">- ${testimonial.name}</p>
            <p class="testimonial-date">${testimonial.date}</p>
        `;

        testimonialBox.appendChild(testimonialDiv);
    });

    // Slideshow functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll(".testimonial");

    function showSlide(index) {
        slides.forEach((slide) => (slide.style.display = "none"));
        slides[index].style.display = "block";
    }

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Show the first slide
    showSlide(currentSlide);
});
