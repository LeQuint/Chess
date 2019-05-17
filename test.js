generateBoardControl () {
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
                    possibleMoves.push({ x: this.xcoord + i, y: this.ycoord });
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord))
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
                    possibleMoves.push( { x: this.xcoord - i, y: this.ycoord} );
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord))
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
                    possibleMoves.push( { x: this.xcoord, y: this.ycoord + i} );
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord + i))
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
                    possibleMoves.push( { x: this.xcoord, y: this.ycoord - i} );
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord, this.ycoord - i))
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
                    possibleMoves.push( {x: this.xcoord + i, y: this.ycoord + i} );
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord + i))
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
                    possibleMoves.push( {x: this.xcoord + i, y: this.ycoord - i} );
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord + i, this.ycoord - i))
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
                    possibleMoves.push( {x: this.xcoord - i, y: this.ycoord + i} );
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord + i))
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
                    possibleMoves.push( {x: this.xcoord - i, y: this.ycoord - i} );
            }

            else if ( this.pieceColor == 'black' ) {
                if(!checkIfBlackPieceIsHere(this.xcoord - i, this.ycoord - i))
                    possibleMoves.push( {x: this.xcoord - i, y: this.ycoord - i} );
            }
        }
        i++;
    }
}