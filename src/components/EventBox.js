import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const EventBox = (props) => {
return (
<div><Card>Event Box
    
    <h3>{props.outcome}</h3>

    </Card> </div>
)
}
export default EventBox;