import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SingleProduct from './components/SingleProduct';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';



const useStyles = makeStyles(theme=>({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


function MatchProducts({data1,data2,typeHandler,type,children,newMatch,pushProduct1,pushProduct2,list}) {
  const classes = useStyles();

  const cardPadding = {
    padding:'10px'
  }
  const innerCard = {
    height: '450px',
    overflowY:'scroll',
    padding:'10px'
  }


  return (
<Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="center"
>
       <FormControl className={classes.formControl}>
            <InputLabel >Fulfillment type</InputLabel>
            <Select
              
              value={type}
              onChange={typeHandler}
            >
              
              <MenuItem value={'dropShipping'}>Drop Shipping</MenuItem>
              <MenuItem value={'bulk'}>Bulk</MenuItem>
              
            </Select>
          </FormControl>

          {
            list.length>0 && children
          }
          
        <div style={{display:'flex',width:'100%'}}>
         
          <Grid item xs={12} md={6} style={cardPadding}>
              <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    My Products
                    </Typography>
                    <div style={innerCard}>
                      {
                        data1.map(product=>{
                          return <SingleProduct  product={product} push={pushProduct1}/>
                        })
                      }
                    </div>  
                  </CardContent>
                
              </Card>
          </Grid>
          <Grid item xs={6} md={6} style={cardPadding}>
              <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Shopify products
                    </Typography>
                    <div style={innerCard}>
                    {
                        data2.map(product=>{
                        return <SingleProduct  product={product} push={pushProduct2}/>
                        })
                      }
                    </div>
                  </CardContent>
              
              </Card>
          </Grid>
        </div>
    </Grid>
  )
}

export default MatchProducts
