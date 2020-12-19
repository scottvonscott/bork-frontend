import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux"
import {armor, weapon} from "../actions/lootActions"

const LootOption = (props) => {
    debugger
    let armorOption = props.loot[1].name
    let weaponOption = props.loot[0].name
    debugger

    return(
        <div>
            <Button variant="danger" size="lg" >{armorOption}</Button>
            <Button variant="danger" size="lg" >{weaponOption}</Button>

        </div>
    )

}

export default connect(null, {armor, weapon})(LootOption);
