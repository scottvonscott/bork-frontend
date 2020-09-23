import React from 'react'
import MonsterContainer from "./MonsterContainer"
import PlayerContainer from "./PlayerContainer"
import ActionBar from "../components/ActionBar"
import EventBox from "../components/EventBox"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class GameContainer extends React.Component {
    constructor() {
        super()
        this.state ={
            player: {},
        }
    }

    render() {
        return(
            <div className="game-container">
                Game Container
                <Card>
                <MonsterContainer />
                <PlayerContainer />
                <ActionBar />
                <EventBox />
                <Button variant="dark" block>Dark</Button>{' '}
                </Card>
            </div>
        )
    }

    
}
export default GameContainer;
