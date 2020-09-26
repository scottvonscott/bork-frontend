import React from 'react';

const HighScoreCard = (props) => {
console.log(props)
return(
<div>
  <h1>High Scores</h1>
  {props.highScores.data.map(game => <ul>Player: {game.attributes.player.name} - {game.attributes.score}</ul>)}
    </div>
)
}
export default HighScoreCard;