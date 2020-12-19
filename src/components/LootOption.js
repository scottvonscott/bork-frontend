import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux"

import {armor, weapon} from "../actions/lootActions"

const LootOption = (props) => {
    debugger
    const [isShown, showArmorDescription] = useState(false)
    let armorOption = props.loot[1]
    let weaponOption = props.loot[0]
    debugger

    return(
        <div>
            <Button variant="danger" size="lg" onMouseEnter={() => showArmorDescription(true)} onMouseLeave={() => showArmorDescription(false)} >{armorOption.name}</Button>
            <Button variant="danger" size="lg" >{weaponOption.name}</Button>

            {isShown && (
                <div>
                    {armorOption.description}
                    </div>
            )}

        </div>
    )

}

export default connect(null, {armor, weapon})(LootOption);
