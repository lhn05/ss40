function addPlayer() {
    let playerName = document.getElementById("playerName").value;
    let playerId = new Date().getTime().toString();
    let players = JSON.parse(localStorage.getItem("players")) || {};
    players[playerId] = playerName;
    localStorage.setItem("players", JSON.stringify(players));
    displayPlayers();
}
function displayPlayers() {
    let playerList = document.getElementById("playerList");
    playerList.innerHTML = "";
    let players = JSON.parse(localStorage.getItem("players")) || {};
    for (let playerId in players) {
        let playerName = players[playerId];

        let listItem = document.createElement("li");
        listItem.textContent = playerName;
        playerList.appendChild(listItem);
    }
}
displayPlayers();
