import React from 'react'
import Card from 'react-bootstrap/Card'


const MonsterCard = (props) => {
    console.log("Monster incoming")
    console.log(props)
    return(
<div>
    <Card>
    <h1>Monster Encounter!</h1>
    <p>{props.monster[0].intro_text}</p>
    <p>{props.monster[0].name}: "{props.monster[0].quote}"</p>
    <img src={props.monster[0].img_url} />
    <p>Health: {props.monster[0].health} | Attack: {props.monster[0].attack}</p>
    </Card>
    </div>
    )
}
export default MonsterCard;