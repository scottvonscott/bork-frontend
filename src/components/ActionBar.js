import React from 'react'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux"
import { playerDmg, monsterDmg, outcome } from "../actions/attackActions"

const ActionBar = (props) => {
     const roshambo = (p_action, props) => {

        let player_a = parseInt(p_action)
        let m_actions = [1, 2, 3]
        let getRndInteger = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let m_action = getRndInteger(1, m_actions.length)
        
        if (player_a === 1 && m_action === 1) {
            props.outcome(1)
        }
        else if (player_a === 2 && m_action === 2){
            props.outcome(2)
        }
        else if (player_a === 3 && m_action === 3){
            props.outcome(3)
        }
        else if (player_a === 1 && m_action === 2){
            props.playerDmg()
            props.outcome(4)
        }
        else if (player_a === 1 && m_action === 3){
            props.monsterDmg()
            props.outcome(5)
        }
        else if (player_a === 2 && m_action === 1){
            props.monsterDmg()
            props.outcome(6)
        }
        else if (player_a === 2 && m_action === 3){
            props.playerDmg()
            props.outcome(7)
        }
        else if (player_a === 3 && m_action === 1){
            props.playerDmg()
            props.outcome(8)
        } else if (player_a === 3 && m_action === 2) {
            props.monsterDmg()
            props.outcome(9)
        }
    }

        return(
        <div>
            <Button variant="danger" size="lg" onClick={() => roshambo("1", props)}>Sword</Button>
            <Button variant="success" size="lg" onClick={() => roshambo("2", props)}>Shield</Button>
            <Button variant="dark" size="lg" onClick={() => roshambo("3", props)}>Spell</Button>
        </div>
        )
}
export default connect(null, {playerDmg, monsterDmg, outcome})(ActionBar);













  //     switch(p_action, m_action) {
    //         case (p_action === "1" && m_action === "1"):
    //             console.log(p_action)
    //             console.log(m_action)
    //             return "You both attack! No damage is done..."
    //         case p_action === "1" && m_action === "2":
    //             console.log(p_action)
    //             console.log(m_action)
    //             // return props.playerDmg
    //         case p_action === "1" && m_action === 3:
    //             console.log(p_action)
    //             console.log(m_action)
    //             // return props.monsterDmg

    //         case p_action === "2" && m_action === "1":
    //             console.log(p_action)
    //             console.log(m_action)
    //             // return {props.monsterDmg}
    //         case p_action === "2" && m_action === "2":
    //             console.log(p_action)
    //             console.log(m_action)
    //             return "You both defend! No damage is done..."
    //         case p_action === "2" && m_action === "3":
    //             console.log(p_action)
    //             console.log(m_action)
    //             // return {props.playerDmg}

    //         case p_action === "3" && m_action === "1":
    //             console.log(p_action)
    //             console.log(m_action)
    //             // return {props.playerDmg}
    //         case p_action === "3" && m_action === "2":
    //             console.log(p_action)
    //             console.log(m_action)
    //             // return {props.monsterDmg}
    //         case p_action === "3" && m_action === "3":
    //             console.log(p_action)
    //             console.log(m_action)
    //             return "You both cast spells! Your spells collide and cancel each other out. No damage is done"
    //     }

    // }