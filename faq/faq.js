// faq.js
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", function () {
            // Toggle the dropdown animation
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null; // Collapse the answer
            } else {
                // Collapse all other answers
                faqItems.forEach(i => i.querySelector(".faq-answer").style.maxHeight = null);
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the clicked answer
            }
        });
    });
});
