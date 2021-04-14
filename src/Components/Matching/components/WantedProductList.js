import { Grid } from '@material-ui/core'
import React from 'react'
import SingleMatch from '../components/SingleMatch'
function WantedProductList({wantedList,newMatch}) {
    const style= {
        height:'300px',
        overflowY:'scroll',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        windth:'100%'
    }
   
    return (
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
            {
                wantedList.map(match=>{
                    return <SingleMatch newMatch={newMatch} product1={match.product1} product2={match.product2}/>
                })
            }
        </Grid>
    )
}

export default WantedProductList
