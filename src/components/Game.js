import React from 'react';
import GameContainer from "../containers/GameContainer"
import NewGame from "./NewGame"
// import { connect } from "react-redux"

class Game extends React.Component {

  render() {
    return(
      <div>
        <NewGame />
        <GameContainer />
      </div>
    )
  }
}

export default Game;