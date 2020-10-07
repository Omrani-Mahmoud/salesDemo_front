import React,{useReducer} from 'react'
import Account_info from './Account_info'



let initial_account_value = {
    fname:'',
    lname:'',
    email:'',
    password:'',
    adr:'',
    country:'',
    city:'',
    postalCode:''
};


const reducer = (state,action)=>{
    switch (action.type) {
        case 'fname':
            return{...state,fname:action.value};
            case 'lname':
                return{...state,lname:action.value};
                case 'password':
                    return{...state,password:action.value};
                    case 'adr':
                        return{...state,adr:action.value};
                        case 'country':
                            return{...state,country:action.value};
                            case 'city':
                                return{...state,city:action.value};
                                case 'postalCode':
                                    return{...state,postalCode:action.value};
                                                     
    
        default:
            return state
            break;
    }
}

function Account_infoContainer() {

    initial_account_value.adr='ariana street';
    initial_account_value.city='ariana';
    initial_account_value.email='mah#gmail';
    initial_account_value.fname='mah';
    initial_account_value.lname='omrani';
    initial_account_value.password='pass';
    initial_account_value.postalCode='2080';
    initial_account_value.country='Tunisia';


    const [account_info, dispatch] = useReducer(reducer, initial_account_value);


    const save_user_info = ()=>{

        console.log("acount info",account_info)

    }


    return (
        <Account_info account_info={account_info} dispatch={dispatch} save={save_user_info}/>
    )
}

export default Account_infoContainer
