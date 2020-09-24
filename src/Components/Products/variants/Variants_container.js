import React, { Children } from 'react'
import Variants from './Variants'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

function Variants_container({save_variants}) {
    
    
    const deleteVariant = (id)=>{
        setvariants_array(variants_array.filter(x=>{return x.id!=id}))
    }
      


    const [variants_array, setvariants_array] = React.useState([{id:0,value:'',text:''}]);


    const add_new_variant = ()=>{
            let x = variants_array.length;
            setvariants_array([...variants_array,{id:x,value:'',text:''}])  
    }

    const commit_changes_options = (id,value)=>{
            variants_array.map(elem =>{
                if(elem.id==id){
                    elem.value=value
                }
            })
    }

    const commit_changes_input = (id,value)=>{
        variants_array.map(elem =>{
            if(elem.id==id){
                elem.text=value
            }
        })
    }

    React.useEffect(() => {
        save_variants({type:'add_variants',value:variants_array})
    }, [variants_array])
  

    return (
      
        <Grid item md={6} xs={12}>
            
                <section >
                    <IconButton aria-label="delete"  size="small" style={{float:'right'}} onClick={()=>{add_new_variant()}}>
                        <AddIcon fontSize="inherit" />
                    </IconButton>
                    <div style={{padding:'15px', height:'210px', overflowY:'scroll'}}>
                        {variants_array
                            .map((variant,index)=>(
                                <Variants index={variant.id} deleteVariant={deleteVariant} key={index} object={variant}  commit_changes_options={commit_changes_options} commit_changes_input={commit_changes_input}/>
                        ))}
                    </div>
                </section>
        </Grid>
    )
}

export default React.memo(Variants_container)
