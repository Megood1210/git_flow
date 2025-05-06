// Khi người dùng bấm nút Đăng nhập
window.addEventListener("load", function () {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    if (savedEmail && savedPassword) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("password").value = savedPassword;
        document.getElementById("rememberMe").checked = true;
    }
});

document.querySelector(".login").addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("rememberMe").checked;
    const message = document.getElementById("loginMessage");

    message.textContent = "";

    if (email === "" || password === "") {
        message.textContent = "Vui lòng nhập đầy đủ email và mật khẩu.";
        message.style.color = "red";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        message.textContent = "Đăng nhập thành công!";
        message.style.color = "green";
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Nếu chọn nhớ đăng nhập thì lưu lại
        if (remember) {
            localStorage.setItem("rememberedEmail", email);
            localStorage.setItem("rememberedPassword", password);
        } else {
            localStorage.removeItem("rememberedEmail");
            localStorage.removeItem("rememberedPassword");
        }

        setTimeout(() => {
        
        }, 1000);
    } else {
        message.textContent = "Sai email hoặc mật khẩu!";
        message.style.color = "red";
    }
});


