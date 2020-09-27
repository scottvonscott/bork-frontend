import React from 'react'
import MonsterCard from '../components/MonsterCard'
import EventBox from '../components/EventBox'
import Card from 'react-bootstrap/Card'
import { connect} from "react-redux"
import { fetchDungeon } from "../actions/gameActions"


class DungeonContainer extends React.Component {

    componentDidMount() {
        console.log("first")
        this.props.fetchDungeon(1);
        console.log('second')
    }

    renderDungeon() {
        if (this.props.loading) {
            return <h2>Loading Dungeon</h2>
        }
        console.log("renderdungeon")
        let dungeon
        dungeon = this.props.dungeons.data
        let dungeon_monsters = dungeon.monsters
        return (<div>
            <h3>{dungeon.attributes.level_number}</h3>
            <h3>{dungeon.attributes.entry_text}</h3>
            <MonsterCard monster={dungeon_monsters} />
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
        console.log('mapstatetoprops')
        return state
} 

export default connect(mapStateToProps, {fetchDungeon})(DungeonContainer);