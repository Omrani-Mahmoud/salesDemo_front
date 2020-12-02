import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import placeholder from '../../../Assets/img/productPlaceholder.jpg'
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight:'5px'
  },
}));
function SingleProduct({product,push}) {
    const [hovered, sethovered] = React.useState(false);
    const [checked, setChecked] = React.useState(false);

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
        marginBottom:'15px',
        cursor:'pointer',
        transform: hovered && 'translate(0, -10px)',
        transition: '0.3s',
    }
    const section = {
        display:'flex',
        alignItems:'center',

    }

    const handleHover = (value)=>{
        sethovered(value)
    }

    const handleChange = (event) => {
        //setChecked(event.target.checked);
        setChecked(true);
        push(product)
      };
    return (
        <Grid item xs={12} md={12} style={mainStyle} onMouseEnter={()=>handleHover(true)} onMouseLeave={()=>handleHover(false)}>
            <div style={style}>
            <section style={section}>
                <Avatar src={placeholder} className={classes.large} />
                <Typography variant="subtitle1" gutterBottom>
                    {product.name}
                </Typography>
                
            </section>
          
            <Typography variant="subtitle1" gutterBottom color='textSecondary' style={{marginLeft:'10px'}}>
               {product.sku}
            </Typography>
            </div>
            <Checkbox
                onChange={handleChange}
                color="default"
                checked={checked}
            />
        </Grid>
    )
}

export default SingleProduct
