import React from 'react'
import { addScore } from '../actions/gameActions'
import HighScoreContainer from '../containers/HighScoreContainer';

class ScoreForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value : ''}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let score = this.props.score.score
    let player = this.state.value
    addScore(score, player)
    return (
      <HighScoreContainer />
    )
    
  }

  render () {
  return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Player Name:
          <input type="text" name="Player Name" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit Your Score" />
      </form>
      </div>
        )

}
}


export default ScoreForm;