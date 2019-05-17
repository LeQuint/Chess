
class piece {
    constructor(xcoord,ycoord, pieceImage, pieceColor){
        this.xcoord = xcoord;
        this.ycoord = ycoord;
        this.beingMoved = false;
        this.image = pieceImage;
        this.pieceColor = pieceColor;
        this.firstMove = true;
        this.mute = false;
    }
}


class king extends piece {
    constructor(xcoord, ycoord, pieceImage, pieceColor){
        super(xcoord, ycoord, pieceImage, pieceColor);
    }

    generateValidMoves() {

        if( this.xcoord + 1 < 8 && this.ycoord + 1 < 8) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord + 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord + 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord + 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord + 1});
                }
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord + 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord + 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord + 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord + 1});
                }
            }
        }

        if( this.xcoord + 1 < 8 && this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord - 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord - 1});
                }
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord - 1 > -1) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord - 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord - 1});
                }
            }
        }

        if( this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord, y: this.ycoord + 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord, y: this.ycoord + 1});
                }
            }
        }

        if( this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord, y: this.ycoord - 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord, y: this.ycoord - 1});
                }
            }
        }

        if( this.xcoord + 1 < 8 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord});
                }
            }
        }

        if( this.xcoord - 1 > -1 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord});
                }
            }
        }

    }

    generateBoardControl() {

        if( this.xcoord + 1 < 8 && this.ycoord + 1 < 8) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord + 1)) {
                    whiteBoardControl.push({x: this.xcoord + 1, y: this.ycoord + 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord + 1)) {
                    blackBoardControl.push({x: this.xcoord + 1, y: this.ycoord + 1});
                }
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord + 1)) {
                    whiteBoardControl.push({x: this.xcoord - 1, y: this.ycoord + 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord + 1)) {
                    blackBoardControl.push({x: this.xcoord - 1, y: this.ycoord + 1});
                }
            }
        }

        if( this.xcoord + 1 < 8 && this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 1)) {
                    whiteBoardControl.push({x: this.xcoord + 1, y: this.ycoord - 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 1)) {
                    blackBoardControl.push({x: this.xcoord + 1, y: this.ycoord - 1});
                }
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord - 1 > -1) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 1)) {
                    whiteBoardControl.push({x: this.xcoord - 1, y: this.ycoord - 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 1)) {
                    blackBoardControl.push({x: this.xcoord - 1, y: this.ycoord - 1});
                }
            }
        }

        if( this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + 1)) {
                    whiteBoardControl.push({x: this.xcoord, y: this.ycoord + 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + 1)) {
                    blackBoardControl.push({x: this.xcoord, y: this.ycoord + 1});
                }
            }
        }

        if( this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - 1)) {
                    whiteBoardControl.push({x: this.xcoord, y: this.ycoord - 1});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - 1)) {
                    blackBoardControl.push({x: this.xcoord, y: this.ycoord - 1});
                }
            }
        }

        if( this.xcoord + 1 < 8 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord)) {
                    whiteBoardControl.push({x: this.xcoord + 1, y: this.ycoord});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord)) {
                    blackBoardControl.push({x: this.xcoord + 1, y: this.ycoord});
                }
            }
        }

        if( this.xcoord - 1 > -1 ) {
            if ( this.pieceColor == 'white' ) {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord)) {
                    whiteBoardControl.push({x: this.xcoord - 1, y: this.ycoord});
                }
            }

            else if ( this.pieceColor == 'black') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord)) {
                    blackBoardControl.push({x: this.xcoord - 1, y: this.ycoord});
                }
            }
        }
    }
}

class queen extends piece {
    constructor(xcoord, ycoord, pieceImage, pieceColor){
        super(xcoord, ycoord, pieceImage, pieceColor);
    }

    generateValidMoves() {
        let distanceFromRightSide = 8 - this.xcoord;
        let distanceFromLeftSide = this.xcoord + 1;
        let distanceFromBottomSide = 8 - this.ycoord;
        let distanceFromTopSide = this.ycoord + 1;
        let i = 1;

        for ( i = 1; i < distanceFromRightSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord))
                            possibleMoves.push({ x: this.xcoord + i, y: this.ycoord });
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord))
                            possibleMoves.push({ x: this.xcoord + i, y: this.ycoord });
                }
            }
        }

        for ( i = 1; i < distanceFromLeftSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord))
                            possibleMoves.push( { x: this.xcoord - i, y: this.ycoord} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord))
                            possibleMoves.push( { x: this.xcoord - i, y: this.ycoord} );
                }
            }
        }

        for ( i = 1; i < distanceFromBottomSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord + i} );
                }
            }
        }

        for ( i = 1; i < distanceFromTopSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord - i} );
                }
            }
        }

        i = 1;
        while( i < distanceFromRightSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }
            }  
            i++;
        }

        i = 1;
        while( i < distanceFromRightSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }
            }
            i++;
        }
        

    }

    generateBoardControl () {
        let distanceFromRightSide = 8 - this.xcoord;
        let distanceFromLeftSide = this.xcoord + 1;
        let distanceFromBottomSide = 8 - this.ycoord;
        let distanceFromTopSide = this.ycoord + 1;
        let i = 1;

        if ( this.mute == true ) {
            return;
        }

        for ( i = 1; i < distanceFromRightSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord))
                        whiteBoardControl.push({ x: this.xcoord + i, y: this.ycoord });
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord))
                        blackBoardControl.push({ x: this.xcoord + i, y: this.ycoord });
                }
            }
        }

        for ( i = 1; i < distanceFromLeftSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord))
                        whiteBoardControl.push( { x: this.xcoord - i, y: this.ycoord} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord))
                        blackBoardControl.push( { x: this.xcoord - i, y: this.ycoord} );
                }
            }
        }

        for ( i = 1; i < distanceFromBottomSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + i))
                        whiteBoardControl.push( { x: this.xcoord, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord + i))
                        blackBoardControl.push( { x: this.xcoord, y: this.ycoord + i} );
                }
            }
        }

        for ( i = 1; i < distanceFromTopSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - i))
                        whiteBoardControl.push( { x: this.xcoord, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord - i))
                        blackBoardControl.push( { x: this.xcoord, y: this.ycoord - i} );
                }
            }
        }

        i = 1;
        while( i < distanceFromRightSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord + i))
                        whiteBoardControl.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord + i))
                        blackBoardControl.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }
            }  
            i++;
        }

        i = 1;
        while( i < distanceFromRightSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord - i))
                        whiteBoardControl.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord - i))
                        blackBoardControl.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord + i))
                        whiteBoardControl.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord + i))
                        blackBoardControl.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord - i))
                        whiteBoardControl.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord - i))
                        blackBoardControl.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }
            }
            i++;
        }
    }
}

class bishop extends piece {
    constructor(xcoord, ycoord, pieceImage, pieceColor){
        super(xcoord, ycoord, pieceImage, pieceColor);
    }

    generateValidMoves() {
        let distanceFromRightSide = 8 - this.xcoord;
        let distanceFromLeftSide = this.xcoord + 1;
        let distanceFromBottomSide = 8 - this.ycoord;
        let distanceFromTopSide = this.ycoord + 1;
        let i = 1;

        while( i < distanceFromRightSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }
            }  
            i++;
        }

        i = 1;
        while( i < distanceFromRightSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord + i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord - i))
                            possibleMoves.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }
            }
            i++;
        }
    }

    generateBoardControl () {
        let distanceFromRightSide = 8 - this.xcoord;
        let distanceFromLeftSide = this.xcoord + 1;
        let distanceFromBottomSide = 8 - this.ycoord;
        let distanceFromTopSide = this.ycoord + 1;
        let i = 1;

        if ( this.mute == true ) {
            return;
        }

        while( i < distanceFromRightSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord + i))
                        whiteBoardControl.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord + i))
                        blackBoardControl.push( {x: this.xcoord + i, y: this.ycoord + i} );
                }
            }  
            i++;
        }

        i = 1;
        while( i < distanceFromRightSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord - i))
                        whiteBoardControl.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord - i))
                        blackBoardControl.push( {x: this.xcoord + i, y: this.ycoord - i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromBottomSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord + i))
                        whiteBoardControl.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord + i))
                        blackBoardControl.push( {x: this.xcoord - i, y: this.ycoord + i} );
                }
            }
            i++;
        }

        i = 1;
        while( i < distanceFromLeftSide && i < distanceFromTopSide ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord - i))
                        whiteBoardControl.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord - i))
                        blackBoardControl.push( {x: this.xcoord - i, y: this.ycoord - i} );
                }
            }
            i++;
        }
    }
}

class knight extends piece {
    constructor(xcoord, ycoord, pieceImage, pieceColor){
        super(xcoord, ycoord, pieceImage, pieceColor);
    }

    generateValidMoves() {

        if( this.xcoord + 2 < 8 && this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 2, this.ycoord + 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 2, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord + 2, y: this.ycoord + 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 2, this.ycoord + 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 2, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord + 2, y: this.ycoord + 1});
            }
        }

        if( this.xcoord + 1 < 8 && this.ycoord + 2 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 1, this.ycoord + 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord + 2))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord + 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord + 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord + 2))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord + 2});
            }

        }

        if( this.xcoord - 2 > -1 && this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 2, this.ycoord + 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 2, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord - 2, y: this.ycoord + 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 2, this.ycoord + 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 2, this.ycoord + 1))
                        possibleMoves.push({x: this.xcoord - 2, y: this.ycoord + 1});
            }
        }

        if( this.xcoord + 1 < 8 && this.ycoord - 2 > -1) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 1, this.ycoord - 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord - 2))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord - 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord - 2))
                        possibleMoves.push({x: this.xcoord + 1, y: this.ycoord - 2});
            }
        }

        if( this.xcoord - 2 > -1 && this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 2, this.ycoord - 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 2, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord - 2, y: this.ycoord - 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 2, this.ycoord - 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 2, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord - 2, y: this.ycoord - 1});
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord - 2 > -1 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 1, this.ycoord - 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord - 2))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord - 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord - 2))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord - 2});
            }
        }

        if( this.xcoord + 2 < 8 && this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 2, this.ycoord - 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 2, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord + 2, y: this.ycoord - 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 2, this.ycoord - 1))
                    if(!checkIfKingIsInDanger(this, this.xcoord + 2, this.ycoord - 1))
                        possibleMoves.push({x: this.xcoord + 2, y: this.ycoord - 1});
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord + 2 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 1, this.ycoord + 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord + 2))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord + 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord + 2))
                    if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord + 2))
                        possibleMoves.push({x: this.xcoord - 1, y: this.ycoord + 2});
            }
        }
    }

    generateBoardControl () {

        if ( this.mute == true ) {
            return;
        }

        if( this.xcoord + 2 < 8 && this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 2, this.ycoord + 1))
                    blackBoardControl.push({x: this.xcoord + 2, y: this.ycoord + 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 2, this.ycoord + 1))
                    whiteBoardControl.push({x: this.xcoord + 2, y: this.ycoord + 1});
            }
        }

        if( this.xcoord + 1 < 8 && this.ycoord + 2 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 1, this.ycoord + 2))
                    blackBoardControl.push({x: this.xcoord + 1, y: this.ycoord + 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord + 2))
                    whiteBoardControl.push({x: this.xcoord + 1, y: this.ycoord + 2});
            }

        }

        if( this.xcoord - 2 > -1 && this.ycoord + 1 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 2, this.ycoord + 1))
                    blackBoardControl.push({x: this.xcoord - 2, y: this.ycoord + 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 2, this.ycoord + 1))
                    whiteBoardControl.push({x: this.xcoord - 2, y: this.ycoord + 1});
            }
        }

        if( this.xcoord + 1 < 8 && this.ycoord - 2 > -1) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 1, this.ycoord - 2))
                    blackBoardControl.push({x: this.xcoord + 1, y: this.ycoord - 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 2))
                    whiteBoardControl.push({x: this.xcoord + 1, y: this.ycoord - 2});
            }
        }

        if( this.xcoord - 2 > -1 && this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 2, this.ycoord - 1))
                    blackBoardControl.push({x: this.xcoord - 2, y: this.ycoord - 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 2, this.ycoord - 1))
                    whiteBoardControl.push({x: this.xcoord - 2, y: this.ycoord - 1});
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord - 2 > -1 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 1, this.ycoord - 2))
                    blackBoardControl.push({x: this.xcoord - 1, y: this.ycoord - 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 2))
                    whiteBoardControl.push({x: this.xcoord - 1, y: this.ycoord - 2});
            }
        }

        if( this.xcoord + 2 < 8 && this.ycoord - 1 > -1 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + 2, this.ycoord - 1))
                    blackBoardControl.push({x: this.xcoord + 2, y: this.ycoord - 1});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord + 2, this.ycoord - 1))
                    whiteBoardControl.push({x: this.xcoord + 2, y: this.ycoord - 1});
            }
        }

        if( this.xcoord - 1 > -1 && this.ycoord + 2 < 8 ) {
            if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - 1, this.ycoord + 2))
                    blackBoardControl.push({x: this.xcoord - 1, y: this.ycoord + 2});
            }

            else if ( this.pieceColor == 'white') {
                if(!checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord + 2))
                    whiteBoardControl.push({x: this.xcoord - 1, y: this.ycoord + 2});
            }
        }
    }
}

class rook extends piece {
    constructor(xcoord, ycoord, pieceImage, pieceColor){
        super(xcoord, ycoord, pieceImage, pieceColor);
    }

    generateValidMoves() {
        let distanceFromRightSide = 8 - this.xcoord;
        let distanceFromLeftSide = this.xcoord + 1;
        let distanceFromBottomSide = 8 - this.ycoord;
        let distanceFromTopSide = this.ycoord + 1;
        let i;


        for ( i = 1; i < distanceFromRightSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord))
                            possibleMoves.push({ x: this.xcoord + i, y: this.ycoord });
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord + i, this.ycoord))
                            possibleMoves.push({ x: this.xcoord + i, y: this.ycoord });
                }
            }
        }

        for ( i = 1; i < distanceFromLeftSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord))
                            possibleMoves.push( { x: this.xcoord - i, y: this.ycoord} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord))
                        if(!checkIfKingIsInDanger(this, this.xcoord - i, this.ycoord))
                            possibleMoves.push( { x: this.xcoord - i, y: this.ycoord} );
                }
            }
        }

        for ( i = 1; i < distanceFromBottomSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord + i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord + i} );
                }
            }
        }

        for ( i = 1; i < distanceFromTopSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord - i))
                        if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - i))
                            possibleMoves.push( { x: this.xcoord, y: this.ycoord - i} );
                }
            }
        }
    }

    generateBoardControl () {
        let distanceFromRightSide = 8 - this.xcoord;
        let distanceFromLeftSide = this.xcoord + 1;
        let distanceFromBottomSide = 8 - this.ycoord;
        let distanceFromTopSide = this.ycoord + 1;
        let i;

        if ( this.mute == true ) {
            return;
        }

        for ( i = 1; i < distanceFromRightSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord + i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord + i, this.ycoord))
                        whiteBoardControl.push({ x: this.xcoord + i, y: this.ycoord });
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord))
                        blackBoardControl.push({ x: this.xcoord + i, y: this.ycoord });
                }
            }
        }

        for ( i = 1; i < distanceFromLeftSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord - i, this.ycoord) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord - i, this.ycoord))
                        whiteBoardControl.push( { x: this.xcoord - i, y: this.ycoord} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord))
                        blackBoardControl.push( { x: this.xcoord - i, y: this.ycoord} );
                }
            }
        }

        for ( i = 1; i < distanceFromBottomSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord + i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord + i))
                        whiteBoardControl.push( { x: this.xcoord, y: this.ycoord + i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord + i))
                        blackBoardControl.push( { x: this.xcoord, y: this.ycoord + i} );
                }
            }
        }

        for ( i = 1; i < distanceFromTopSide; i++ ) {
            if ( checkIfMovingThrough(this.xcoord, this.ycoord, this.xcoord, this.ycoord - i) ) {
                break;
            }

            else {
                if ( this.pieceColor == 'white' ) {
                    if(!checkIfWhitePieceIsHere(this.xcoord, this.ycoord - i))
                        whiteBoardControl.push( { x: this.xcoord, y: this.ycoord - i} );
                }

                else if ( this.pieceColor == 'black' ) {
                    if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord - i))
                        blackBoardControl.push( { x: this.xcoord, y: this.ycoord - i} );
                }
            }
        }
    }
}

class pawn extends piece {
    constructor(xcoord, ycoord, pieceImage, pieceColor){
        super(xcoord, ycoord, pieceImage, pieceColor);
    }

    generateValidMoves() {
        if ( this.pieceColor == 'white' ) {

            if ( !checkIfPieceIsHere( this.xcoord, this.ycoord + 1 )) {
                if ( this.ycoord + 1 < 8 ) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + 1))
                        possibleMoves.push( { x: this.xcoord, y: this.ycoord + 1 } );
                }
            }

            if ( this.firstMove == true ) {
                if ( !checkIfPieceIsHere( this.xcoord, this.ycoord + 2) && !checkIfPieceIsHere( this.xcoord, this.ycoord + 1)) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord + 2))
                        possibleMoves.push( { x: this.xcoord, y: this.ycoord + 2 } );
                }
            }

            if (checkIfBlackPieceIsHere(this.xcoord + 1, this.ycoord + 1)) {
                if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord + 1))
                    possibleMoves.push( { x: this.xcoord + 1, y: this.ycoord + 1 } );
            }

            if (checkIfBlackPieceIsHere(this.xcoord - 1, this.ycoord + 1)) {
                if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord + 1))
                    possibleMoves.push( { x: this.xcoord - 1, y: this.ycoord + 1 } );
            }
        }

        if ( this.pieceColor == 'black' ) {
            if ( !checkIfPieceIsHere( this.xcoord, this.ycoord - 1 )) {
                if ( this.ycoord - 1 > -1 ) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - 1))
                        possibleMoves.push( { x: this.xcoord, y: this.ycoord - 1  } )
                }
            }
            if ( this. firstMove == true ) {
                if ( !checkIfPieceIsHere( this.xcoord, this.ycoord - 2 ) && !checkIfPieceIsHere( this.xcoord, this.ycoord - 1 )) {
                    if(!checkIfKingIsInDanger(this, this.xcoord, this.ycoord - 2))
                        possibleMoves.push( { x: this.xcoord, y: this.ycoord - 2  } )
                }
            }

            if (checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 1)) {
                if(!checkIfKingIsInDanger(this, this.xcoord + 1, this.ycoord - 1))
                    possibleMoves.push( { x: this.xcoord + 1, y: this.ycoord - 1 } );
            }

            if (checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 1)) {
                if(!checkIfKingIsInDanger(this, this.xcoord - 1, this.ycoord - 1))
                    possibleMoves.push( { x: this.xcoord - 1, y: this.ycoord - 1 } );
            }
        }
    }

    generateBoardControl () {

        if ( this.mute == true ) {
            return;
        }

        if ( this.pieceColor == 'white' ) {
            if (checkIfBlackPieceIsHere(this.xcoord + 1, this.ycoord + 1)) {
                whiteBoardControl.push( { x: this.xcoord + 1, y: this.ycoord + 1 } );
            }

            if (checkIfBlackPieceIsHere(this.xcoord - 1, this.ycoord + 1)) {
                whiteBoardControl.push( { x: this.xcoord - 1, y: this.ycoord + 1 } );
            }
        }

        if ( this.pieceColor == 'black' ) {
            if (checkIfWhitePieceIsHere(this.xcoord + 1, this.ycoord - 1)) {
                blackBoardControl.push( { x: this.xcoord + 1, y: this.ycoord - 1 } );
            }

            if (checkIfWhitePieceIsHere(this.xcoord - 1, this.ycoord - 1)) {
                blackBoardControl.push( { x: this.xcoord - 1, y: this.ycoord - 1 } );
            }
        }
    }
}