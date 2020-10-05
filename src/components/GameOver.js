import React from 'react'
import Button from 'react-bootstrap/Button'


const GameOver = () => {

    function refreshPage() {
        window.location.reload(false);
      }

    return(
      <div>
          <h3> 
              You got knocked out by the monster and dragged back to the cave entrace...
          </h3>
          <br></br>
          <h3>
              Get back up and save Bork!
          </h3>
          <Button variant="dark" size="lg" onClick={refreshPage}>Try again!</Button>
    
      </div>
    )
  }

export default GameOver