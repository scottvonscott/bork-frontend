import React from 'react'
import DungeonContainer from "./DungeonContainer"
import PlayerContainer from "./PlayerContainer"
import ActionBar from '../components/ActionBar'
import { connect} from "react-redux"
import Card from 'react-bootstrap/Card'
import GameOver from '../components/GameOver'


class GameContainer extends React.Component {
    
    render(){

        if (this.props.fightReducer.player.player_health <= 0) {
            return (
                <div><Card border = {"danger"}> 
                    <GameOver />
                </Card>
            </div>

            )}
        return(
            <div className="game-container">
                <DungeonContainer />
                <ActionBar />
                <PlayerContainer />
                
            </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return state
    } 

export default connect(mapStateToProps)(GameContainer);
