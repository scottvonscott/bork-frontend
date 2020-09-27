import React from 'react'


const MonsterCard = (props) => {
    console.log("Monster incoming")
    console.log(props)
    return(
<div>
    <h3>{props.monster[0].name}</h3>
    <img src={props.monster[0].img_url} />
    <p>Monster Health: {props.monster[0].health}</p>
    <p>Monster Attack: {props.monster[0].attack}</p>
    </div>
    )
}
export default MonsterCard;