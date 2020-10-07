import React,{useState} from 'react'
import NewCardPopup from './NewCardPopup'

import { Slide } from '@material-ui/core';



function TransitionUp(props) {
    return <Slide {...props} direction="up" />;
  }


function NewCardPopupContainer(props) {
    const [openSnackBar, setopenSnackBar] = useState(false)
    const [transition, setTransition] = React.useState(undefined);

    const handleClick_snackBar = (Transition) => {
        setTransition(() => Transition);
        setopenSnackBar(true);
      };
    
    const handleClose_snackBar = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setopenSnackBar(false);
      };

      const saveCreditCard = ()=>{
        handleClick_snackBar(TransitionUp);
        props.handleClose();
        props.refetchCards();

      }
    return (
     <NewCardPopup  saveCreditCard={saveCreditCard} open={props.open} handleClose={props.handleClose} openSnackBar={openSnackBar} closeSnackBar={handleClose_snackBar} snack_transation={transition}/>
    )
}

export default NewCardPopupContainer
