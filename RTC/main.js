let joinBtn = document.getElementById("join-btn");
let peerConnectBtn = document.getElementById("peer-btn");
let roomName;

joinBtn.onclick = function() {
    roomName = window.prompt("Enter room name: ");
    sendMessage({msgType: "join"}, {room: roomName}, {});
};

peerConnectBtn.onclick = function() {
    sendMessage( {msgType: "message"}, {room: roomName}, {msg: 'connect'});
}
