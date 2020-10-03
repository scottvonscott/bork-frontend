import React from 'react'
import MonsterCard from '../components/MonsterCard'
import EventBox from '../components/EventBox'
import EndGame from '../components/EndGame'
import GameOver from '../components/GameOver'
import Card from 'react-bootstrap/Card'
import { connect} from "react-redux"
import { fetchDungeon } from "../actions/gameActions"
import Button from 'react-bootstrap/Button'


class DungeonContainer extends React.Component {

    componentDidMount() {
        this.props.fetchDungeon(1);
    }

    componentDidUpdate() {
        debugger
        if (this.props.fightReducer.player.player_health <= 0) {
            return (
                <div>
                    <GameOver />
                </div>)
        }
    }


    renderDungeon() {
        if (this.props.dungeonReducer.loading) {
            return (<h2>Loading Dungeon</h2>)
        }
        let dungeon
        let nextDungeon
        dungeon = this.props.dungeonReducer.dungeon
        nextDungeon = dungeon.attributes.level_number + 1
        
        // Conditional rendering here for dungeon exit text, monster death, button to fetch new dungeon IF monster_health === 0
            if (this.props.fightReducer.monster_stats.monster_health <= 0) {
                // if (nextDungeon === 5){
                //     const score = 1000
                //     return(
                //         <EndGame score={score}/>
                //     )
                // }
            
                return(
                    <div>
                        <h1>Dungeon Level {dungeon.attributes.level_number}</h1>
                        <p>{dungeon.attributes.exit_text}</p>
                        <Button variant="dark" size="lg" onClick={() => this.props.fetchDungeon(nextDungeon)}>Next Dungeon Level!</Button>
                    </div>
                )
            }   
                return (
                    <div>
                        <h1>Dungeon Level {dungeon.attributes.level_number}</h1>
                        <p>{dungeon.attributes.entry_text}</p>
                        <MonsterCard monster={this.props.dungeonReducer.monster} monster_health={this.props.fightReducer.monster_stats.monster_health} />
                        <EventBox action_outcome={this.props.fightReducer.action_outcome} />
                    </div>)
    }

    renderGameOver() {
        if (this.props.fightReducer.player.player_health <= 0) {
            return (
                <div>
                    <GameOver />
                </div>)
        }
    }


   


    render(){
        if (this.props.fightReducer.player.player_health <= 0) {
            return (
                <div><Card border = {"danger"}> 
                    <GameOver />
                </Card>
            </div>

            )}

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