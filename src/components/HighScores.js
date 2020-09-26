import React from 'react';

class HighScores extends React.Component {
  state = {
    highScores: []
  }

  render() {
    return(
      <div>
      </div>
    )
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

}

export default HighScores;