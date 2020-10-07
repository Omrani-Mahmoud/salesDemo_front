import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField } from '@material-ui/core';

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';



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
    cancel: {
        margin: theme.spacing(0.5, 0, 2),
        background:'#d6d6d6',
        color:'grey',
        '&:hover':{
            background:'#ff4444',
            color:'white',
    
        }
    
      },
      save: {
        margin: theme.spacing(0.5, 0, 2),
        background:'#d6d6d6',
        color:'grey',
        '&:hover':{
            background:'#43d96b',
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
function NewCardPopup(props) {
    const classes = useStyles();

    return (
        <div>
                <Dialog
                    open={props.open}
                    onClose={props.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"New Credit Card"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    <form className={classes.form} noValidate >
                            <Grid container spacing={2} style={{padding:'25px'}}>
                            
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    className={classes.txtInput}
                                variant="outlined"
                                required
                                fullWidth
                                id="cardNumber"
                                label="Card Number"
                                name="cardNumber"
                                size={'small'}
                                
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.txtInput}
                                name="mm/yy"
                                variant="outlined"
                                required
                                fullWidth
                                id="mm/yy"
                                label="mm/yy"
                                autoFocus
                                size={'small'}
                              
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.txtInput}
                                variant="outlined"
                                required
                                fullWidth
                                id="cvc"
                                label="CVC"
                                name="cvc"
                                size={'small'}
                                
                                />
                            </Grid>
                            </Grid>
                    </form>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={props.handleClose} color="primary" variant='contained' className={classes.cancel}>
                        cancel
                    </Button>
                    <Button onClick={props.saveCreditCard} color="primary" autoFocus variant='contained' className={classes.save}>
                        Save
                    </Button> 
                    </DialogActions>
                </Dialog>
                <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={props.openSnackBar}
                autoHideDuration={6000}
                onClose={props.closeSnackBar}
                message={`Credit Card successfully added!`}
                TransitionComponent={props.snack_transation}
                
                action={
                    <React.Fragment>
                        <CheckCircleIcon />
                      <IconButton size="small" aria-label="close" color="inherit" onClick={props.closeSnackBar}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
             
      />
        </div>
    )
}

export default NewCardPopup
