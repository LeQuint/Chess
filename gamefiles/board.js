
class Board{
    constructor() {
     this.whitePieces = [];
     this.blackPieces = [];
     this.indexBeingMoved;
     this.colorBeingMoved;
     this.setupPieces();
    }
    setupPieces() {
        this.whitePieces.push( new king ( 3, 0, loadImage( '/images/wKing.png' ), "white"));
        this.whitePieces.push( new rook ( 0, 0, loadImage( '/images/wRook.png' ), "white"));
        this.whitePieces.push( new rook ( 7, 0, loadImage( '/images/wRook.png' ), "white"));
        this.whitePieces.push( new pawn ( 0, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new pawn ( 1, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new pawn ( 2, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new pawn ( 3, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new pawn ( 4, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new pawn ( 5, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new pawn ( 6, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new pawn ( 7, 1, loadImage( '/images/wPawn.png' ), "white"));
        this.whitePieces.push( new knight ( 1, 0, loadImage( '/images/wKnight.png' ), "white"));
        this.whitePieces.push( new bishop ( 2, 0, loadImage( '/images/wBishop.png' ), "white"));
        this.whitePieces.push( new queen ( 4, 0, loadImage( '/images/wQueen.png' ), "white"));
        this.whitePieces.push( new bishop ( 5, 0, loadImage( '/images/wBishop.png' ), "white"));
        this.whitePieces.push( new knight ( 6, 0, loadImage( '/images/wKnight.png' ), "white"));
        
        this.blackPieces.push( new king ( 3, 7, loadImage( '/images/bKing.png' ), "black"));
        this.blackPieces.push( new rook ( 0, 7, loadImage( '/images/bRook.png' ), "black"));
        this.blackPieces.push( new rook ( 7, 7, loadImage( '/images/bRook.png' ), "black"));
        this.blackPieces.push( new pawn ( 0, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new pawn ( 1, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new pawn ( 2, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new pawn ( 3, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new pawn ( 4, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new pawn ( 5, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new pawn ( 6, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new pawn ( 7, 6, loadImage( '/images/bPawn.png' ), "black"));
        this.blackPieces.push( new knight ( 1, 7, loadImage( '/images/bKnight.png' ), "black"));
        this.blackPieces.push( new bishop ( 2, 7, loadImage( '/images/bBishop.png' ), "black"));
        this.blackPieces.push( new queen ( 4, 7, loadImage( '/images/bQueen.png' ), "black"));
        this.blackPieces.push( new bishop ( 5, 7, loadImage( '/images/bBishop.png' ), "black"));
        this.blackPieces.push( new knight ( 6, 7, loadImage( '/images/bKnight.png' ), "black"));
        
    }
}

function drawBoard () {
        for( var i = 0; i < 8; i++ ){
            for( var j = 0; j < 8; j++ ){
                if(( i+j ) % 2 == 0){
                    fill(230);
                }
                else {
                    fill(0);
                }
                rect(i*TILESIZE, j*TILESIZE, TILESIZE, TILESIZE);
            }
        }
}

function drawValidMoves () {
    possibleMoves.forEach( function(element) {
        let c = color(255, 204, 0);
        fill(c);
        circle( (element.x*TILESIZE + TILESIZE/2), (element.y*TILESIZE + TILESIZE/2), 10);
    });
}
    
function drawPieces ( board ) {
    board.whitePieces.forEach( function (piece) {
        if( piece.beingMoved == false ){
            image(piece.image, piece.xcoord * TILESIZE, piece.ycoord * TILESIZE, TILESIZE, TILESIZE);
        }
        else {
            image(piece.image, mouseX - TILESIZE/2, mouseY - TILESIZE/2, TILESIZE, TILESIZE);
        }
    });

    board.blackPieces.forEach( function (piece) {
            if( piece.beingMoved == false ){
                image(piece.image, piece.xcoord * TILESIZE, piece.ycoord * TILESIZE, TILESIZE, TILESIZE);
            }
            else {
                image(piece.image, mouseX - TILESIZE/2, mouseY - TILESIZE/2, TILESIZE, TILESIZE);
            }
    });
}

function getPieceAt ( xcoord, ycoord ) {
    board.whitePieces.forEach( function ( piece, i ) {
        if ( xcoord > piece.xcoord * TILESIZE && 
           xcoord < piece.xcoord * TILESIZE + TILESIZE && 
           ycoord > piece.ycoord * TILESIZE && 
           ycoord < piece.ycoord * TILESIZE + TILESIZE )
        {
            piece.beingMoved = true;
            board.indexBeingMoved = i;
            board.colorBeingMoved = "white";

        }
    });

    board.blackPieces.forEach ( function( piece, i ) {
        if ( xcoord > piece.xcoord * TILESIZE && 
           xcoord < piece.xcoord * TILESIZE + TILESIZE && 
           ycoord > piece.ycoord * TILESIZE && 
           ycoord < piece.ycoord * TILESIZE + TILESIZE )
        {
            piece.beingMoved = true;
            board.indexBeingMoved = i;
            board.colorBeingMoved = "black";

        }
    });

    if ( board.colorBeingMoved == "white" ) {
        return board.whitePieces[board.indexBeingMoved];
    }
    else if (board.colorBeingMoved == "black"){
        return board.blackPieces[board.indexBeingMoved];
    }
    else {
        return null;
    }
}


function generateWhiteBoardControl () {
    board.whitePieces.forEach( function (piece, index) {
        piece.generateBoardControl();
    });
}

function generateBlackBoardControl () {
    board.blackPieces.forEach( function (piece, index) {
        piece.generateBoardControl();
    });
}