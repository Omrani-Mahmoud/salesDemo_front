import { Grid } from '@material-ui/core';
import React from 'react'
import WantedProductList from './components/WantedProductList';
import MatchProducts from './MatchProducts'

function MatchingProductsContainer() {
    const [type, settype] = React.useState('dropShipping');

    const handleChangeType = (event) => {
      settype(event.target.value);
    };

    const [wantedList, setwantedList] = React.useState([])

    const [toPush, settoPush] = React.useState({p1:{},p2:{}})
   
    const data1 = [
        {id:'F1',img:'',name:'product1',sku:'SK1'},
        {id:'F2',img:'',name:'product2',sku:'SK2'},
        {id:'F3',img:'',name:'product3',sku:'SK3'},
        {id:'F4',img:'',name:'product4',sku:'SK4'}
    ];
    const data2 = [
        {id:'R1',img:'',name:'product5',sku:'SK5'},
        {id:'R2',img:'',name:'product6',sku:'SK6'},
        {id:'R3',img:'',name:'product7',sku:'SK7'},
        {id:'R4',img:'',name:'product8',sku:'SK8'},
    ]


    const topushProduct1 = (p)=>{
        settoPush({...toPush,p1:p})
    }
    const topushProduct2 = (p)=>{
        settoPush({...toPush,p2:p})
    }
    const newMatch = () => {
        //console.log(toPush);
        //settoPush({p1:{},p2:{}});
        //wantedList.push({product1:toPush.p1,product2:toPush.p2})
        console.log(wantedList)
  };


    React.useEffect(() => {
        if(Object.keys(toPush.p2).length!==0){
            console.log('aaaaaa',toPush);
            setwantedList([...wantedList,{product1:toPush.p1,product2:toPush.p2}])
            settoPush({p1:{},p2:{}});
        }
    }, [toPush])

      
    return (
<Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="center"
>            <MatchProducts data1={data1} data2={data2} typeHandler={handleChangeType} type={type}  pushProduct1={topushProduct1} pushProduct2={topushProduct2} list={wantedList}>
                <WantedProductList wantedList={wantedList} newMatch={newMatch}/>
            </MatchProducts>
        </Grid>
    )
}

export default MatchingProductsContainer
