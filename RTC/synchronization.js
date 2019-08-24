var time = 0;
var dataBuffer = [];
var synchronizedTick;
var framesPerSec;

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

        case "humanPosX":
            humanPosX = dataPackage.data;
        break;

        case "humanPosY":
            humanPosY = dataPackage.data;
        break;

        case "ghostPosX":
            ghostPosX = dataPackage.data;
        break;

        case "ghostPosY":
            ghostPosY = dataPackage.data;
        break;
  
        default:
        break;
    }
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
    noloop();
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

