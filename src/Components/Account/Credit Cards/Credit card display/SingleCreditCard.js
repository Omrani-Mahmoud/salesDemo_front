import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, TextField } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      
      //marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(0.5, 0, 2),
        background:'#d6d6d6',
        color:'grey',
        '&:hover':{
            background:'#ff4444',
            color:'white',
    
        }
    
      },
    txtInput: {
        '& label.Mui-focused': {
          color: 'grey',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
          
         
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
      },
  }));
function SingleCreditCard() {
    const classes = useStyles();
    return (
        <Grid container spacing={2} style={{padding:'25px'}}>

        <Grid item xs={12} sm={3}>
           <TextField
             name="cardNumber"
             variant="outlined"
             required
             fullWidth
             id="cardNumber"
             label="Card Number"
             autoFocus
             size={'small'}
             value={'XXX XXX XXX 445'}
             disabled
           />
         </Grid>
         <Grid item xs={12} sm={3}>
           <TextField
               
             variant="outlined"
             required
             fullWidth
             id="exprDate"
             label="Expiration Date"
             name="exprDate"
             size={'small'}
             value={'03/21'}
             disabled
           />
         </Grid>
         <Grid item xs={12} sm={3}>
         <Button variant="contained" size="small" color="default" className={classes.submit}>
         Delete
       </Button>
       </Grid>
         </Grid>
    )
}

export default SingleCreditCard
