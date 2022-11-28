// eslint-disable-next-line @typescript-eslint/no-unused-vars
class square{
    x: number;
    y: number;
    canvas: [number, number];
    piece: piece;

    constructor (x: number, y: number, canvas: [number, number], piece: piece) {
        this.x = parameters.x;
        this.y = parameters.y;
        this.canvas = parameters.canvas;
        this.piece = parameters.piece;
    }
        
    getCoordinates() {
        return [this.x, this.y];
    }
}