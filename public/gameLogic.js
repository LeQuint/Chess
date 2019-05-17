const TILESIZE = 100; // size of tile in px

let board;
let possibleMoves = [];
let whiteBoardControl = [];
let blackBoardControl = [];


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
        if ( board.whitePieces[i].xcoord == xcoord && board.whitePieces[i].ycoord == ycoord ) {
            return true;
        }
    }

    for( let j = 0 ; j < board.blackPieces.length; j++ ) {
        if ( board.blackPieces[j].xcoord == xcoord && board.blackPieces[j].ycoord == ycoord ) {
            return true;
        }
    }

    return false
}

function checkIfBlackPieceIsHere(xcoord, ycoord) {
    for( let j = 0 ; j < board.blackPieces.length; j++ ) {
        if ( board.blackPieces[j].xcoord == xcoord && board.blackPieces[j].ycoord == ycoord ) {
            return true;
        }
    }

    return false;
}

function checkIfWhitePieceIsHere(xcoord, ycoord) {
    for ( let i = 0; i < board.whitePieces.length; i++ ) {
        if ( board.whitePieces[i].xcoord == xcoord && board.whitePieces[i].ycoord == ycoord ) {
            return true;
        }
    }

    return false;
}

function checkIfKingIsInDanger () {
    
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
    board.blackPieces.forEach( function(piece) {
        piece.generateValidMoves();
    });

    if (possibleMoves.length == 0) {
        possibleMoves = [];
        console.log("White has won ... ");
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
        console.log("Black has won ... ");
        return;
    }

    else {
        possibleMoves = [];
        return;
    }
}