import React from 'react'
import CreditCard from './CreditCardButton'

function CrediCardsContainer(props) {
    return (
        <div style={{padding:'36px 25px 40px 25px'}}>
            <CreditCard handler={props.handelShowCards}/>
      </div>
    )
}

export default CrediCardsContainer
