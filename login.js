// =============================================================================
// MDT312 Assignment 6 login.js
// =============================================================================

window.onload = loginLoad;

function loginLoad() {
    const form = document.getElementById("myLogin");

    form.onsubmit = checkLogin;
}

function checkLogin(event) {
    // 1. ป้องกันหน้าเว็บ refresh เมื่อกด Submit
    event.preventDefault();

    // 2. Array of Objects
    const users = [
        {
            username: "admin",
            password: "123456"
        }
    ];

    // ดึงข้อมูลจาก localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // ถ้ามีข้อมูล ให้เพิ่มเข้า Array
    if (storedUsername && storedPassword) {
        users.push({
            username: storedUsername,
            password: storedPassword
        });
    }

    // 3. ตรวจสอบว่ามีข้อมูลผู้ใช้หรือไม่
    if (users.length === 0) {
        alert("ไม่พบข้อมูลผู้ใช้ในระบบ กรุณาลงทะเบียนที่หน้า Register ก่อน");
        window.location.href = "register.html";
        return false;
    }

    // 4. ดึงข้อมูลจาก Login form
    const usernameInput =
        document.forms["myLogin"]["username"].value.trim();

    const passwordInput =
        document.forms["myLogin"]["password"].value;

    // 5. ใช้ for loop ตรวจสอบ username และ password
    let isLoginSuccess = false;

    for (let i = 0; i < users.length; i++) {
        if (
            users[i].username === usernameInput &&
            users[i].password === passwordInput
        ) {
            isLoginSuccess = true;
            break;
        }
    }

    // 6. ตรวจสอบผล
    if (isLoginSuccess) {
        alert("Login success! ยินดีต้อนรับเข้าสู่ระบบ");
        return true;
    } else {
        alert("Username หรือ password ไม่ถูกต้อง");
        return false;
    }
}
