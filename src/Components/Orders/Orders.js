import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme)=>{
  return {table: {
    //minWidth: 650,

  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}});
function Orders({data,active_tab,handleChange,isMobile}) {
    const classes = useStyles();

    const table_head = {
        fontWeight:'bold',
        color:'white'
    }

    const tab_style={
        color:'#303030',
        opacity:'70%',
        textTransform:'capitalize'
    }
 
    return (

      <Grid container  direction="column"
      md={12} xs={12}
  >
            <Typography variant="h4" gutterBottom style={{color:'#000',opacity:'65%'}}>
                Your orders
            </Typography>
            <Grid  item xs={11} md={12}spacing={3} style={{padding:'10px 10px 25px 10px'}}>
            <Typography component="div">
                      <span style={{color:'#303030',opacity:'50%'}}>Filter by status :</span>
                
                
                {
                  isMobile?
                  <Select 
                    fullWidth
                    defaultValue='all'
                    onChange={()=>{console.log('aaaa')}}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                <MenuItem value="all">
                    All orders
                </MenuItem>
                <MenuItem value={'pending'}>Pending</MenuItem>
                <MenuItem value={'processing'}>Processing</MenuItem>
                <MenuItem value={'shipped'}>Shipped</MenuItem>
                <MenuItem value={'received'}>Received</MenuItem>
                <MenuItem value={'canclled'}>Canclled</MenuItem>
                </Select>

                :
                  
                              <Paper elevation={2} style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
                                      <Tabs
                                        value={active_tab}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={handleChange}
                                        >

                                          <Tab label="All orders" style={tab_style} icon={<ShoppingCartIcon  fontSize='small'/>} />
                                          <Tab label="Pending" style={tab_style} icon={<PauseCircleFilledIcon fontSize='small'/>}/>
                                          <Tab label="Processing" style={tab_style} icon={<AutorenewIcon fontSize='small'/>}/>
                                          <Tab label="Shipped" style={tab_style} icon={<LocalShippingIcon fontSize='small'/>} />
                                          <Tab label="Received" style={tab_style} icon={<CheckCircleIcon fontSize='small'/>}  />
                                          <Tab label="Canclled" style={tab_style} icon={<CancelIcon fontSize='small'/>}/>

                                      </Tabs>
                              </Paper>
                  }
                  
                </Typography>
                </Grid>
            

            
                        <TableContainer component={Paper} style={isMobile?{overflowX:'scroll',maxWidth:'337px'}:{minidth:'350px'}}>
                          <Table className={classes.table} aria-label="caption table">
                            <TableHead>
                              <TableRow style={{backgroundColor:'rgba(77,92,106,0.6)'}}>
                                <TableCell style={table_head}>OID</TableCell>
                                <TableCell style={table_head} align="center">Created at</TableCell>
                                <TableCell style={table_head} align="center">Name</TableCell>
                                <TableCell style={table_head} align="center">Status</TableCell>
                                <TableCell style={table_head} align="center">Num of times</TableCell>
                                <TableCell style={table_head} align="center">Post code</TableCell>
                                <TableCell style={table_head} align="center">Customer name</TableCell>
                                <TableCell style={table_head} align="center">State</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {data.map((row) => (
                                <TableRow key={row.name}>
                                  <TableCell component="th" scope="row">
                                    {row.oid}
                                  </TableCell>
                                  <TableCell align="center">{row.created_at}</TableCell>
                                  <TableCell align="center">{row.name}</TableCell>
                                  <TableCell align="center">{row.status}</TableCell>
                                  <TableCell align="center">{row.num_times}</TableCell>
                                  <TableCell align="center">{row.post_code}</TableCell>
                                  <TableCell align="center">{row.custumer_name}</TableCell>
                                  <TableCell align="center">{row.state}</TableCell>

                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
        

        </Grid>
      );
}

export default Orders
