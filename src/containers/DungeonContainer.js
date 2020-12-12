import React from 'react'
import MonsterCard from '../components/MonsterCard'
import EventBox from '../components/EventBox'
import EndGame from '../components/EndGame'
import { connect} from "react-redux"
import { fetchDungeon } from "../actions/gameActions"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class DungeonContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDungeon(1);
    }

    renderDungeon() {
        if (this.props.dungeonReducer.loading) {
            return (<h2>Loading Dungeon</h2>)
        }
        let dungeon
        let nextDungeon
        let score
        dungeon = this.props.dungeonReducer.dungeon
        nextDungeon = dungeon.attributes.level_number + 1
        score = this.props.fightReducer.player.player_attack * this.props.fightReducer.player.player_health * 10
        
        
            if (this.props.fightReducer.monster_stats.monster_health <= 0) {

                if (dungeon.attributes.monsters[0].final_boss){
                    return(
                        <EndGame score={score}/>
                    )
                }
                return(
                    <div>
                        <h1>Dungeon Level {dungeon.attributes.level_number}</h1>
                        <p>{this.props.dungeonReducer.monster.death_text}</p>
                        <br></br>
                        <p>You've found some loot!</p>
                        <Button variant="light" size="lg">LOOT</Button>


                        <p>{dungeon.attributes.exit_text}</p>
                        <Button variant="dark" size="lg" onClick={() => this.props.fetchDungeon(nextDungeon)}>Next Dungeon Level!</Button>
                    </div>
                )
            }   
                return (
                    <div>
                        <Card variant="dark">
                        <h1>Dungeon Level {dungeon.attributes.level_number}</h1>
                        <p>{dungeon.attributes.entry_text}</p>
                        <MonsterCard monster={this.props.dungeonReducer.monster} monster_health={this.props.fightReducer.monster_stats.monster_health} />
                        <EventBox action_outcome={this.props.fightReducer.action_outcome} />
                        </Card>
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