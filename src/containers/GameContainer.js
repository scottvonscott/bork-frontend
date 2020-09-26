import React from 'react'
import MonsterContainer from "./MonsterContainer"
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
                <MonsterContainer />
                <PlayerContainer />
                <EventBox />
            
            </div>
        )
                }
            }
    const mapStateToProps = (state) => {
        return state;
    }


export default connect(mapStateToProps, { fetchDungeons})(GameContainer);
