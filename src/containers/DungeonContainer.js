import React from 'react'
import MonsterCard from '../components/MonsterCard'
import EventBox from '../components/EventBox'
import Card from 'react-bootstrap/Card'
import { connect} from "react-redux"
import { fetchDungeon } from "../actions/gameActions"


class DungeonContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDungeon(1);
    }

    renderDungeon() {
        if (this.props.dungeonReducer.loading) {
            return <h2>Loading Dungeon</h2>
        }
            console.log("renderdungeon")
            let dungeon
            dungeon = this.props.dungeonReducer.dungeon
            return (
            <div>
                <h1>Dungeon Level {dungeon.attributes.level_number}</h1>
                <p>{dungeon.attributes.entry_text}</p>
                <MonsterCard monster={this.props.dungeonReducer.monster} monster_health={this.props.fightReducer.monster.monster_game_health} />
                <EventBox action_outcome={this.props.fightReducer.action_outcome} />
            </div>)
    }


    render(){
        return(
            <div><Card border = {"danger"}> 
            {this.renderDungeon()}
                </Card>
            </div>
                )
            }

    }

    const mapStateToProps = (state) => {
        return state
} 

export default connect(mapStateToProps, {fetchDungeon})(DungeonContainer);