// TODO: Find a better way to scope/link modules
var signalSocket = new WebSocket("ws://localhost:3000");
var roomName;

function sendMessage(msgType, room, message) {
  var package = Object.assign(msgType, room, message);
  // console.log("Sending through socket: ", package);
  signalSocket.send(JSON.stringify({package}));
}

function joinRoom() {
  roomName = document.getElementById("roomNameInput").value;
  let select = document.getElementById('playerColorID');
  playerColorPreference = select.options[select.selectedIndex].value;
  sendMessage({msgType: "join"}, {room: roomName}, {});
};

signalSocket.onopen = function (event) {
  // Hook up listeners
  console.log("Signal Socket opened!");
}

signalSocket.onmessage = function (event) {
  let message = JSON.parse(event.data);
  let room = message.room;
  // console.log("Received message from server ", message);
  switch (message.msgType) {
    case "full":
      alert('Room is full');
      // console.log('Room ' + room + '  is full');
      break;

    case "joined":
      let numConnections = message.numConnections
      if (numConnections == 1) {
        // Created a room
        // console.log(`${room} has ${numConnections} clients`);
        alert("Joined room successfully, waiting for other player ... ");
        isInitiator = true;
      } else {
        // console.log(`${room} has ${numConnections} clients`);
        isChannelReady = true;

        // Initiate connection message to server
        if (isInitiator) {
          sendMessage( {msgType: "message"}, {room: roomName}, {msg: 'connect'});
        }
      }
      break;

    case "message":
      messageHandler(message);
      break;

    default:
      messageHandler(message);
      break;
  }
}

// This client receives a message
var messageHandler = function (message) {
  // console.log('Client received message:', message.msg);

  if (message.msg === 'connect') {
    if (!isInitiator) {
      sendMessage( {msgType: "message"}, {room: roomName}, {msg: 'connect'});
    }
    maybeStart();
  } else if (message.type === 'offer') {
    if (!isInitiator && !isStarted) {
      maybeStart();
    }
    pc.setRemoteDescription(new RTCSessionDescription(message));
    doAnswer();
  } else if (message.type === 'answer' && isStarted) {
    pc.setRemoteDescription(new RTCSessionDescription(message));
  } else if (message.type === 'candidate' && isStarted) {
    var candidate = new RTCIceCandidate({
      sdpMLineIndex: message.label,
      candidate: message.candidate
    });
    pc.addIceCandidate(candidate);
  } else if (message.msg === 'bye' && isStarted) {
    handleRemoteHangup();
  }
};