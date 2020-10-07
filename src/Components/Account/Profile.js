import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import User from './User';
import Account_infoContainer from './Account_infoContainer';
import CreditCardsButtonContainer from './Credit Cards/CreditCardsButtonContainer';
import CreditCardsContainer from './Credit Cards/Credit card display/CreditCardsContainer';
function Profile(props) {
    return (
        <div>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                    <Paper >
                        <User />
                        <CreditCardsButtonContainer handelShowCards={props.handelShowCards}/>
                    </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                    <Paper>
                            <Account_infoContainer />
                    </Paper>
            </Grid>
            <Grid item xs={12} sm={12} hidden={props.showCards}>
                    <Paper>
                        <CreditCardsContainer />
                    </Paper>
            </Grid>
                </Grid>
     

        </div>
    )
}

export default Profile
