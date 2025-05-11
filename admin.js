function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password123") {
        document.querySelector(".login-form").style.display = "none";
        document.getElementById("adminContent").style.display = "block";
        alert("Login successful!");
    } else {
        alert("Invalid credentials!");
    }
}

function logout() {
    document.querySelector(".login-form").style.display = "block";
    document.getElementById("adminContent").style.display = "none";
    alert("Logged out!");
}
