// REGISTER
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = regName.value.trim();
    const email = regEmail.value.trim();
    const password = regPassword.value.trim();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    window.location.href = "login.html";
  });
}

// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.email !== email || user.password !== password) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    alert("Login successful!");
    window.location.href = "dashboard.html";
  });
}
