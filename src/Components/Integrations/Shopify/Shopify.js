import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import shopify_logo  from '../../../Assets/img/shopify.png'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import InputAdornment from '@material-ui/core/InputAdornment';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import createApp from '@shopify/app-bridge-react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:'rgb(152,191,78)',
    color:'white',
    fontWeight:'700',
    fontSize:'13px',
    '&:hover':{
        background:'#373738',
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
        color: 'grey',
        fontSize:'17px',
        fontWeight:'600',
    },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  }));
  
function Shopify() {
    const classes = useStyles();
    const [shopifyLink, setShopifyLink] = React.useState("");

    let img_container = {
        width:'100%',
        display:'flex',
        justifyContent:'flex-end'
    }

    let fixed_values_style={
        backgroundColor:'rgb(232,232,232)',
        height:'100%',
        padding:'4px',
        borderRadius:'3px',
    }

    let span_values = {
      color:'black',
      fontSize:'13px',

    }
    let note_container = {
        color:'white',
        fontSize:'14px'
  
      }


      const submitForm = () => {
        const apiKey = 'b28178c89b54f44a9c0b2c5849af8c3a';
        const redirectUri = `https://cartifio.com/dashboard/integrations`;
        const permissionUrl =`/oauth/authorize?client_id=${apiKey}&scope=read_content,write_content, read_themes, write_themes, read_products, write_products, read_customers, write_customers, read_orders, write_orders, read_script_tags, write_script_tags, read_fulfillments, write_fulfillments, read_shipping, write_shipping&redirect_uri=${redirectUri}`;
        if (window.top === window.self) {
          window.location.assign(`${shopifyLink}/admin${permissionUrl}`)
      }
     else {
      const app = createApp({
        apiKey: apiKey,
        shopOrigin: `${shopifyLink}`,
      });
    }}
    return (
        <Grid container md={12} xs={12} >
            <Grid item md={12} xs={10}>
            <Paper className={classes.paper} elevation={2} xs={12}>
                <div style={{padding:'10px'}}>
                <Alert severity="info">
                This integration’s optional, you can use our functionality <strong>without it! </strong>
                </Alert>
                </div>
            <Grid
  container
  direction="column"
  justify='flex-center'
 alignItems='center'

  style={{padding:'20px'}}
>           
                <div  >
                    <img src={shopify_logo}  width='210px'/>
                </div>
                <Grid item style={{padding:'20px',marginTop:'10px' }} md={12} xs={12} >
                
                <TextField
                        style= {{padding:'5px'}}
                        label='  Shopify Store Link :'
                        id="standard-start-adornment"
                        placeholder='mystore.shopify'
                        onChange={(e)=>setShopifyLink(e.target.value)}
                        className={clsx(classes.margin, classes.txtInput)}
                        InputProps={{
                            startAdornment: <InputAdornment style={fixed_values_style} position="start"><span style={span_values} >Https://</span></InputAdornment>,
                            endAdornment:<InputAdornment  style={fixed_values_style} position="end"><span style={span_values}>.com</span></InputAdornment>
                        }}
                />
 <Button
 
                fullWidth
                variant="contained"
                className={classes.submit}
                size='small'
                style={{marginLeft:'12px',marginTop:'18px'}}
            >
            Connect
            </Button>

                </Grid>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
    )
}

export default Shopify
