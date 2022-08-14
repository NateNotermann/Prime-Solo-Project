// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, TextField, Typography } from '@mui/material';


import { useHistory } from 'react-router-dom';

function BackButton(){
    const history = useHistory();


    function back() {
        history.goBack();
         // console.log('history', history);
    }
    
    return(
        <Grid container 
        id="backButtonId" 
        className="backbutton"
        direction="column"
        alignItems="center">
        
        <Button 
        variant="contained" 
        onClick={() => back('back')}>GO BACK</Button>
        </Grid>
    )
}

export default BackButton;