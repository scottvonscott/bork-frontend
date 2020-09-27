import React from 'react'
import Card from 'react-bootstrap/Card'

const PlayerCard = (props) => {    
return(
<div>
    <Card>
        <h1>{props.player.player_name}</h1>
        <p>Your Health: {props.player.player_health} | Your Attack: {props.player.player_attack}</p>
    </Card>

    
    
    </div>)
}
export default PlayerCard;