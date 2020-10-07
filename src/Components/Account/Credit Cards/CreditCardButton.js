import { Button, Grid } from '@material-ui/core'
import React from 'react'
import CreditCardIcon from '@material-ui/icons/CreditCard';
function CreditCard(props) {
    return (
        <Grid item xs={12} sm={12}>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{background:'#373738',color:'white'}}
                startIcon={<CreditCardIcon />}
                onClick={props.handler}
            >
          My credit Cards
        </Button>
        </Grid>
    )
}

export default CreditCard
