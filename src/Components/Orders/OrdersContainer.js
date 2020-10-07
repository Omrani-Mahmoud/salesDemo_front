import React,{useState,useEffect} from 'react'
import Orders from './Orders'
import Grid from '@material-ui/core/Grid';
import Swal from 'sweetalert2'
//import logo from "../../assets/img/advisely-logo.svg";
import  storeImg from'../../Assets/img/icon-store.svg';
import { useHistory } from 'react-router-dom';

function OrdersContainer({isMobile}) {

    const [active_tab, setactive_tab] = React.useState(0);
    const [hasIntegration, sethasIntegration] = useState(true)
    const history = useHistory();

    const handleChange_tab = (event, newValue) => {
        setactive_tab(newValue);
      };
    const data = [
        {oid:'234235235F',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shiped'},
        {oid:'234235235E',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shiped'},
        {oid:'234235235Z',name:'Frozen yoghurt', created_at:'15/03/2030', status:'created', num_times:24, post_code:4.0,custumer_name:'mah',state:'Shiped'},
      ];



      useEffect(() => {
        hasIntegration && 
      Swal.fire({
          //<img src=${logo} height="25"/>
          html:` <img src='' height="25"/>
                <br><br>
                <img src=${storeImg} height="38"/>
                <br>
                <h4> Omrani mahmoud </h4>
                <br>
                <p>You haven't connected<br/>any account yet to your store </p>
   
                `
                ,
          imageWidth: 100,
          imageHeight: 100,
          width: 300,
          backdrop: `
          rgba(0,0,123,0.4)
        `,
        allowOutsideClick:false,
        confirmButtonText:"Connect Accounts",

     
        }).then((results)=>{
            if(results.isConfirmed){
                  history.push('/home/integrations')
            }
        })
    }, [hasIntegration])
    return (
   
            <Orders data={data} active_tab={active_tab} handleChange={handleChange_tab} isMobile={isMobile}/>
         
    )
}

export default OrdersContainer
