import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Checkbox, FormHelperText, Switch, TextField, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import {ActiveStoreContext} from '../../Dashboard';


const useStyles = makeStyles((theme) => ({
  
    
    submit: {
        background:'#373738',
        color:'white',
        '&:hover':{
            background:'#43d96b',
    
        }
    
      },
  }));
function StoreSettings(props) {
    const classes = useStyles();
    const [activeStore, setactiveStore] = React.useContext(ActiveStoreContext);
    const [activeStoreValue, setactiveStoreValue] = React.useState(activeStore);
    const [error, seterror] = React.useState(false)
    const handleStoreNameChnage = (value)=>{
            setactiveStoreValue(value)
    }

    React.useEffect(() => {
        setactiveStoreValue(activeStore)
    }, [activeStore])

    const verifDays = (val)=>{
        if(val<2){
            seterror(true);
        }
        else
            seterror(false);
    }

    return (
          <Grid
  container
  direction="column"
  
  style={{padding:'10px',minHeight:'50vh',backgroundColor:'white'}}
>
        <Typography variant="h5" style={{marginBottom:'15px'}}>
                Store settings
        </Typography>
        <Grid item xs={12} md={12} style={{marginBottom:'10px'}}>
        <Paper elevation={1} style={{padding:'15px',height:'130px'}}>
            <FormLabel component="legend" style={{color:'#303030',opacity:'80%'}}>Store Name</FormLabel>
            <section style={{padding:'5px',paddingTop:'10px'}}>
                <TextField id="outlined-basic"  variant="outlined" size='small' value={activeStoreValue}  onChange={(e)=>{handleStoreNameChnage(e.target.value)}}/>
            </section>
            <Button variant='contained' size='small' color="primary" style={{float:'right',backgroundColor:'rgb(78,92,106)',width:'100px'}}>Save</Button>

        </Paper>
        </Grid>
        <FormControl component="fieldset" style={{padding:'10px'}}>
        <FormControlLabel
          control={<Switch  color='primary' onChange={(e,data)=>props.handleChange('global_config',data)} name="global_config" />}
          label="Global Store Settings"
          labelPlacement="end"
          style={{color:'#303030',opacity:'60%'}}
        />
    </FormControl>
                <Grid item xs={12} md={12} style={{marginBottom:'10px'}}>
                    <Paper elevation={1} style={{padding:'10px'}}>
                    <FormControl component="fieldset" style={{padding:'10px'}}>
                        <FormLabel component="legend" style={{color:'#303030',opacity:'80%'}}>Fulfillment processing</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" onChange={(e)=>props.handleChange('fulf_proc',e.target.value)} value={props.storeSettings.fulfillment_processing}>
    <section><FormControlLabel  value="automatic" control={<Radio color='default' size='small' />} label="Automatic" />{props.storeSettings.fulfillment_processing==='automatic' && <span style={{fontSize:'11px',color:'#303030',opacity:'40%'}}><b>Daily processing ( every 24 hours )</b></span>}</section>
                            <FormControlLabel  value="manual" control={<Radio color='default' size='small' />} label="Manual" />
                        </RadioGroup>
                    </FormControl>
                    <section hidden={props.storeSettings.fulfillment_processing==='automatic'?false:true}> 
                        <Grid item sm={3} xs={6} ><span style={{fontSize:'11px',color:'#303030',opacity:'40%'}}>To customize orders processing, please choose your custom period</span></Grid> 
                        <TextField error={error} id="outlined-basic" type='number'  placeholder='0 days' variant="outlined"size="small" onChange={(e)=>{props.handleChange('days',e.target.value);verifDays(e.target.value)}}/>
                    </section>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} style={{marginBottom:'10px'}}>
                <Paper elevation={1} style={{padding:'10px'}}>
                    <FormControl component="fieldset" style={{padding:'10px'}}>
                        <FormLabel component="legend" style={{color:'#303030',opacity:'80%'}}>Risky order processing</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" onChange={(e)=>props.handleChange('risk_orders_proc',e.target.value)} value={props.storeSettings.risky_order_processing}>
                            <FormControlLabel  value="automatic_risky_orders" control={<Radio color='default' size='small' />} label="Automatically process risky orders" />
                            <FormControlLabel  value="manual_risky_orders" control={<Radio color='default' size='small' />} label="Manually process risky orders" />
                        </RadioGroup>
                    </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={12} style={{marginBottom:'10px'}}>
                <Paper elevation={1} style={{padding:'10px'}}>
                <FormControl component="fieldset" style={{padding:'10px'}}>
                        <FormLabel component="legend" style={{color:'#303030',opacity:'80%'}}>Daily charge limit</FormLabel>
                <FormControlLabel
                    value="bottom"
                    control={<Checkbox color="default" size='small' />}
                    label="Limit total charges each day"
                    onChange={(e,data)=>props.handleChange('isChecked_charge_limit',data)}
                    />
                </FormControl>
                <section hidden={!props.storeSettings.isChecked_charge_limit}> 
                   <Grid item sm={3} xs={6} ><span style={{fontSize:'11px',color:'#303030',opacity:'40%'}}>You can enforce a limit on the amount you are charged seiler fees for orders each day</span></Grid> 
                <TextField id="outlined-basic" type='number' placeholder='0$' variant="outlined"size="small" onChange={(e)=>props.handleChange('daily_charge_limit',e.target.value)}/>
                </section>

                    </Paper>
                </Grid>

                <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          save
        </Button>
                </Grid>

 

    )
}

export default StoreSettings
