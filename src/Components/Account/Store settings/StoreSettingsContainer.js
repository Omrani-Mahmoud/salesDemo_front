import React,{useReducer} from 'react'
import StoreSettings from './StoreSettings'


const initialState = {
    fulfillment_processing:'',
    days:0,
    risky_order_processing:'',
    daily_charge_limit:null,
    isChecked_charge_limit:false,
    global_config:false
}
const reducer = (state,action)=>{

    switch (action.type) {
        case 'fulf_proc':
            return{...state,fulfillment_processing:action.value};
            case 'risk_orders_proc':
                return{...state,risky_order_processing:action.value};
                case 'daily_charge_limit':
                    return{...state,daily_charge_limit:action.value};
                    case 'isChecked_charge_limit':
                        return{...state,isChecked_charge_limit:action.value};
                        case 'days':
                            return{...state,days:action.value};
                            case 'global_config':
                                return{...state,global_config:action.value};
                
        default:
            return state;
    }
}
function StoreSettingsContainer() {

    const [storeSettings, dispatch] = useReducer(reducer, initialState);
    const handleChange = (type,value)=>{
            dispatch({type:type,value:value})
    }


    console.log('zebiii ',storeSettings)
    return (
       <StoreSettings  settings={storeSettings} handleChange={handleChange} storeSettings={storeSettings}/>
    )
}

export default StoreSettingsContainer
