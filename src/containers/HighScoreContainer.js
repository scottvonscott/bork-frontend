import React from 'react'
import HighScoreCard from '../components/HighScoreCard'

class HighScoreContainer extends React.Component {
    state = {
        highScores: [],
        isLoading: true
    }


    componentDidMount() {
        fetch("http://localhost:3000/games")
          .then((res) => res.json())
          .then((response) => {
            this.setState({
              highScores: response,
              isLoading: false
            });
          })
      }

      render() {
          return(
              <div>
                  {this.state.isLoading ?
                  <h1> Loading High Scores...</h1> :
                  <HighScoreCard highScores={this.state.highScores}/>}
              
              </div>
          )
      }
}

export default HighScoreContainer

