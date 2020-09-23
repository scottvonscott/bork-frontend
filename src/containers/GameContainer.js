import React from 'react'
import MonsterContainer from "./MonsterContainer"
import PlayerContainer from "./PlayerContainer"
import ActionBar from "../components/ActionBar"
import EventBox from "../components/EventBox"

class GameContainer extends React.Component {
    constructor() {
        super()
        this.state ={
            player: {},
        }
    }

    render() {
        return(
            <div>
                Game Container
                <MonsterContainer />
                <PlayerContainer />
                <ActionBar />
                <EventBox />
            </div>
        )
    }

    
}
export default GameContainer;
