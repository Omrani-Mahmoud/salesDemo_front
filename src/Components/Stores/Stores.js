import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table_row from './components/Table_row';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Store_FormContainer from './components/Form/Store_FormContainer';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    table: {
      minWidth: 320,
    },
  });

  
function Stores() {
    const classes = useStyles();
    const [showForm, setshowForm] = React.useState(true)
    const [fake_data, setfake_data] = React.useState([
        { id:12,store_name:'Mah store',active:true},
        {id:34,store_name:'Jaja',active:false},
        {id:35,store_name:'Lala',active:false}
    ])
    const btn_style_save = {
        background: 'rgb(77,92,106)',
        textTransform:'capitalize',
        fontSize:'14px',
        color:'white',
        display:showForm?'':'none',
        paddingLeft:'10px',
        paddingRight:'10px'
      }

      const btn_style_store_settings = {
        background: 'rgb(77,92,106)',
        textTransform:'capitalize',
        fontSize:'14px',
        color:'white',
        display:showForm?'':'none',
        paddingLeft:'10px',
        paddingRight:'10px',
        float:'right'
      }
   
    return (
        <Grid container direction="column"
        justify="flex-start"
        alignItems="flex-start"> 

            
<Typography variant="h4" gutterBottom style={{color:'#000',opacity:'65%'}}>
       Manage your stores
      </Typography>
        <section style={{paddingTop:'10px',width:'100%'}}> 
     

            <Button onClick={()=>setshowForm(false)}
                style={btn_style_save}
        startIcon={<AddIcon />}
      >
           Add store
      </Button>
      <Link to='/home/store/settings' ><span style={{float:'right',display:'flex',alignItems:"center",color:'#303030',opacity:'70%',cursor:'pointer'}}> <SettingsIcon fontSize="small"/>Store Settings</span></Link>
 
        </section>

        <div style={{backgroundColor:showForm?'transparent':'white', width:'100%',padding:'10px',marginTop:'-10px',borderRadius:'5px',marginBottom:'10px'}} >
            <Store_FormContainer handleForm={setshowForm} showForm={showForm}/>
        </div>
            <TableContainer component={Paper} style={{marginTop:'10px'}}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
            <TableRow>
                <TableCell><strong>Store Name</strong></TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {
                fake_data.map(row =>(
                        <Table_row store={row} key={row.id}/>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
    )
}

export default React.memo(Stores)
