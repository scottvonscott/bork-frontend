import React from 'react'
import MonsterCard from '../components/MonsterCard'
import EventBox from '../components/EventBox'
import Card from 'react-bootstrap/Card'


const DungeonContainer = (props) => {
    console.log(props)
    return(
<div><Card border = {"danger"}> Dungeon Container
    <MonsterCard />
    <EventBox />
    </Card>
</div>
    )
}
export default DungeonContainer;