import React from 'react'
import PlayerCard from '../components/PlayerCard'
import ActionBar from '../components/ActionBar'
import Card from 'react-bootstrap/Card'


const PlayerContainer = () =>
<div><Card border ="primary">Player Container
    <PlayerCard />
    <ActionBar />
    </Card>
</div>

export default PlayerContainer;