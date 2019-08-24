// TODO: Find a better way to scope/link modules
var signalSocket = new WebSocket("ws://localhost:8080");
var room = 'foo';

function sendMessage(msgType, room, message) {
  var package = Object.assign(msgType, room, message);
  console.log("Sending through socket: ", package);
  signalSocket.send(JSON.stringify({package}));
}

signalSocket.onopen = function (event) {
  // Hook up listeners
  console.log("Signal Socket opened!");
}

signalSocket.onmessage = function (event) {
  let message = JSON.parse(event.data);
  let room = message.room;
  console.log("Received message from server ", message);
  switch (message.msgType) {
    case "full":
      console.log('Room ' + room + ' is full');
      break;

    case "joined":
      let numConnections = message.numConnections
      if (numConnections == 1) {
        // Created
        console.log(`${room} has ${numConnections} clients`);
        isInitiator = true;
      } else {
        console.log(`${room} has ${numConnections} clients`);
        isChannelReady = true;
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
  console.log('Client received message:', message.msg);

  if (message.msg === 'connect') {
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