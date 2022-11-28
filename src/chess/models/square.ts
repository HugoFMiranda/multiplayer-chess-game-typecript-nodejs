// eslint-disable-next-line @typescript-eslint/no-unused-vars
import piece from './piece';

class square{

    x: number;
    y: number;
    canvas: [number, number];
    piece: piece;

    constructor (x: number, y: number, canvas: [number, number], piece: piece) {
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.piece = piece;
    }
        
    getCoordinates() {
        return [this.x, this.y];
    }
}

export default square;