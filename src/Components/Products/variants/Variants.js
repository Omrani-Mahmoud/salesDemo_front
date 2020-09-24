import React from 'react'
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
     width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


function Variants({index,deleteVariant,commit_changes_options,object,commit_changes_input}) {
    const classes = useStyles();

    return (
        <Grid item md={6} xs={12}>
       
                <FormControl className={classes.formControl}>
  
                     <CloseIcon fontSize="inherit"  style={{marginRight:'5px',cursor:"pointer"}}  color='secondary' onClick={()=> deleteVariant(index)}/>
     
                    <Select
                        variant='outlined'
                        style={{width:'200px',height:'40px',marginRight:"10px"}}
                        onChange={(e)=>{commit_changes_options(index,e.target.value)}}
                      >
                            <MenuItem value={'color'}>Color</MenuItem>
                            <MenuItem value={'material'}>Material</MenuItem>
                            <MenuItem value={'style'}>Style</MenuItem>
                            <MenuItem value={'size'}>Size</MenuItem>
                    </Select>
                    <TextField  placeholder='content' size='small' variant='outlined' onChange={(e)=>{commit_changes_input(index,e.target.value)}}/>
                </FormControl>
        </Grid>
    )
}

export default Variants
