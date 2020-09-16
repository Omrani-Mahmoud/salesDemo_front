import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    txtInput: {
        marginTop:'15px',
        '& label.Mui-focused': {
          color: 'black',
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
function Store_Form({handleForm,addAction,snack_transition,openSnack,closeSnack,showForm}) {
    const classes = useStyles();
    const storeName_ref = React.useRef();
   

    const btn_style_cancel = {
        background: 'rgba(77,92,106,0.6)',
        float:'right',
        paddingLeft:'10px',
        paddingRight:'10px',
        textTransform:'capitalize',
        fontSize:'14px',
        color:'white',
        margin:'6px',
      }
  
      const btn_style_save = {
        background: 'rgb(77,92,106)',
        float:'right',
        paddingLeft:'10px',
        paddingRight:'10px',
        textTransform:'capitalize',
        fontSize:'14px',
        color:'white',
        margin:'6px',
      }

    return (
        <>
        <div hidden={showForm}>
        <span style={{fontWeight:'bold',color:'#303030',opacity:'70%'}}>New Store : </span>

        <form className={classes.root} noValidate autoComplete="off">
            <TextField inputRef={storeName_ref} label="Store name"  className={classes.txtInput} />
        </form>
                    <Button  size='small' style={btn_style_cancel} onClick={()=>handleForm(true)}>cancel</Button>
                    <Button  size='small' style={btn_style_save} onClick={()=>addAction(storeName_ref.current.value)}>save store</Button>
                    
                    </div>
<Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={openSnack}
                autoHideDuration={6000}
                onClose={closeSnack}
                message={`Store successfully added!`}
                TransitionComponent={snack_transition}
                
                action={
                    <React.Fragment>
                        <CheckCircleIcon />
                      <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnack}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
             
      />
</>
    )
}

export default React.memo(Store_Form)
