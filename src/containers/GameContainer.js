import React from 'react'
import MonsterContainer from "./MonsterContainer"
import PlayerContainer from "./PlayerContainer"
import EventBox from "../components/EventBox"
import Button from 'react-bootstrap/Button'

class GameContainer extends React.Component {

    // }    constructor() {
    //     super()
    //     this.state ={
    //         player: {},
    //     }

    render() {
        return(
            <div className="game-container">
                <h3>Game Container</h3>
           

                
                <MonsterContainer />
                <PlayerContainer />
                <EventBox />
            
            </div>
        )
    }

    
}
export default GameContainer;
