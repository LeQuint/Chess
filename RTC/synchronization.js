var time = 0;
var dataBuffer = [];
var synchronizedTick;
var framesPerSec;
var playerColorPreference;

function beginSynchronization() {
    if (isInitiator) {
        setAndSendTime();
    } else {
        setTime();
    }
}

function sendData(type,value) {
    var currentTimestamp = time;
    var dataPackage = {msgType: type, data: value, timestamp: currentTimestamp};
    //console.log("sending Data Package: ", dataPackage);
    sendChannel.send(JSON.stringify(dataPackage));
  
    // dataBuffer.push({timestamp: currentTimestamp, data: value})
}
  
function receivedData(event) {
    var dataPackage = JSON.parse(event.data);
    //console.log("received package: ", dataPackage);
    switch (dataPackage.msgType) {
        case "initSync":
            setTime(dataPackage.data);
        break;

        case "initGame":
            configurePlayerColor(dataPackage.data);
        break;

        case "Color":
            playerColor = dataPackage.data;
            loop();
        break;

        case "movePiece":
            movePieceToPosition(dataPackage.data.orgX, dataPackage.data.orgY, dataPackage.data.destX, dataPackage.data.destY);
        break;

        case "castleMove":
            opponentCastle(dataPackage.data);
        break;

        case "evolveMove":
            evolvePawnAt(dataPackage.data.coordX, dataPackage.data.coordY, dataPackage.data.index);
        break;

        default:
        break;
    }
}

function configurePlayerColor(otherPlayerColorChoice) {
    if( otherPlayerColorChoice == "1" && playerColorPreference == "1" ) { // both have no preference
        playerColor = "black"
        sendData('Color', 'white');
    } 
    else if ( otherPlayerColorChoice == "1" && playerColorPreference != "1" ){
        if ( playerColorPreference == 2 ){
            playerColor = "black"
            sendData('Color', 'white');
        } else {
            playerColor = "white"
            sendData('Color', 'black');
        }
    }
    else if ( otherPlayerColorChoice != "1" && playerColorPreference == "1" ) {
        if ( otherPlayerColorChoice == 2 ){
            playerColor = "white"
            sendData('Color', 'black');
        } else {
            playerColor = "black"
            sendData('Color', 'white');
        }
    }
    else if ( otherPlayerColorChoice != playerColorPreference ) { // different choices
        if( playerColorPreference == 2) {
            playerColor = "black"
            sendData('Color', 'white');
        } else {
            playerColor = "white"
            sendData('Color', 'black');
        }
    }
    else if ( otherPlayerColorChoice == playerColorPreference ) { // same choice
        playerColor = "white"
        sendData('Color', 'black');
    }

    console.log("begin game ...");
    loop(); // begin game
}

function setAndSendTime() {
    var now = new Date();
    var timeObject = {
        year: now.getFullYear(),
        month: now.getMonth(),
        day: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
        millisecond: now.getMilliseconds()
    }
    var dataPackage = {msgType:'initSync', data: timeObject};
    console.log("sending time Package: ", dataPackage);
    sendChannel.send(JSON.stringify(dataPackage));

    setTimeout(startSync, 2000);
}

function setTime(peerStartTime) {
    var time = peerStartTime;
    var syncBeginTime = new Date(time.year, time.month, time.day, time.hour, time.minute, time.second, time.millisecond);
    var currentTime = new Date();
    var timerStartTime = 2000 - (currentTime - syncBeginTime);
    setTimeout(startSync, timerStartTime);
}

function startSync() {
    synchronizedTick = setInterval(incrementTime, 1);
    framesPerSec = setInterval(synchronizeData, 100);
    startGame();
}

function stopSync() {
    clearInterval(synchronizedTick);
    clearInterval(framesPerSec);
    noLoop();
    time = 0;
    dataBuffer = [];
}

function synchronizeData() {
    if (dataBuffer === undefined || dataBuffer.length == 0) {
        return;
    }

    dataBuffer.sort( (a,b) => a.timestamp > b.timestamp ? -1 : 1);
    // dataChannel.value = dataBuffer[0].data;
    dataBuffer = [];
}

function incrementTime() {
    time += 1;
}

