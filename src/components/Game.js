import React from 'react';
import GameContainer from "../containers/GameContainer"
import Button from "react-bootstrap/Button"

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      something: 1
    }
  }

  render() {
    return(
      <div>
        <Button variant="dark" size="lg">Start New Game</Button>{' '}
        <GameContainer />
      </div>
    )
  }

  turn() {}
  
}
export default Game;