import React from 'react'
import DungeonContainer from "./DungeonContainer"
import PlayerContainer from "./PlayerContainer"
import EventBox from "../components/EventBox"
import Button from 'react-bootstrap/Button'
import { connect} from "react-redux"
import { fetchDungeons } from "../actions/gameActions"

class GameContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDungeons()
    }
            render(){
                return(
            <div className="game-container">
                <h3>Game Container</h3>
                <DungeonContainer dungeons={this.props.dungeons}/>
                <PlayerContainer player={this.props.player}/>
                <EventBox />
            
            </div>
        )
                }
            }
    const mapStateToProps = (state) => {
        const gameState = {
            dungeons: state,
            player: {
            player_name: "Scott",
            player_health: 15,
            player_attack: 5}
        }
        return gameState;
    }


export default connect(mapStateToProps, { fetchDungeons})(GameContainer);
