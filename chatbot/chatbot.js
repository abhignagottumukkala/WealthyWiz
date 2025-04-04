// chatbot.js
const chatbotResponses = {
    "what is a mutual fund": "A mutual fund is an investment vehicle that pools money from many investors.",
    "how do i start investing": "Start by identifying your goals and assessing your risk tolerance.",
    "what is equity": "Equity is ownership in a company.",
    "explain difference between debt and equity": "Debt involves borrowing funds, while equity means ownership in the company.",
    "what is diversification": "Diversification involves spreading investments across various assets to reduce risk.",
    "what is a fixed deposit": "A fixed deposit is a low-risk investment where money is locked for a fixed period at a guaranteed interest rate.",
    "what is an emergency fund": "An emergency fund is a savings account set aside for unexpected expenses or emergencies.",
    "how much should i save for retirement": "A common rule is to save at least 15% of your income for retirement, but it depends on your goals.",
    "what is the 50/30/20 rule": "The 50/30/20 rule allocates 50% of income to needs, 30% to wants, and 20% to savings.",
    "what is compound interest": "Compound interest is interest calculated on the initial principal and also on the accumulated interest of previous periods.",
    "what is a stock": "A stock represents ownership in a company and a claim on its assets and earnings.",
    "what is a bond": "A bond is a fixed-income investment where you lend money to an entity in exchange for periodic interest payments.",
    "how do i reduce investment risk": "You can reduce risk by diversifying your portfolio and investing in low-risk assets like bonds or index funds.",
    "what is an index fund": "An index fund is a type of mutual fund designed to track the performance of a specific market index, like the S&P 500.",
    "what is risk tolerance": "Risk tolerance is your ability to handle losses in your investments without panic.",
    "how do i invest in real estate": "You can invest in real estate by buying property, investing in REITs, or crowdfunding platforms.",
    "what is a robo-advisor": "A robo-advisor is an automated platform that provides financial advice and investment management based on algorithms.",
    "how do i invest in gold": "You can invest in gold by buying physical gold, gold ETFs, or gold mutual funds.",
    "what is dollar-cost averaging": "Dollar-cost averaging is an investment strategy where you invest a fixed amount regularly, regardless of market conditions.",
    "what is a high-yield savings account": "A high-yield savings account offers a higher interest rate than a traditional savings account, ideal for short-term savings.",

    // Greetings and casual questions
    "hello": "Hello! How can I assist you today?",
    "hi": "Hi there! What financial questions can I help you with?",
    "hey": "Hey! Feel free to ask me anything about finance.",
    "how are you": "I'm just a bot, but I'm here to help you with your questions!",
    "what is your name": "I'm WealthyBot, your financial assistant.",
    "who are you": "I'm WealthyBot, a chatbot here to help you with financial queries.",
    "thank you": "You're welcome! Let me know if you have more questions.",
    "thanks": "You're welcome! I'm here to help anytime.",
    "bye": "Goodbye! Have a great day!",
    "goodbye": "Goodbye! Feel free to come back if you have more questions."
};

document.getElementById("sendBtn").addEventListener("click", function () {
    const userInput = document.getElementById("userInput").value.toLowerCase().trim(); // Convert to lowercase and trim spaces
    if (userInput === "") {
        displayMessage("Bot: Please enter a question.");
        return;
    }

    displayMessage("You: " + userInput);

    // Show typing indicator
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "message bot-typing";
    typingIndicator.innerText = "Bot is typing...";
    const chatBox = document.getElementById("chatBox");
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        const response = chatbotResponses[userInput] || 
            "I'm sorry, I don't have an answer for that. Try asking about topics like 'mutual funds', 'stocks', or 'retirement planning'.";
        chatBox.removeChild(typingIndicator); // Remove typing indicator
        displayMessage("Bot: " + response);
    }, 1000); // Simulate a delay for typing

    document.getElementById("userInput").value = ""; // Clear input field
});

// Add Enter key functionality
document.getElementById("userInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior (e.g., form submission)
        document.getElementById("sendBtn").click(); // Trigger the send button click
    }
});

function displayMessage(message) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.className = "message";
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function setSuggestion(question) {
    document.getElementById("userInput").value = question;
    document.getElementById("sendBtn").click();
}
