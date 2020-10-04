import React from 'react'
import ScoreForm from './ScoreForm'

const EndGame = (score) => {
    debugger
    return(
      <div>
          <h1>
              You saved Bork! 
              Your score is: {score.score}
              <ScoreForm score={score} />
              
          </h1>
    
      </div>
    )
  }

export default EndGame