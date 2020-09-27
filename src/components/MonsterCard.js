import React from 'react'
import Card from 'react-bootstrap/Card'


const MonsterCard = (props) => {
    console.log("Monster incoming")
    console.log(props)
    return(
<div>
    <Card>
    <h1>MONSTER!</h1>
    <p>{props.monster[0].intro_text}</p>
    <p>{props.monster[0].name}: "{props.monster[0].quote}"</p>
    <img src={props.monster[0].img_url} />
    <p>Monster Health: {props.monster[0].health} | Monster Attack: {props.monster[0].attack}</p>
    </Card>
    </div>
    )
}
export default MonsterCard;