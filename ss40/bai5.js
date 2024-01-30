function registerUser() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    if (username && email && password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers();
    }
}
function displayUsers() {
    let userList = document.getElementById("userList");
    userList.innerHTML = "";
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach(user => {
        let listItem = document.createElement("li");
        listItem.textContent = `Tên: ${user.username}, Email: ${user.email}`;
        userList.appendChild(listItem);
    });
}
displayUsers();
