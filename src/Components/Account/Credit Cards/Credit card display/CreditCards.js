import React,{useState} from 'react'
import SingleCreditCard from './SingleCreditCard'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button, Grid } from '@material-ui/core';
import NewCardPopupContainer from './NewCardPopupContainer';

function CreditCards() {

    const add_credit_card_btnStyle= {
        background: 'rgb(77,92,106)',
        textTransform:'capitalize',
        fontSize:'14px',
        color:'white',
      }

      const [openState, setopenState] = useState(false);


      const handleClose = ()=>{
          setopenState(false)
      }

      const handleOpen = ()=>{
        setopenState(true)
    }

    const getCards = ()=>{
            console.log('fetching cards');
    }
    return (
        <div>
            <NewCardPopupContainer open={openState} handleClose={handleClose} refetchCards= {getCards}/>
             <Grid item xs={12} sm={3} style={{padding:'15px'}}>
            <Button
        variant="contained"
        style={add_credit_card_btnStyle}
        size="small"
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleOpen}
      >
       Add Credit card
      </Button>
      </Grid>
            <SingleCreditCard />
            <SingleCreditCard />
          </div>
    )
}

export default CreditCards
