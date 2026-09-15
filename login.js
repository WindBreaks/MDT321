// =============================================================================
// MDT312 Assignment 6 login.js
// =============================================================================

window.onload = pageLoad;

function pageLoad() {
    var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(event) {
    event.preventDefault();

    var username = document.forms["myLogin"]["username"].value;
    var password = document.forms["myLogin"]["password"].value;

    var savedUsername = localStorage.getItem("username");
    var savedPassword = localStorage.getItem("password");

    if (username == savedUsername && password == savedPassword) {
        alert("Login successful!");
    } 
    else {
        alert("Username or password is incorrect. Please try again.");
    }

    return false;
}
