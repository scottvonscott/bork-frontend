import React from 'react';
import GameContainer from "../containers/GameContainer"
import Button from "react-bootstrap/Button"
import NewGame from "./NewGame"

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
        <NewGame />
        <GameContainer />
      </div>
    )
  }

  turn() {}
  
}
export default Game;