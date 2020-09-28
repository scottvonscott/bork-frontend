import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const EventBox = (props) => {
return (
<div><Card>Battle Results
    
    <h3>{props.action_outcome.log}</h3>

    </Card> </div>
)
}
export default EventBox;