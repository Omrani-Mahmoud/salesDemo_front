
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
    submit: {
        margin: theme.spacing(3, 0, 2),
        background:'#373738',
        color:'white',
        '&:hover':{
            background:'#43d96b',
    
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
function Account_info({account_info,dispatch,save}) {
    const classes = useStyles();

    return (
        <form className={classes.form} noValidate onSubmit={save}>
        <Grid container spacing={2} style={{padding:'25px'}}>
          <Grid item xs={12} sm={6}>
            <TextField
                className={classes.txtInput}
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              size={'small'}
              value={account_info.fname}
              onChange={(e)=>{dispatch({type:'fname',value:e.target.value})}}

            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
                className={classes.txtInput}
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              size={'small'}
              value={account_info.lname}
              onChange={(e)=>{dispatch({type:'lname',value:e.target.value})}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                className={classes.txtInput}
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              size={'small'}
              disabled
              value={account_info.email}
              //onChange={(e)=>{dispatch({type:'email',value:e.target.value})}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                className={classes.txtInput}
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              size={'small'}
              onChange={(e)=>{dispatch({type:'password',value:e.target.value})}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
                className={classes.txtInput}
              variant="outlined"
              required
              fullWidth
              name="Address"
              label="Address"
              type="text"
              id="Address"
              autoComplete="current-address"
              size={'small'}
              value={account_info.adr}
              onChange={(e)=>{dispatch({type:'adr',value:e.target.value})}}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
                className={classes.txtInput}
              autoComplete="country"
              name="country"
              variant="outlined"
              required
              fullWidth
              id="country"
              label="Country"
              autoFocus
              size={'small'}
              value={account_info.country}
              onChange={(e)=>{dispatch({type:'country',value:e.target.value})}}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
                className={classes.txtInput}
              variant="outlined"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              size={'small'}
              value={account_info.city}
              onChange={(e)=>{dispatch({type:'city',value:e.target.value})}}

            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
                className={classes.txtInput}
              variant="outlined"
              required
              fullWidth
              id="postalCode"
              label="Postal Code"
              name="postalCode"
              autoComplete="postalCode"
              size={'small'}
              type='number'
              value={account_info.postalCode}
              onChange={(e)=>{dispatch({type:'postalCode',value:e.target.value})}}

            />
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

   
        
      </form>
    )
}

export default Account_info
