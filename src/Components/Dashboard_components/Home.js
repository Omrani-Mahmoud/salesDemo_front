import React,{useState,useEffect} from 'react'
import Dash_Card from '../Other/Dash_Card'
import Grid from '@material-ui/core/Grid';

import ArchiveIcon from '@material-ui/icons/Archive';
import TimelineIcon from '@material-ui/icons/Timeline';
import {Line,} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';
import Carousel_ from './Carousel_';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ImportExportIcon from '@material-ui/icons/ImportExport';
function Home() {
    
    const [hasIntegration, sethasIntegration] = useState(true);
    
    const data = {
        labels: ['January', 'February', 'March',
                 'April', 'May','Jun','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Fulfilled orders',
            fill: true,
            lineTension: 0.3,
            backgroundColor: 'rgba(183,218,247,0.7)',
            borderColor: 'rgb(53,151,233)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56,45,21,3,4,112,0,34,55]
          }
        ]
      }




    

    return (
        <Grid container  direction="column"
            md={12} xs={12} sm={12} 
        >
            
               

                <Grid item style={{paddingBottom:'2px'}} >
                <span style={{fontSize:'22px',color:'#303030',fontWeight:'bold'}}>Welcome,Omrani</span>

               
                </Grid>        



                     <span style={{fontSize:'14px',color:'#303030',fontWeight:'bold',marginBottom:'20px',marginTop:'20px',opacity:'50%',display:'flex',alignItems:'center'}}>Your current expenses : CNY 50.0 <ImportExportIcon style={{fontSize:'20px'}} /></span>
                     <Grid
  container
  direction="row"
  justify="space-around"
  alignItems="center"
  style={{marginBottom:'10px'}}
>
                    
                        <Dash_Card  icon={<ArchiveIcon fontSize='large' style={{color:'#eddd8c',fontSize:'40px'}}/>} title={'Products number'} data={41}/>
                        <Dash_Card  icon={<LocalAtmIcon color='action' style={{color:'#85bb65',fontSize:'40px'}}/>} title={'Revenue'} data={'283$'}/>
                        <Dash_Card  icon={<TimelineIcon fontSize='large' style={{color:'#3f37b0',fontSize:'40px'}}/>} title={'Orders fulfilled'} data={283} />
                        
                       
                </Grid>

                <Grid item  md={11} xs={12}>
                    <span style={{fontSize:'17px',color:'#303030',fontWeight:'bold'}}>Orders fulfilled daily</span>
                <Card elevation={0} style={{margin:'20px',padding:'7px'}}>
             
                    <Line
                        height='180px'
                        data={data}
                        options={{
                            responsive:true,
                            maintainAspectRatio : false,
                            scales : {
                                xAxes : [ {
                                    gridLines : {
                                        display : true
                                    }
                                } ],
                                yAxes : [ {
                                    gridLines : {
                                        display : false
                                    }
                                } ]
                            },
                            title:{
                            display:true,
                            //text:'Orders fulfilled daily',
                            fontSize:20
                            },
                            legend:{
                              
                            display:true,
                            position:'right'
                            }
                        }}
                    />
           
                              </Card>
                              
                </Grid>
             
                <Grid md={12} xs={12}  >
                
                    <Carousel_ />
                </Grid>
             
            
           
      
        </Grid>
    )
}

export default React.memo(Home)
