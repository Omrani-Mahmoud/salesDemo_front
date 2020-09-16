import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Badge from '../../Other/Badge';

function Table_row({store}) {

    const [start_edit, setstart_edit] = React.useState(false);
    const [init_val, setinit_val] = React.useState(store.store_name);

    const handle_edit = ()=>{
        setstart_edit(!start_edit)
    }
    const handle_value_change = (event)=>{
        setinit_val(event.target.value)
       
    }
    const handle_save_edit_store = ()=>{
       console.log('save btn')
    }

    const handle_delete_store = ()=>{
        console.log('delete btn',store.store_name)
     }

    return (

        <TableRow key={store.id} >

              <TableCell component="th" scope="row" >
                {
                    start_edit?
                        <TextField  value={init_val} onChange={(event)=>handle_value_change(event)}/>
                    :
     
                        <section style={{display:'flex',flexDirection:'column'}}>
                            {store.active && <Badge color='blue'>Active store </Badge>}
                            {init_val}
                        </section>
                }
              </TableCell>

              <TableCell style={{ width: 160 }} align="right">
                    {start_edit?
                        <IconButton aria-label="delete" onClick={handle_save_edit_store} size='small'>
                            <CheckIcon fontSize="small" />
                        </IconButton>
                        :
                        <IconButton aria-label="delete" onClick={handle_edit} size='small'>
                            <EditIcon fontSize="small" />
                        </IconButton>
                    }
    
                    {start_edit?
                        <IconButton aria-label="delete" size='small' onClick={handle_edit}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                        :
                        <IconButton aria-label="delete" size='small' onClick={handle_delete_store}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>

                    }
              </TableCell>
            
            </TableRow>
    )
}

export default React.memo(Table_row)
