import React from 'react'
import SingleMatch from '../components/SingleMatch'
function WantedProductList({wantedList,newMatch}) {
    const style= {
        height:'300px',
        overflowY:'scroll',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    }
   
    return (
        <div style={style}  >
            {
                wantedList.map(match=>{
                    return <SingleMatch newMatch={newMatch} product1={match.product1} product2={match.product2}/>
                })
            }
        </div>
    )
}

export default WantedProductList
