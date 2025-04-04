document.addEventListener("DOMContentLoaded", function () {
    const quizBox = document.getElementById("quiz-box");
    const submitButton = document.getElementById("submit-btn"); // Use the existing button from HTML

    // Example quiz questions
    const questions = [
        {
            question: "What is a budget?",
            options: ["A financial plan", "A type of loan", "A savings account", "An investment strategy"],
            answer: 0
        },
        {
            question: "What does APR stand for?",
            options: ["Annual Percentage Rate", "Annual Payment Ratio", "Average Payment Rate", "Annual Profit Rate"],
            answer: 0
        },
        {
            question: "What is the purpose of an emergency fund?",
            options: ["To pay for vacations", "To cover unexpected expenses", "To invest in stocks", "To buy luxury items"],
            answer: 1
        },
        {
            question: "What is compound interest?",
            options: [
                "Interest calculated on the initial principal only",
                "Interest calculated on the principal and previously earned interest",
                "A type of loan interest",
                "Interest that decreases over time"
            ],
            answer: 1
        },
        {
            question: "Which of the following is considered a liability?",
            options: [
                "A savings account",
                "A car loan",
                "An investment portfolio",
                "A retirement fund"
            ],
            answer: 1
        },
        {
            question: "What is the primary purpose of a credit score?",
            options: [
                "To determine your annual income",
                "To measure your financial literacy",
                "To assess your creditworthiness for loans",
                "To calculate your tax liability"
            ],
            answer: 2
        },
        {
            question: "What does diversification mean in investing?",
            options: [
                "Investing all your money in one stock",
                "Spreading investments across different assets to reduce risk",
                "Avoiding investments in risky assets",
                "Investing only in government bonds"
            ],
            answer: 1
        },
        {
            question: "What is the 50/30/20 rule in budgeting?",
            options: [
                "50% savings, 30% investments, 20% expenses",
                "50% needs, 30% wants, 20% savings",
                "50% income, 30% debt repayment, 20% leisure",
                "50% taxes, 30% bills, 20% savings"
            ],
            answer: 1
        },
        {
            question: "What is an example of a fixed expense?",
            options: [
                "Groceries",
                "Electricity bill",
                "Rent or mortgage payment",
                "Entertainment"
            ],
            answer: 2
        },
        {
            question: "What is the purpose of a retirement account like a 401(k)?",
            options: [
                "To save for emergencies",
                "To save for education expenses",
                "To save for retirement",
                "To invest in real estate"
            ],
            answer: 2
        }
    ];

    // Render the quiz questions
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-box");

        const questionText = document.createElement("h3");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        const optionsList = document.createElement("ul");
        optionsList.classList.add("options");

        q.options.forEach((option, i) => {
            const optionItem = document.createElement("li");

            const optionInput = document.createElement("input");
            optionInput.type = "radio";
            optionInput.name = `question-${index}`;
            optionInput.value = i;

            const optionLabel = document.createElement("label");
            optionLabel.textContent = option;

            optionItem.appendChild(optionInput);
            optionItem.appendChild(optionLabel);
            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        quizBox.appendChild(questionDiv);
    });

    // Handle quiz submission
    submitButton.addEventListener("click", function () {
        let score = 0;

        questions.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption && parseInt(selectedOption.value) === q.answer) {
                score++;
            }
        });

        // Display the score in a styled box
        const scoreBox = document.getElementById("score-box");
        scoreBox.style.display = "block";
        scoreBox.textContent = `You scored ${score} out of ${questions.length}!`;
    });
});