import React from 'react'
import Button from 'react-bootstrap/Button'
import EventBox from "../components/EventBox"

import { connect } from "react-redux"
import { playerDmg, monsterDmg } from "../actions/attackActions"

const ActionBar = (props) => {
    debugger
    const roshambo = (p_action) => {
        let m_actions = [1, 2, 3]
        let getRndInteger = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let m_action = getRndInteger(0, m_actions.length - 1)
debugger
        switch(p_action, m_action) {
            case p_action === 1 && m_action === 1:
                console.log(p_action)
                console.log(m_action)
                return "You both attack! No damage is done..."
            case p_action === 1 && m_action === 2:
                console.log(p_action)
                console.log(m_action)
                // return {props.playerDmg}
            case p_action === 1 && m_action === 3:
                console.log(p_action)
                console.log(m_action)
                // return {props.monsterDmg}

            case p_action === 2 && m_action === 1:
                console.log(p_action)
                console.log(m_action)
                // return {props.monsterDmg}
            case p_action === 2 && m_action === 2:
                console.log(p_action)
                console.log(m_action)
                return "You both defend! No damage is done..."
            case p_action === 2 && m_action === 3:
                console.log(p_action)
                console.log(m_action)
                // return {props.playerDmg}

            case p_action === 3 && m_action === 1:
                console.log(p_action)
                console.log(m_action)
                // return {props.playerDmg}
            case p_action === 3 && m_action === 2:
                console.log(p_action)
                console.log(m_action)
                // return {props.monsterDmg}
            case p_action === 3 && m_action === 3:
                console.log(p_action)
                console.log(m_action)
                return "You both cast spells! Your spells collide and cancel each other out. No damage is done"
        }

    }
        return(
        <div> ActionBar
        <Button variant="dark" size="lg" onClick={roshambo(1)}>Sword</Button>{' '}
        <Button variant="dark" size="lg" onClick={roshambo(2)}>Shield</Button>{' '}
        <Button variant="dark" size="lg" onClick={roshambo(3)}>Spell</Button>
        </div>
        )
        }
export default connect(null, {playerDmg, monsterDmg})(ActionBar);