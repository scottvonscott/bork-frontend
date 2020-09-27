import React from 'react'
import Card from 'react-bootstrap/Card'


const MonsterCard = (props) => {
    console.log("Monster incoming")
    console.log(props)
    return(
        <div>
            <Card>
                <h1>MONSTER!</h1>
                <p>{props.monster.intro_text}</p>
                <p>{props.monster.name}: "{props.monster.quote}"</p>
                <img src={props.monster.img_url} />
                <p>Monster Health: {props.monster_health} | Monster Attack: {props.monster.attack}</p>
            </Card>
        </div>
            )
}
export default MonsterCard;