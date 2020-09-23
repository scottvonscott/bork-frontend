import React from 'react';
import GameContainer from "../containers/GameContainer"

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
        <h1> WTF am I doing?</h1>
        <GameContainer />
      </div>
    )
  }
}
export default Game;