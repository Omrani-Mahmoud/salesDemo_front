
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));
function User() {
    const classes = useStyles();

    const userName = {
        color:'#303030',
        opacity:'50%',
        textAlign:'center',
        fontSize:'14px'
    };

    const user = {
        color:'#303030',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:'16px'
    };

    const store_settings_btn ={
      textTransform:'capitalize',
      backgroundColor:'rgb(143,151,160)',
      color:'white',
      marginRight:'15px'
    }

    const link_style={
      alignSelf:'flex-end',
      textDecoration: 'none'
    }

    return (
        <div>
           <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  spacing={3}
    style={{padding:'10px'}}
>
       <Link to="/home/store/settings" style={link_style}><Button size="small" variant='contained' style={store_settings_btn}>
          Store settings
        </Button></Link> 
            <Grid item xs={6}>
                
                    <Avatar alt="Remy Sharp" src="https://cdn.radiofrance.fr/s3/cruiser-production/2019/10/22f8d83b-2dbb-4156-8f6d-9cc13b94e16f/838_rickmorty.jpg"  className={classes.large} />
                    
            </Grid>
            <Grid item xs={6}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'25px'}}>
                    <span style={user}>Omrani mahmoud</span>
                    <span style={userName}>{`@${'mah'}`}</span>
                </div>
            </Grid>
                </Grid>
                

        </div>
    )
}

export default User
