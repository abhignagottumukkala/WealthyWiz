document.addEventListener("DOMContentLoaded", function () {
  const glossary = {
      "Budget": "A financial plan that helps you manage your income and expenses.",
      "APR": "Annual Percentage Rate, the annual rate charged for borrowing or earned through an investment.",
      "Compound Interest": "Interest calculated on the initial principal and also on the accumulated interest of previous periods.",
      "Liability": "A financial obligation or debt owed by an individual or company.",
      "Diversification": "The practice of spreading investments across various financial assets to reduce risk.",
      "Emergency Fund": "A savings account set aside for unexpected expenses or financial emergencies.",
      "Credit Score": "A numerical representation of a person's creditworthiness, used by lenders to evaluate loan applications.",
      "401(k)": "A retirement savings plan sponsored by an employer that allows employees to save and invest a portion of their paycheck.",
      "Fixed Expense": "A cost that does not change from month to month, such as rent or a car payment.",
      "50/30/20 Rule": "A budgeting rule that allocates 50% of income to needs, 30% to wants, and 20% to savings.",
      "Net Worth": "The total value of an individual's assets minus their liabilities.",
      "Asset": "Anything of value that can be owned, such as cash, property, or investments.",
      "Debt-to-Income Ratio": "A measure of an individual's monthly debt payments compared to their monthly income.",
      "Inflation": "The rate at which the general level of prices for goods and services rises, reducing purchasing power.",
      "Interest Rate": "The percentage charged on a loan or earned on an investment over a specific period.",
      "Mutual Fund": "An investment vehicle that pools money from multiple investors to purchase securities like stocks and bonds.",
      "Stock": "A type of security that represents ownership in a company and a claim on its assets and earnings.",
      "Bond": "A fixed-income investment where an investor loans money to an entity for a defined period at a fixed interest rate.",
      "ETF": "Exchange-Traded Fund, a type of investment fund traded on stock exchanges, similar to stocks.",
      "Robo-Advisor": "An automated platform that provides financial advice and investment management based on algorithms.",
      "Capital Gain": "The profit earned from the sale of an asset, such as stocks or real estate.",
      "Tax Deduction": "An expense that can be subtracted from taxable income to reduce the amount of taxes owed.",
      "Liquidity": "The ease with which an asset can be converted into cash without affecting its market price.",
      "Savings Account": "A bank account that earns interest on the deposited funds and is used for saving money.",
      "Index Fund": "A type of mutual fund designed to track the performance of a specific market index, like the S&P 500.",
      "P/E Ratio": "Price-to-Earnings Ratio, a valuation metric for stocks calculated by dividing the stock price by earnings per share."
  };

  const input = document.getElementById("glossary-input");
  const button = document.getElementById("glossary-btn");
  const resultDiv = document.getElementById("glossary-result");

  button.addEventListener("click", function () {
      const searchTerm = input.value.trim().toLowerCase(); // Convert input to lowercase
      if (searchTerm === "") {
          resultDiv.innerHTML = "<p>Please enter a term to search.</p>";
          return;
      }

      // Perform a case-insensitive search
      const definition = Object.keys(glossary).find(key => key.toLowerCase() === searchTerm);
      if (definition) {
          resultDiv.innerHTML = `<p><strong>${definition}:</strong> ${glossary[definition]}</p>`;
      } else {
          resultDiv.innerHTML = `<p>No definition found for <strong>${searchTerm}</strong>.</p>`;
      }

      // Clear the input field after search (optional)
      input.value = "";
  });
});
