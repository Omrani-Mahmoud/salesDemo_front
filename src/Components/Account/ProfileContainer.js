import React,{useState} from 'react'
import Profile from './Profile'

function ProfileContainer() {

    const [showCards, setshowCards] = useState(true);

    const handelShowCards = ()=>{
            setshowCards(false);
            
        };
    return (
       <Profile showCards={showCards} handelShowCards={handelShowCards} />
    )
}

export default ProfileContainer
