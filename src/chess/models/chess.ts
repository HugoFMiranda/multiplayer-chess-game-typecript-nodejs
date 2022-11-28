// eslint-disable-next-line @typescript-eslint/no-unused-vars
class game{
    

    constructor(){
        this.board = new board();
    }

    movepiece(piece: piece, square: square) {
        piece.setPosition(square);
    }
    

}