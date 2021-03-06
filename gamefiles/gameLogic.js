const TILESIZE = 95; // size of tile in px

let board;
let possibleCastle = false;
let turnBit = true;
let possibleMoves = [];
let whiteBoardControl = [];
let blackBoardControl = [];
let playerColor;


function checkValidMove() {
    let userMoveX = floor(mouseX/TILESIZE);
    let userMoveY = floor(mouseY/TILESIZE);
    let validMove = false;

    possibleMoves.forEach( function(element) {
        if ( element.x == userMoveX && element.y == userMoveY ) {
            validMove = true;
        }
    });

    return validMove;
}

function checkIfMovingThrough( posX, posY , destX, destY) {
    let distanceX = abs(destX - posX);
    let distanceY = abs(destY - posY);
    let i;

    if ( destX > posX && destY > posY ) {
        for ( i = 1 ; i < distanceX ; i++ ) {
            if (checkIfPieceIsHere(posX + i, posY + i)) {
                return true;
            };
        }
    }

    else if ( destX > posX && destY < posY ) {
        for ( i = 1 ; i < distanceX ; i++ ) {
            if (checkIfPieceIsHere(posX + i, posY - i)) {
                return true;
            };
        }
    }

    else if ( destX < posX && destY > posY ) {
        for ( i = 1 ; i < distanceX ; i++ ) {
            if (checkIfPieceIsHere(posX - i, posY + i)) {
                return true;
            };
        }
    }

    else if ( destX < posX && destY < posY ) {
        for ( i = 1 ; i < distanceX ; i++ ) {
            if (checkIfPieceIsHere(posX - i, posY - i)) {
                return true;
            };
        }
    }

    else if ( destX > posX && destY == posY ) {
        for ( i = 1 ; i < distanceX ; i++ ) {
            if (checkIfPieceIsHere(posX + i, posY)) {
                return true;
            };
        }
    }

    else if ( destX < posX && destY == posY ) {
        for ( i = 1 ; i < distanceX; i++ ) {
            if (checkIfPieceIsHere(posX - i, posY)) {
                return true;
            }
        }
    }

    else if ( destY > posY && destX == posX ) {
        for ( i = 1 ; i < distanceY; i++ ) {
            if ( checkIfPieceIsHere ( posX, posY + i) ){
                return true;
            }
        }
    }

    else if ( destY , posY && destX == posX ) {
        for ( i = 1 ; i < distanceY; i++ ) {
            if ( checkIfPieceIsHere ( posX, posY - i) ){
                return true;
            }
        }
    }

    return false;
}

function checkIfPieceIsHere(xcoord, ycoord) {
    for ( let i = 0; i < board.whitePieces.length; i++ ) {
        if ( board.whitePieces[i].xcoord == xcoord && board.whitePieces[i].ycoord == ycoord && board.whitePieces[i].mute != true ) {
            return true;
        }
    }

    for( let j = 0 ; j < board.blackPieces.length; j++ ) {
        if ( board.blackPieces[j].xcoord == xcoord && board.blackPieces[j].ycoord == ycoord && board.blackPieces[j].mute == false ) {
            return true;
        }
    }

    return false
}

function checkIfBlackPieceIsHere(xcoord, ycoord) {
    for( let j = 0 ; j < board.blackPieces.length; j++ ) {
        if ( board.blackPieces[j].xcoord == xcoord && board.blackPieces[j].ycoord == ycoord && board.blackPieces[j].mute == false ) {
            return true;
        }
    }

    return false;
}

function checkIfWhitePieceIsHere(xcoord, ycoord) {
    for ( let i = 0; i < board.whitePieces.length; i++ ) {
        if ( board.whitePieces[i].xcoord == xcoord && board.whitePieces[i].ycoord == ycoord && board.whitePieces[i].mute == false ) {
            return true;
        }
    }

    return false;
}


function removeBlackPieceAt ( xcoord, ycoord ) {
    board.blackPieces.forEach( function( piece, index ) {
        if ( piece.xcoord == xcoord && piece.ycoord == ycoord ) {
            board.blackPieces.splice(index, 1);
            return;
        }
    });
}

function removeWhitePieceAt ( xcoord, ycoord ) {
    board.whitePieces.forEach( function( piece, index ) {
        if ( piece.xcoord == xcoord && piece.ycoord == ycoord ) {
            board.whitePieces.splice(index, 1);
            return;
        }
    });
}

function muteBlackPieceAt (xcoord, ycoord) {
    board.blackPieces.forEach( function(piece) {
        if (piece.xcoord == xcoord && piece.ycoord == ycoord) {
            piece.mute = true;
        }
    });
}

function muteWhitePieceAt (xcoord, ycoord) {
    board.whitePieces.forEach( function(piece) {
        if (piece.xcoord == xcoord && piece.ycoord == ycoord) {
            piece.mute = true;
        }
    });
}

function unMuteBlackPieceAt (xcoord,ycoord) {
    board.blackPieces.forEach( function(piece) {
        if (piece.xcoord == xcoord && piece.ycoord == ycoord) {
            piece.mute = false;
        }
    });
}

function unMuteWhitePieceAt (xcoord, ycoord) {
    board.whitePieces.forEach( function(piece) {
        if (piece.xcoord == xcoord && piece.ycoord == ycoord) {
            piece.mute = false;
        }
    });
}

function checkIfKingIsInDanger (piece, destX, destY) {
    let isKingInDanger = false;
    let tempMoveX = destX;
    let tempMoveY = destY;

    if (piece.pieceColor == "white") {
        let originalPositionX = piece.xcoord;
        let originalPositionY = piece.ycoord;
        piece.xcoord = tempMoveX;
        piece.ycoord = tempMoveY;

        muteBlackPieceAt(piece.xcoord, piece.ycoord);
        generateBlackBoardControl();
        let kingPosX = board.whitePieces[0].xcoord;
        let kingPosY = board.whitePieces[0].ycoord;

        blackBoardControl.forEach(function(element) {
            if ( element.x == kingPosX && element.y == kingPosY) {
                isKingInDanger = true;
            }
        });

        unMuteBlackPieceAt(piece.xcoord, piece.ycoord);
        blackBoardControl = [];
        piece.xcoord = originalPositionX;
        piece.ycoord = originalPositionY;
    }

    else if ( piece.pieceColor == "black" ) {
        let originalPositionX = piece.xcoord;
        let originalPositionY = piece.ycoord;
        piece.xcoord = tempMoveX;
        piece.ycoord = tempMoveY;

        muteWhitePieceAt(piece.xcoord, piece.ycoord);
        generateWhiteBoardControl();
        let kingPosX = board.blackPieces[0].xcoord;
        let kingPosY = board.blackPieces[0].ycoord;

        whiteBoardControl.forEach(function(element) {
            if ( element.x == kingPosX && element.y == kingPosY) {
                isKingInDanger = true;
            }
        });

        unMuteWhitePieceAt(piece.xcoord, piece.ycoord);
        whiteBoardControl = [];
        piece.xcoord = originalPositionX;
        piece.ycoord = originalPositionY;
    }

    return isKingInDanger;
}

function checkIfWhiteHasWon () {
    possibleMoves = [];
    
    board.blackPieces.forEach( function(piece) {
        piece.generateValidMoves();
    });

    if (possibleMoves.length == 0) {
        possibleMoves = [];
        registerVictory();
        sendData('Victory', 'null');
        endGame();
        return;
    }

    else {
        possibleMoves = [];
        return;
    }
}


function checkIfBlackHasWon () {
    possibleMoves = [];
    
    board.whitePieces.forEach( function(piece) {
        piece.generateValidMoves();
    });

    if (possibleMoves.length == 0) {
        possibleMoves = [];
        registerVictory();
        sendData('Victory', 'null');
        endGame();
        return;
    }

    else {
        possibleMoves = [];
        return;
    }
}


function castleLogic (piece) {
    if ( piece.xcoord == 1 && piece.ycoord == 0 ) { // white king side castle
        let rook = returnPieceAt(0,0);

        if ( rook != null ) {
            rook.xcoord = 2;
            rook.ycoord = 0;
        }

        sendData('castleMove', 'WKside');
    }

    else if ( piece.xcoord == 5 && piece.ycoord == 0 ) { // white queen side castle
        let rook = returnPieceAt(7,0);

        if ( rook != null ) {
            rook.xcoord = 4;
            rook.ycoord = 0;
        }

        sendData('castleMove', 'WQside');
    }

    else if ( piece.xcoord == 1 && piece.ycoord == 7 ) { // black king side castle
        let rook = returnPieceAt(0,7);

        if ( rook != null ) {
            rook.xcoord = 2;
            rook.ycoord = 7;
        }

        sendData('castleMove', 'BKside');
    }

    else if ( piece.xcoord == 5 && piece.ycoord == 7 ) { // black queen side castle
        let rook = returnPieceAt(7,7);

        if ( rook != null ) {
            rook.xcoord = 4;
            rook.ycoord = 7;
        }

        sendData('castleMove', 'BQside');
    }
}

function opponentCastle(castleType) {
    if (castleType == 'WKside') {
        let rook = returnPieceAt(0,0);

        if ( rook != null ) {
            rook.xcoord = 2;
            rook.ycoord = 0;
        }
    } else if ( castleType == 'WQside') {
        let rook = returnPieceAt(7,0);

        if ( rook != null ) {
            rook.xcoord = 4;
            rook.ycoord = 0;
        }
    } else if ( castleType == 'BKside') {
        let rook = returnPieceAt(0,7);

        if ( rook != null ) {
            rook.xcoord = 2;
            rook.ycoord = 7;
        }
    } else if ( castleType == 'BQside') {
        let rook = returnPieceAt(7,7);

        if ( rook != null ) {
            rook.xcoord = 4;
            rook.ycoord = 7;
        }
    }
}

function checkIfBlackRookCanCastle ( xcoord, ycoord ) {
    let canCastle = false; 
    board.blackPieces.forEach( function(piece) {
        if (piece.xcoord == xcoord && piece.ycoord == ycoord) {
            if ( piece instanceof rook && piece.firstMove == true ){
                canCastle = true;
            }
        }
    });

    return canCastle;
}

function checkIfWhiteRookCanCastle ( xcoord, ycoord ) {
    let canCastle = false;
    board.whitePieces.forEach( function(piece) {
        if (piece.xcoord == xcoord && piece.ycoord == ycoord) {
            if ( piece instanceof rook && piece.firstMove == true ){
                canCastle = true;
            }
        }
    });

    return canCastle;
}

function returnPieceAt (xcoord, ycoord) {
    let piece = null;

    board.whitePieces.forEach( function (element) {
        if( element.xcoord == xcoord && element.ycoord == ycoord ) {
            piece = element;
        }
    })

    board.blackPieces.forEach( function (element) {
        if( element.xcoord == xcoord && element.ycoord == ycoord ) {
            piece = element;
        }
    })


    return piece;
}

function evolve(pawn, index) {

    let xcoord = pawn.xcoord;
    let ycoord = pawn.ycoord;

    if (pawn.pieceColor == 'white') {
        board.whitePieces[index] = null;
        board.whitePieces[index] = new queen ( xcoord, ycoord, loadImage( 'images/wQueen.png' ), "white")
    }

    else if (pawn.pieceColor == 'black' ) {
        board.blackPieces[index] = null;
        board.blackPieces[index] = new queen ( xcoord, ycoord, loadImage( 'images/bQueen.png' ), "black")
    }

}

function evolvePawnAt(coordX, coordY, index) {
    let pawn = returnPieceAt(coordX, coordY);
    evolve(pawn, index);
}

function movePieceToPosition(orgX, orgY, destX, destY) {
    for ( let i = 0; i < board.whitePieces.length; i++ ) {
        if ( board.whitePieces[i].xcoord == orgX && board.whitePieces[i].ycoord == orgY) {
            board.whitePieces[i].xcoord = destX;
            board.whitePieces[i].ycoord = destY;
            removeBlackPieceAt(destX, destY);
            turnBit = !turnBit;
            return;
        }
    }

    for( let j = 0 ; j < board.blackPieces.length; j++ ) {
        if ( board.blackPieces[j].xcoord == orgX && board.blackPieces[j].ycoord == orgY) {
            board.blackPieces[j].xcoord = destX;
            board.blackPieces[j].ycoord = destY;
            removeWhitePieceAt(destX, destY);
            turnBit = !turnBit;
            return;
        }
    }
}

function processSurrender() {
    registerLoss();
    sendData('Surrender', 'null');
    endGame();
}

function endGame() {
    console.log('Game has ended ... ');
    noLoop();
    sendMessage({msgType: "message"}, {room: roomName}, {msg: 'bye'}); // leave the room in the server
}

function registerVictory() {
    const url = '/win';
    const param = {
        method:"POST"
    }

    fetch(url,param)
    .then(data=>{console.log(data)})
    .then(res=>{console.log(res)})
    .catch(error=>console.log(error))
}

function registerLoss() {
    const url = '/losses';
    const param = {
        method:"POST"
    }

    fetch(url,param)
    .then(data=>{console.log(data)})
    .then(res=>{console.log(res)})
    .catch(error=>console.log(error))
}


