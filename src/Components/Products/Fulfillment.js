import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';

function Fulfillment({handle_inputs}) {


    const [display_input, setdisplay_input] = React.useState('none');
    const [select_value, setselect_value] = React.useState('')
    const handleChange = (event)=>{
            setselect_value(event.target.value)
            handle_inputs('fulfillment_type',event.target.value)
    }

    

    React.useEffect(() => {
        if(select_value==='bulk')
            setdisplay_input('')
    }, [select_value])
    return (
        <Grid xs={12} md={12}>
            <FormControl style={{display:'flex',flexDirection:'column',marginBottom:'10px'}} >
                 <InputLabel id="demo-simple-select-disabled-label">Fulfillment</InputLabel>
                    <Select
                        fullWidth
                        labelId="demo-simple-select-disabled-label"
                        id="demo-simple-select-disabled"
                        defaultValue={select_value}
                        onChange={handleChange}
                    >
                        <MenuItem value={'bulk'}>Bulk</MenuItem>
                        <MenuItem value={'dropshipping'}>Dropshipping</MenuItem>
                    </Select>
                    <FormHelperText>Product fulfillment type</FormHelperText>
                    <TextField id="outlined-basic" size="small" label="Quantity" variant="outlined" type={'number'} style={{paddingBottom:'15px', marginTop:'10px',display:display_input}} onChange={(e)=>{handle_inputs('quantity',e.target.value)}} />   
            </FormControl>
        </Grid>
    )
}

export default Fulfillment
