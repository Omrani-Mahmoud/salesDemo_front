import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FileInput from '../Other/FileInput';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Variants_container from './variants/Variants_container';
import Fulfillment from './Fulfillment';


function NewProduct_form({open_form,handleClose,display_variants,handle_display_variants,save_variants, save,handle_inputs}) {


  const btn_style_add_variants = {
    paddingLeft:'10px',
    paddingRight:'10px',
    textTransform:'capitalize',
    fontSize:'14px',
    color:'#a3a3a3',
    margin:'6px'
  }

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

    return (
        <Dialog
          fullWidth={true}
          maxWidth={'lg'}
          open={open_form}
          onClose={handleClose}
          aria-labelledby="max-width-dialog-title"
        >
        <DialogTitle id="max-width-dialog-title">New product</DialogTitle>
        <DialogContent>
        <Grid container spacing={3}>
              <Grid item xs={6}>
                    <section >
                      <FileInput />
                      <Button size="small" style={btn_style_add_variants} onClick={()=>{handle_display_variants(true)}} disabled={display_variants}>
                        Add variants ?
                      </Button>
                      {
                         display_variants && <Variants_container  save_variants={save_variants}/>
                      }
                    </section>
              </Grid>
              <Grid item xs={6}>
                    <section >
                      <TextField id="outlined-basic" size="small" label="Product name" variant="outlined" fullWidth style={{paddingBottom:'15px'}} onChange={(e)=>{handle_inputs('name',e.target.value)}}/>
                      <TextField id="outlined-basic" size="small" label="Url" variant="outlined" fullWidth style={{paddingBottom:'15px'}} onChange={(e)=>{handle_inputs('url',e.target.value)}}/>
                      <Fulfillment  handle_inputs={handle_inputs}/>
                      
                      <TextareaAutosize
                            rowsMax={15}
                            style={{width:'100%',height:'150px',padding:'6px'}}
                            aria-label="maximum height"
                            placeholder='Additional information about your product'
                            onChange={(e)=>{handle_inputs('description',e.target.value)}}
                            
                        />
                    </section>
              </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
        <Button onClick={()=>save()}
                  style={btn_style_add_product}
                  
          >
            Save product
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default NewProduct_form
