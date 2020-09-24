import React from 'react'
import Button from "react-bootstrap/Button"

const NewGame = () =>
<div>
<form>
  <label>
    Player Name:
    <input type="text" name="Player Name" />
  </label>
  <input type="submit" value="Submit" />
</form>
<Button variant="dark" size="lg">Start New Game</Button>{' '}
</div>

export default NewGame;