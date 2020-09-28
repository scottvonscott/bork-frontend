import React from 'react'
import DungeonContainer from "./DungeonContainer"
import PlayerContainer from "./PlayerContainer"
import ActionBar from '../components/ActionBar'



class GameContainer extends React.Component {

    render(){
        return(
            <div className="game-container">
                <DungeonContainer />
                <ActionBar />
                <PlayerContainer />
                
            </div>
            )
        }
    }


export default GameContainer;
