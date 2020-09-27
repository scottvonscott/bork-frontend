import React from 'react'
import DungeonContainer from "./DungeonContainer"
import PlayerContainer from "./PlayerContainer"
import EventBox from "../components/EventBox"



class GameContainer extends React.Component {

    render(){
        return(
            <div className="game-container">
                <h3>Game Container</h3>
                <DungeonContainer />
                <EventBox />
                <PlayerContainer />
                
            </div>
            )
        }
    }


export default GameContainer;
