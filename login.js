
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
  }

  // Simulate login (you can replace this with actual authentication logic)
  if (username === "wealthywiz" && password === "secure123") {
      window.location.href = "dashboard/dashboard.html"; // Redirect to the dashboard
  } else {
      alert("Invalid username or password.");
  }
});
  