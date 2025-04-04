document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        // Handle click event
        box.addEventListener("click", function () {
            const page = box.getAttribute("data-page");
            if (page) {
                document.body.style.cursor = "wait"; // Show loading cursor
                setTimeout(() => {
                    window.location.href = page;
                }, 200); // Simulate a short delay
            } else {
                console.error("No page specified for this box.");
                alert("This feature is not yet available.");
            }
        });

        // Handle keyboard navigation (Enter key)
        box.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                const page = box.getAttribute("data-page");
                if (page) {
                    window.location.href = page;
                }
            }
        });
    });
});