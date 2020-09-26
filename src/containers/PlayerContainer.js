import React from 'react'
import PlayerCard from '../components/PlayerCard'

import Card from 'react-bootstrap/Card'


const PlayerContainer = (props) =>{

return(
<div><Card border ="primary">
    <PlayerCard player={props}/>
    
    </Card>
</div>
)
}

export default PlayerContainer;