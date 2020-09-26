import React from 'react'
import PlayerCard from '../components/PlayerCard'
import ActionBar from '../components/ActionBar'
import Card from 'react-bootstrap/Card'


const PlayerContainer = (props) =>{
console.log(props)
return(
<div><Card border ="primary">Player Container
    <PlayerCard player={props}/>
    <ActionBar />
    </Card>
</div>
)
}

export default PlayerContainer;