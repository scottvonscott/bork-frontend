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
        <GameContainer />
      </div>
    )
  }
}
export default Game;