import React from 'react'
import Button from 'react-bootstrap/Button'
import EventBox from "../components/EventBox"

import { connect } from "react-redux"
import { playerDmg, monsterDmg } from "../actions/attackActions"

const ActionBar = (props) => {
    let outcome = ""
     const roshambo = (p_action, props) => {

         let bothAttack = "You both attack, no one takes damage"
         let attackDefend = "You attack, and it defends"
         let attackSpell = "You attack, and it casts a spell"
         let bothDefend = "You both defend"
         let bothCastSpell = "You both cast spells"
         let defendAttack = "You defend and it attacks"
         let defendSpell = "You defend and it casts a spell"
         let spellAttack = "You cast a spell and it attacks"
         let spellDefend = "You cast a spell and it defends"

         let player_a = parseInt(p_action)
        let m_actions = [1, 2, 3]
        let getRndInteger = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let m_action = getRndInteger(1, m_actions.length)
        console.log("I was called")
    
        if (player_a === 1 && m_action === 1) {
            console.log("You both attack")
            console.log(player_a)
            console.log(m_action)
            return defendSpell
            
        }
        else if (player_a === 2 && m_action === 2){
            console.log("You both defend")
            console.log(player_a)
            console.log(m_action)
           return defendSpell
        }
        else if (player_a === 3 && m_action === 3){
            console.log("You both cast spells")
            console.log(player_a)
            console.log(m_action)
            return defendSpell
        }
        else if (player_a === 1 && m_action === 2){
            console.log("You attack, they defend")
            console.log(player_a)
            console.log(m_action)
            {props.playerDmg()}
            return defendSpell
        }
        else if (player_a === 1 && m_action === 3){
            console.log("You attack the cast spells")
            console.log(player_a)
            console.log(m_action)
            {props.monsterDmg()}
            return defendSpell
        }
        else if (player_a === 2 && m_action === 1){
            console.log("You defend they attack")
            console.log(player_a)
            console.log(m_action)
            {props.monsterDmg()}
           return defendSpell
        }
        else if (player_a === 2 && m_action === 3){
            console.log("You defend they cast spells")
            console.log(player_a)
            console.log(m_action)
            {props.playerDmg()}
           return defendSpell
        }
        else if (player_a === 3 && m_action === 1){
            console.log("You cast spells they attack")
            console.log(player_a)
            console.log(m_action)
            {props.playerDmg()}
         return defendSpell
        } else if (player_a === 3 && m_action === 2) {
            console.log(player_a)
            console.log(m_action)
            {props.monsterDmg()}
            console.log("You cast spells they defend")
            return defendSpell
        }
    }

    // const renderOutcome = (outcome) => {
    //     console.log(outcome)
    //     if (outcome != ""){
    //     return (<EventBox outcome={outcome}/>)
    //     }
    // }

        return(
        <div>
            {/* {renderOutcome(outcome)} */}
            
             ActionBar
        <Button variant="dark" size="lg" onClick={() => roshambo("1", props)}>Sword</Button>
        <Button variant="dark" size="lg" onClick={() => roshambo("2", props)}>Shield</Button>
        <Button variant="dark" size="lg" onClick={() => roshambo("3", props)}>Spell</Button>
        </div>
        )
}
export default connect(null, {playerDmg, monsterDmg})(ActionBar);













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