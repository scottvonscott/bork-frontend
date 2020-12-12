import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux"
import {armor, weapon} from "../actions/lootActions"

const LootOption = (props) => {

    return(
        <div>
            <Button variant="danger" size="lg" onClick={() => roshambo("1", props)}>Sword</Button>
            <Button variant="danger" size="lg" onClick={() => roshambo("1", props)}>Sword</Button>

        </div>
    )

}

export default connect(null, {armor, weapon})(LootOption);
