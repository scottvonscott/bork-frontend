import React from 'react'
import DungeonContainer from "./DungeonContainer"
import PlayerContainer from "./PlayerContainer"
import { connect} from "react-redux"
import { fetchDungeon } from "../actions/gameActions"

class GameContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDungeon(1)
    }
            render(){
                return(
            <div className="game-container">
                <h3>Game Container</h3>
                <DungeonContainer dungeons={this.props.dungeons}/>
                <PlayerContainer player={this.props.player}/>
            
            </div>
        )
                }
            }
    const mapStateToProps = (state) => {
        debugger
        const gameState = {
            dungeons: state,
            player: {
            player_name: "Scott",
            player_health: 15,
            player_attack: 5}
        }
        return gameState;
    }


export default connect(mapStateToProps, { fetchDungeon})(GameContainer);
