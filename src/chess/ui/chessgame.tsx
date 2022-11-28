import React from 'react'
import Game from '../models/chess'
import Piece from './piece'

class ChessGame extends React.Component {
  state = {
    game: new Game(true),
  }
  render() {
    return (
      <>
        <div>
          <h1>Chess Game</h1>
          <div className="img-board">
            <img src={require('../assets/chessBoard.png')} alt="chessBoard" />
          </div>
        </div>
        <Piece></Piece>
      </>
    )
  }

  move() {}
}

export default ChessGame
