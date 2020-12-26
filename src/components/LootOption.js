import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux"

import {armor, weapon} from "../actions/lootActions"

const LootOption = (props) => {
    
    const [isShown, showArmorDescription] = useState(false)
    const [isSeen, showWeaponDescription] = useState(false)
    let armorOption = props.loot[1]
    let weaponOption = props.loot[0]
    

    return(
        <div>
            <h3>
            <Button variant="danger" size="lg" onMouseEnter={() => showArmorDescription(true)} onMouseLeave={() => showArmorDescription(false)} >{armorOption.name}</Button>

            {isShown && (
                <div>
                    {armorOption.description}
                </div>
            )}
            </h3>

            <h3>
            <Button variant="danger" size="lg" onMouseEnter={() => showWeaponDescription(true)} onMouseLeave={() => showWeaponDescription(false)} >{weaponOption.name}</Button>

            {isSeen && (
                <div>
                    {weaponOption.description}
                </div>
)}
            </h3>

        </div>
    )

}

export default connect(null, {armor, weapon})(LootOption);
