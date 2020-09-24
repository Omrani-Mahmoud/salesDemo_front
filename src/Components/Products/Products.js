import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Badge from '../Other/Badge';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';
import LinkIcon from '@material-ui/icons/Link';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ArchiveIcon from '@material-ui/icons/Archive';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import PaymentIcon from '@material-ui/icons/Payment'; 
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NewProduct_form_container from './NewProduct_form_container';
const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);



const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      padding:'4px',
      color:'#303030'
    },
  }));


function Products({handleChangeFilter,products}) {
    const classes = useStyles();

    const btn_style_store = {
      background: 'rgb(77,92,106)',
      float:'right',
      paddingLeft:'10px',
      paddingRight:'10px',
      textTransform:'capitalize',
      fontSize:'14px',
      color:'white',
      margin:'6px',
    }

    const btn_style_archive = {
      background: 'rgba(77,92,106,0.6)',
      float:'right',
      paddingLeft:'10px',
      paddingRight:'10px',
      textTransform:'capitalize',
      fontSize:'14px',
      color:'white',
      margin:'6px',
    }



    const btn_style_accept = {
      textTransform:'capitalize',
      fontSize:'12px',
      fontWeight:'bold',
      color:'white',
      background: 'rgba(77,92,106,0.6)',

    }
      
    const btn_style_refuse = {
      textTransform:'capitalize',
      fontSize:'12px',
      color:'white',
      fontWeight:'bold',
      background: '#ff8fa3',

    }

    const btn_style_stripe = {
      textTransform:'capitalize',
      fontSize:'12px',
      color:'white',
      fontWeight:'bold',
      background: 'rgba(77,92,106,0.8)',
      marginTop:'5px'
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
      
        <Grid container md={12} xs={12} direction="column"
        justify="flex-start"
        alignItems="flex-start" >
       <Typography variant="h4" gutterBottom style={{color:'#000',opacity:'65%'}}>
       Manage your products
      </Typography>
          <section style={{padding:'10px',marginBottom:'15px'}}>
              <Typography component="div">
                      <span style={{color:'#303030',opacity:'50%'}}>Filter :</span>
                    <Grid component="label" container alignItems="center" spacing={1} style={{marginTop:'1px'}}>
                      <Grid item>Stored</Grid>
                        <Grid item>
                          <AntSwitch onChange={(e,data)=>handleChangeFilter(data)} name="checkedC" />
                        </Grid>
                      <Grid item>Archived</Grid>
                    </Grid>
              </Typography>
          </section>
         <NewProduct_form_container />




  <Grid item xs={12} md={12}style={{width:'100%'}}>
  <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <section style={{width:'100%'}}>
                <Avatar alt="gun" src={'https://images-na.ssl-images-amazon.com/images/I/51waAR5%2BWYL._AC_UL1200_.jpg'}  variant='square'/>
                <Typography className={classes.heading}>Portal Gun</Typography>
            </section>
            <div style={{marginLeft:'25px',width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <section>
                    <span style={{color:'#303030',opacity:'65%'}}>Factory state : </span><span style={{color:'#303030',opacity:'85%',fontWeight:'bold'}}>Pending</span>
                </section>
                <Badge color='blue'>Archived</Badge>
            </div>

        </AccordionSummary>
        <AccordionDetails>

            <section >
                <span style={{color:'#303030',opacity:'65%',marginRight:'5px'}}>Product link :</span>
                <IconButton aria-label="delete" className={classes.margin} size='small' href='//www.google.tn' target='_blank' >
                    <LinkIcon  fontSize='small' />
                </IconButton>
              
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
                <Paper elevation={0}  style={{backgroundColor:'#f0f0f2',width:'200px',display:'flex',flexDirection:'column',height:'160px',padding:'10px',marginTop:'10px',justifyContent:'space-around'}}>
                    <section style={{display:'flex',flexDirection:'column'}}>
                        <span style={{fontWeight:'bold',color:'#303030',opacity:'80%'}}>Price offer :</span>
                        <span style={{fontWeight:'bold',paddingLeft:'8px',color:'#303030',opacity:'80%'}}>34 $</span>
                    </section>
                    <section style={{display:'flex',justifyContent:'space-around',marginTop:'5px'}}>
                        <Button
                          variant="contained"
                          size="small"
                          style={btn_style_accept}
                          startIcon={<CheckIcon />}>
                            Accept
                        </Button>
                                       
                        <Button
                          variant="contained"
                          size="small"
                          style={btn_style_refuse}
                          startIcon={<ClearIcon />}
                        >
                          Refuse
                        </Button>
                    </section>
                        <strong style={{textAlign:'center',color:'#303030',opacity:'80%'}}>or</strong>
                    <Button
                          variant="contained"
                          size="small"
                          style={btn_style_stripe}
                          startIcon={<PaymentIcon />}
                        >
                          Stripe paiment
                        </Button>
                </Paper>
            </section>
           
        </AccordionDetails>

        <AccordionActions>
      
        <Button
          variant="contained"
          size="small"
          style={btn_style_store}
          startIcon={<SaveAltIcon />}
        >
          Store
        </Button>

        <Button
          variant="contained"
          size="small"
          style={btn_style_archive}
          startIcon={<ArchiveIcon />}
        >
          Archive
        </Button>
        </AccordionActions>
      </Accordion>
  

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
            <section style={{width:'100%'}}>
                <Avatar alt="gun" src={'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2020/04/iphone-se-2020-black-770.jpg'}  variant='square'/>
                <Typography className={classes.heading}>Iphone SE 2020</Typography>
            </section>
            <div style={{marginLeft:'25px',width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <section>
                    <span style={{color:'#303030',opacity:'65%'}}>Factory state : </span><span style={{color:'#303030',opacity:'85%',fontWeight:'bold'}}>Pending</span>
                </section>
                <Badge color='green'>Stored</Badge>
            </div>
        </AccordionSummary>
        <AccordionDetails>
        <section >
                <span style={{color:'#303030',opacity:'65%',marginRight:'5px'}}>Product link :</span>
                <IconButton aria-label="delete" className={classes.margin} size='small' href='//www.google.tn' target='_blank' >
                    <LinkIcon  fontSize='small' />
                </IconButton>
              
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </section>
        </AccordionDetails>
        <AccordionActions>
        <Button
          variant="contained"
          size="small"
          style={btn_style_store}
          startIcon={<SaveAltIcon />}
        >
          Store
        </Button>

        <Button
          variant="contained"
          size="small"
          style={btn_style_archive}
          startIcon={<ArchiveIcon />}
        >
          Archive
        </Button>
        </AccordionActions>
      </Accordion>

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
           <section style={{width:'100%'}}>
                <Avatar alt="gun" src={'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1591634795000'}  variant='square'/>
                <Typography className={classes.heading}>Airpods pro 2</Typography>
            </section>
            <div style={{marginLeft:'25px',width:'100%',display:'flex',alignItems:'flex-start',justifyContent:'space-between'}}>
                <section>
                    <span style={{color:'#303030',opacity:'65%'}}>Factory state : </span><span style={{color:'#303030',opacity:'85%',fontWeight:'bold'}}>Pending</span>
                </section>
                <Badge color='blue'>Archived</Badge>
            </div>
          
         
        </AccordionSummary>
        <AccordionDetails>
        <section >
                <span style={{color:'#303030',opacity:'65%',marginRight:'5px'}}>Product link :</span>
                <IconButton aria-label="delete" className={classes.margin} size='small' href='//www.google.tn' target='_blank' >
                    <LinkIcon  fontSize='small' />
                </IconButton>
              
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </section>
        </AccordionDetails>
        <AccordionActions>
        <Button
          variant="contained"
          size="small"
          style={btn_style_store}
          startIcon={<SaveAltIcon />}
        >
          Store
        </Button>

        <Button
          variant="contained"
          size="small"
          style={btn_style_archive}
          startIcon={<ArchiveIcon />}
        >
          Archive
        </Button>
        </AccordionActions>
      </Accordion>
      </Grid>

        </Grid>
    )
}

export default Products
