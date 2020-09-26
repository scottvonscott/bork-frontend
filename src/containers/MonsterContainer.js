import React from 'react'
import MonsterCard from '../components/MonsterCard'
import Card from 'react-bootstrap/Card'


const MonsterContainer = (props) => {
    console.log(props)
    return(
<div><Card border = {"danger"}> Monster Container
    <MonsterCard />
    </Card>
</div>
    )
}
export default MonsterContainer;