import React from 'react';

const HighScoreCard = (props) => {
console.log(props)
return(
<div>
  {props.highScores.data.map(game => <li>{game.attributes.score}</li>)}
    </div>
)
}
export default HighScoreCard;