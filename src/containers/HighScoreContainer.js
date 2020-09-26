import React from 'react'
import HighScoreCard from '../components/HighScoreCard'

class HighScoreContainer extends React.Component {
    state = {
        highScores: []
    }


    componentDidMount() {
        fetch("http://localhost:3000/games")
          .then((res) => res.json())
          .then((response) => {
            this.setState({
              highScores: response
            });
          })
      }

      render() {
          return(
              <HighScoreCard highScores={this.state.highScores}/>
          )
      }
}

export default HighScoreContainer

