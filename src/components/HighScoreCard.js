import React from 'react';

const HighScoreCard = (props) => {
    return(
      <div>
        <h1>High Scores</h1>
        {props.highScores.data.map(game => <ul>Player: {game.attributes.player_name} - {game.attributes.score}</ul>)}
          </div>
      )
    }
export default HighScoreCard;