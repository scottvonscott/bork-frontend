import React from 'react'
import Card from 'react-bootstrap/Card'

const PlayerCard = (props) => {    
return(
<div>
    <Card>
        <h3>{props.player.player_name}</h3>
        <h3>Health: {props.player.player_health} | Attack: {props.player.player_attack}</h3>
    </Card>

    
    
    </div>)
}
export default PlayerCard;