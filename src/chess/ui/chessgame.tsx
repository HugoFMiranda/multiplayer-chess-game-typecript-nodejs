import React from 'react';
import Game from '../models/chess';

class ChessGame extends React.Component{
    constructor(props: any) {
        super(props);
        this.state = {
            game: new Game()
        };
    }

    render() {
        return (
            <div>
                <h1>Chess Game</h1>
            </div>
        );
    }
}

export default ChessGame