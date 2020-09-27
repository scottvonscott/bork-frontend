import React from 'react'
import DungeonContainer from "./DungeonContainer"
import PlayerContainer from "./PlayerContainer"
import ActionBar from '../components/ActionBar'


class GameContainer extends React.Component {

    render(){
        return(
            <div className="game-container">
                <h3>Game Container</h3>
                <DungeonContainer />
                <PlayerContainer />
                <ActionBar />
            </div>
            )
        }
    }


export default GameContainer;
