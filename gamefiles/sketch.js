function setup() {
    var canvas = createCanvas( TILESIZE * 8, TILESIZE * 8 );
    canvas.parent('sketch-holder');
    board = new Board();
    noLoop();
}

function draw() {

    drawBoard();
    drawPieces ( board );
    drawValidMoves();
}

function startGame() {
    possibleMoves = [];
    // decide who is playing which color
    if (isInitiator) {
        sendData('initGame', playerColorPreference);
    } 

    document.getElementById("startButton").disabled = true;
    document.getElementById("surrenderButton").disabled = false;
    document.getElementById("MenuLink").click();
}


function mousePressed(){
    let currentPiece = getPieceAt( mouseX, mouseY );
    
    if( currentPiece != null ) {
        if ( turnBit == true && currentPiece.pieceColor == 'white' && playerColor == 'white') { // white move
            currentPiece.generateValidMoves();
        }

        else if ( turnBit == false && currentPiece.pieceColor == 'black' && playerColor == 'black') { // black move
            currentPiece.generateValidMoves();
        }
    }
}

function mouseReleased(){
    releasePiece();
}


function releasePiece() {

    let validMove = checkValidMove();

    if ( validMove ) {
        if (board.colorBeingMoved == "white") {
            let currentPiece = board.whitePieces[board.indexBeingMoved];
            currentPiece.beingMoved = false;

            sendData('movePiece', {orgX: currentPiece.xcoord, orgY: currentPiece.ycoord, destX: floor(mouseX/TILESIZE), destY: floor(mouseY/TILESIZE)});

            currentPiece.xcoord = floor(mouseX/TILESIZE);
            currentPiece.ycoord = floor(mouseY/TILESIZE);

            if ( currentPiece instanceof pawn) {
                if ( currentPiece.ycoord == 7 ) {
                    evolve(currentPiece, board.indexBeingMoved);
                    sendData('evolveMove', {coordX: currentPiece.xcoord, coordY: currentPiece.ycoord, index: board.indexBeingMoved});
                }
            }

            if ( possibleCastle == true ) {
                castleLogic(currentPiece);
            }

            if ( currentPiece.firstMove == true ) {
                currentPiece.firstMove = false;
            }

            removeBlackPieceAt(currentPiece.xcoord, currentPiece.ycoord);

            board.indexBeingMoved = null;
            board.colorBeingMoved = null;

            checkIfWhiteHasWon();
            turnBit = false;
        }
        
        else if ( board.colorBeingMoved == "black" ) {
            let currentPiece = board.blackPieces[board.indexBeingMoved];
            currentPiece.beingMoved = false;

            sendData('movePiece', {orgX: currentPiece.xcoord, orgY: currentPiece.ycoord, destX: floor(mouseX/TILESIZE), destY: floor(mouseY/TILESIZE)});

            currentPiece.xcoord = floor(mouseX/TILESIZE);
            currentPiece.ycoord = floor(mouseY/TILESIZE);

            if ( currentPiece instanceof pawn) {
                if ( currentPiece.ycoord == 0 ) {
                    evolve(currentPiece, board.indexBeingMoved);
                    sendData('evolveMove', {coordX: currentPiece.xcoord, coordY: currentPiece.ycoord, index: board.indexBeingMoved});
                }
            }

            if ( possibleCastle == true ) {
                castleLogic(currentPiece);
            }

            if ( currentPiece.firstMove == true ) {
                currentPiece.firstMove = false;
            }

            removeWhitePieceAt(currentPiece.xcoord, currentPiece.ycoord);

            board.indexBeingMoved = null;
            board.colorBeingMoved = null;

            checkIfBlackHasWon();
            turnBit = true;
        }
    }

    else {
        if (board.colorBeingMoved == "white") {
            board.whitePieces[board.indexBeingMoved].beingMoved = false;
            board.indexBeingMoved = null;
            board.colorBeingMoved = null;
        }
        else if ( board.colorBeingMoved == "black" ) {
            board.blackPieces[board.indexBeingMoved].beingMoved = false;
            board.indexBeingMoved = null;
            board.colorBeingMoved = null;
        }
    }

    possibleCastle = false;
    possibleMoves = [];
}