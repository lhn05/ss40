let addPlayer = () => {
    let playerName = document.getElementById("playerName").value.trim();

    if (playerName) {
        let playerId = generateRandomId();
        let players = JSON.parse(localStorage.getItem("players")) || {};
        players[playerId] = playerName;
        localStorage.setItem("players", JSON.stringify(players));
        displayPlayers();
    }
};

let displayPlayers = () => {
    let playerList = document.getElementById("playerList");
    playerList.innerHTML = "";

    let players = JSON.parse(localStorage.getItem("players")) || {};

    for (let playerId in players) {
        let playerName = players[playerId];
        let listItem = document.createElement("li");
        listItem.textContent = `ID: ${playerId}, Tên: ${playerName}`;
        playerList.appendChild(listItem);
    }
};

let deletePlayer = () => {
    let deletePlayerId = document.getElementById("deletePlayerId").value.trim();

    if (deletePlayerId) {
        let players = JSON.parse(localStorage.getItem("players")) || {};

        for (let playerId in players) {
            if (playerId === deletePlayerId) {
                delete players[playerId];
                break;
            }
        }

        localStorage.setItem("players", JSON.stringify(players));
        displayPlayers();
    }
};

let generateRandomId = () => {
    let min = 100;
    let max = 9999;
    return Math.floor(min + Math.random() * (max - min)).toString();
};

displayPlayers();
