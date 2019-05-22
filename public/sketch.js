
function setup() {
    createCanvas( 800, 800 );
    board = new Board();
    possibleMoves = [];
}

function draw() {
    drawBoard();
    drawPieces ( board );
    drawValidMoves();
}


function mousePressed(){
    let currentPiece = getPieceAt( mouseX, mouseY );

    if( currentPiece != null ) {
        currentPiece.generateValidMoves();
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
            currentPiece.xcoord = floor(mouseX/TILESIZE);
            currentPiece.ycoord = floor(mouseY/TILESIZE);

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
        }
        else if ( board.colorBeingMoved == "black" ) {
            let currentPiece = board.blackPieces[board.indexBeingMoved];
            currentPiece.beingMoved = false;
            currentPiece.xcoord = floor(mouseX/TILESIZE);
            currentPiece.ycoord = floor(mouseY/TILESIZE);

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