import React from 'react'
import Dash_Card from '../Other/Dash_Card'
import Grid from '@material-ui/core/Grid';

import ArchiveIcon from '@material-ui/icons/Archive';
import TimelineIcon from '@material-ui/icons/Timeline';
import {Line,} from 'react-chartjs-2';
import Card from '@material-ui/core/Card';

function Home() {
    
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
            
        >
            
               

                <Grid item style={{paddingBottom:'24px'}} >
                <span style={{fontSize:'22px',color:'#303030',fontWeight:'bold'}}>Welcome,Omrani</span>
                </Grid>        

                <Grid item  md={8} xs={12} style={{display:'flex',justifyContent:'space-around'}}>
                    <Dash_Card  icon={<ArchiveIcon fontSize='large' color='action'/>} title={'Products number'} data={41}/>
                    <Dash_Card  icon={<TimelineIcon fontSize='large' color='action'/>} title={'Orders fulfilled'} data={283}/>
                    
                </Grid>

                <Grid item  md={12} style={{marginTop:'50px'}}>
                    <span style={{fontSize:'17px',color:'#303030',fontWeight:'bold'}}>Orders fulfilled daily</span>
                <Card elevation={0} style={{margin:'20px',padding:'7px'}}>
                    <Line
                        height='80px'
                        data={data}
                        options={{
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
      
        </Grid>
    )
}

export default React.memo(Home)
