const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "min", "twozero" && password === "12345") {
        location.href='../pages/main.html'
        alert("환영합니다.");
        //location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
        alert("아이디나 패스워드가 일치하지 않습니다.");
    }
});