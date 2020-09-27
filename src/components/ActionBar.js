import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux"
import { playerDmg, monsterDmg } from "../actions/attackActions"

const ActionBar = (props) => {
    debugger
return(
<div> ActionBar
    <button onClick={props.playerDmg} id="player-dmg">Attack</button>
<Button variant="dark" size="lg" onClick={props.playerDmg}>Sword</Button>{' '}
<Button variant="dark" size="lg" onClick={props.monsterDmg}>Shield</Button>{' '}
<Button variant="dark" size="lg">Spell</Button>
</div>
)
}
export default connect(null, {playerDmg, monsterDmg})(ActionBar);