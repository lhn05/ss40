function saveInfo() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let userInfo = {
        name: name,
        age: age,
        email: email
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    displayInfo();
}
function displayInfo() {
    let storedInfo = localStorage.getItem("userInfo");
    if (storedInfo) {
        let userInfo = JSON.parse(storedInfo);
        let displayDiv = document.getElementById("displayInfo");
        displayDiv.innerHTML = `
            <p><strong>Họ tên:</strong> ${userInfo.name}</p>
            <p><strong>Tuổi:</strong> ${userInfo.age}</p>
            <p><strong>Email:</strong> ${userInfo.email}</p>
        `;
    }
}
displayInfo();
