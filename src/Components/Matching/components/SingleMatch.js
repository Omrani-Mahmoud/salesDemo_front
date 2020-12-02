import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import placeholder from '../../../Assets/img/productPlaceholder.jpg'
import { Grid, Typography } from '@material-ui/core'
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight:'5px'
    },
  }));
function SingleMatch({product1,product2,newMatch}) {


    const classes = useStyles();

    const style = {
        color:'#303030',
        padding:'4px',
        marginBottom:'15px',
        alignItems:'center',
        width:'100%'
    }
    const mainStyle = {
        display:'flex',
        alignItems:'center',
        backgroundColor:'rgb(248,249,253',
        marginBottom:'10px',
        backgroundColor:'white',
        borderRadius:'7px',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19)'

    }
    const section = {
        display:'flex',
        alignItems:'center',

    }
    return (
        <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'20px',alignItems:'center'}}>

            <Grid item xs={12} md={5} style={mainStyle}>
            <div style={style}>
            <section style={section}>
                <Avatar alt="Remy Sharp" src={placeholder} className={classes.large} />
                <Typography variant="subtitle1" gutterBottom>
                    {product1.name}
                </Typography>
                
            </section>
          
            <Typography variant="subtitle1" gutterBottom color='textSecondary' style={{marginLeft:'10px'}}>
               {product1.sku}
            </Typography>
            </div>
        </Grid>

        <Button variant="contained" color="default" size="small" style={{height:'30px',textTransform:'capitalize'}} onClick={newMatch}>
          Match products
        </Button>


        <Grid item xs={12} md={5} style={mainStyle}>
            <div style={style}>
            <section style={section}>
                <Avatar  src={placeholder} className={classes.large} />
                <Typography variant="subtitle1" gutterBottom>
                    {product2.name}
                </Typography>
                
            </section>
          
            <Typography variant="subtitle1" gutterBottom color='textSecondary' style={{marginLeft:'10px'}}>
               {product2.sku}
            </Typography>
            </div>

        </Grid>


        </div>
    )
}

export default SingleMatch
