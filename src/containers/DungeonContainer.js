import React from 'react'
import MonsterCard from '../components/MonsterCard'
import EventBox from '../components/EventBox'
import Card from 'react-bootstrap/Card'


const DungeonContainer = (props) => {
    console.log(props)
    return(
<div><Card border = {"danger"}> 
{/* <h3>Dungeon Level: {props.dungeons.dungeons.data.attributes.level_number}</h3>
    <MonsterCard monster={props.dungeons.dungeons.data.attributes.monsters}/>
    <EventBox event_text={props.dungeons.dungeons.data.attributes}/> */}
    </Card>
</div>
    )
}
export default DungeonContainer;