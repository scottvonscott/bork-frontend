import React from 'react'
import MonsterContainer from "./MonsterContainer"
import PlayerContainer from "./PlayerContainer"
import EventBox from "../components/EventBox"
import Button from 'react-bootstrap/Button'
import { connect} from "react-redux"
import { addHealth, subtractHealth} from "../actions/healthActions"

const GameContainer = (props) => {
console.log(props) 
            return(
            <div className="game-container">
                <h3>Game Container</h3>
                <MonsterContainer />
                <PlayerContainer />
                <EventBox />
            
            </div>
        )
    }

export default connect(null, {addHealth, subtractHealth})(GameContainer);
