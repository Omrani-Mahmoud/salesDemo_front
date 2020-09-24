import React from 'react'
import Orders from './Orders'
import Grid from '@material-ui/core/Grid';

function OrdersContainer({isMobile}) {

    const [active_tab, setactive_tab] = React.useState(0);
    const handleChange_tab = (event, newValue) => {
        setactive_tab(newValue);
      };
    const data = [
        {oid:'234235235F',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shiped'},
        {oid:'234235235E',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shiped'},
        {oid:'234235235Z',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shiped'},
      ];
    return (
   
            <Orders data={data} active_tab={active_tab} handleChange={handleChange_tab} isMobile={isMobile}/>
         
    )
}

export default OrdersContainer
