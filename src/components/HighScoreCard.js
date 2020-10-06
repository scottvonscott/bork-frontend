import React from 'react';
import LikedScores from './LikedScores'


const HighScoreCard = (props) => {
    return(
      <div>
        <h1>High Scores</h1>
        <p>
        {props.highScores.data.map(game => <LikedScores game={game}/>)
        }
        
        </p>
          </div>
      )
    }
export default HighScoreCard;