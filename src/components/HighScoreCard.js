import React from 'react';
import LikedScores from './LikedScores'


const HighScoreCard = (props) => {
    return(
      <div>
        <h1>High Scores</h1>
        <p>
        {props.highScores.data.map(game => <ul>Player: {game.attributes.player_name} - {game.attributes.score}</ul>)}
        
        </p>
          </div>
      )
    }
export default HighScoreCard;