// eslint-disable-next-line @typescript-eslint/no-unused-vars

import square from './square';

class piece {

    id: number;
    color: string;
    type: string;
    isAttacked: boolean;
    
    
    constructor(id: number, color: string, type: string, isAttacked: boolean) {
        this.id = id;
        this.color = color;
        this.type = type;
        this.isAttacked = false;
    }

    isAttackedBy(piece: piece) {
        this.isAttacked = true;
    }

    setPosition(square: square) {

    }


    getPosition() {

    }

}

export default piece;