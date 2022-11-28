// eslint-disable-next-line @typescript-eslint/no-unused-vars

import piece from './piece';
import square from './square';

class game{
    
    playerIsWhite: boolean;
    board: string;

    constructor(playerIsWhite: boolean) {
        this.playerIsWhite = playerIsWhite;
        this.board = "board";
    }

    movepiece(piece: piece, square: square) {
        piece.setPosition(square);
    }

}

export default game;