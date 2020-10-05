import React from 'react'
import ScoreForm from './ScoreForm'

const EndGame = (score) => {
    debugger
    return(
      <div>
          <h1>You saved Bork! He's so happy to see you!</h1>
              <img src={'https://myfirstshiba.com/wp-content/uploads/2017/11/AdobeStock_149297117.jpg'} />
              <h3>Bork: "Awoof!"</h3>
              <br></br>
              <p>Your prize is the friendship of your bestest budddy. Oh, but here's your score too.</p>
              <br></br>
              <p>Your Score: {score.score}</p>
              <ScoreForm score={score} />
              
          
    
      </div>
    )
  }

export default EndGame