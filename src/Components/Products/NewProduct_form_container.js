import React, { useReducer, useState } from 'react'
import NewProduct_form from './NewProduct_form'
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Button from '@material-ui/core/Button';


const product =   {
  name:'',
  url:'',
  description:'',
  variants:[],
    type:'',
    quantity:''
};

const reducer = (state,action)=>{
  switch (action.type) {
    
    case 'add_variants':
      return {...state,variants:action.value}
    case 'name':
      return {...state,name:action.value}
    case 'url':
      return {...state,url:action.value}
    case 'description':
      return {...state,description:action.value}
    case 'fulfillment_type':
      return {...state,type:action.value}
    case 'quantity':
      return {...state,quantity:action.value}
    default:
      return state
  }
}

function NewProduct_form_container() {

  const btn_style_add_product = {
    background: 'rgb(77,92,106)',
    float:'right',
    paddingLeft:'10px',
    paddingRight:'10px',
    textTransform:'capitalize',
    fontSize:'14px',
    color:'white',
    margin:'6px',
    float:'right'
  }

const [open, setOpen] = useState(false)
const [is_display_variant, setis_display_variant] = useState(false);
const [state, dispatch] =useReducer(reducer, product)

const handleClose = () => {
    setOpen(false);
  };  

const handleOpen = () => {
  setOpen(true);
}; 

const save_product  = ()=>{
    console.log('product',state)
}


const handle_inputs = (action,value)=>{
    dispatch({type:action,value:value})
}
    return (
        <>
         <Button onClick={()=>handleOpen()}
                  style={btn_style_add_product}
                  startIcon={<LocalOfferIcon />}
          >
            New Product
          </Button>
        <NewProduct_form open_form={open} handleClose={handleClose} display_variants={is_display_variant}  handle_display_variants={setis_display_variant} save_variants={dispatch} save={save_product} handle_inputs={handle_inputs}/>
     
        </>
    )
}

export default NewProduct_form_container
