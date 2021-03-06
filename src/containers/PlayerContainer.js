import React from 'react'
import PlayerCard from '../components/PlayerCard'
import Card from 'react-bootstrap/Card'
import { connect} from "react-redux"

class PlayerContainer extends React.Component {

    renderPlayer() {
        if (this.props.dungeonReducer.loading) {
            return <h2>Loading Dungeon</h2>
        } let player 
        player = this.props.fightReducer.player
        return(
            <div>
                <PlayerCard player={player} />
            </div>
        )
    }

    render() {
        return(
            <div><Card border ="primary">
                {this.renderPlayer()}    
                </Card>
            </div>
            )
        }
    
}

const mapStateToProps = (state) => {
    return state
} 

export default connect(mapStateToProps)(PlayerContainer);