function loginUser() {
    let loginEmail = document.getElementById("loginEmail").value.trim();
    let loginPassword = document.getElementById("loginPassword").value.trim();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let foundUser = users.find(user => user.email === loginEmail && user.password === loginPassword);
    if (foundUser) {
        sessionStorage.setItem("loggedInUser", JSON.stringify(foundUser));
        displayLoginMessage("Đăng nhập thành công!");
    } else {
        sessionStorage.removeItem("loggedInUser");
        displayLoginMessage("Đăng nhập không thành công!");
    }
}
function displayLoginMessage(message) {
    let loginMessage = document.getElementById("loginMessage");
    loginMessage.textContent = message;
}
