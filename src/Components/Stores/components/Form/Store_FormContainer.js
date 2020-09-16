import React,{useState} from 'react'
import Store_Form from './Store_Form'
import Snackbar from '@material-ui/core/Snackbar';
import { Slide } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }

function Store_FormContainer({handleForm,showForm}) {

    const [openSnackBar, setopenSnackBar] = useState(false)
    const [transition, setTransition] = React.useState(undefined);

    const handleClick = (Transition) => {
        setTransition(() => Transition);
        setopenSnackBar(true);
      };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setopenSnackBar(false);
      };

    const addForm = (val)=>{
            console.log("add store ",val)
            handleClick(TransitionUp);
            handleForm(true);
    }

    return (
            <Store_Form handleForm={handleForm}  addAction={addForm} openSnack={openSnackBar} snack_transition={transition} closeSnack={handleClose} showForm={showForm}/>
            )
}

export default Store_FormContainer
