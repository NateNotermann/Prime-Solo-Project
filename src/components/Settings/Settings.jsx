import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Link, Paper, TextField, Typography, Tooltip } from '@mui/material';
import { positions } from '@mui/system';
import '../MUIElements/MUIElements.css';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import SearchIcon from '@mui/icons-material/Search';

function Settings() {

    
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();
  
    let [usernameLocal, setUserNameLocal] = useState('');
  

    function handleSubmit(event) {
        event.preventDefault();

        console.log( 'usernameLocal', usernameLocal);
        
            dispatch({ 
                type: 'PUT_USERNAME', 
                payload: {
                    username: usernameLocal, 
                    id: user.id} 
            });
 
        // axios.put(`/api/settings${action.payload}`)
    }

    useEffect(() => {
        
      }, []);


return (<>
<div className="moveDown"></div>
<Box container>

  
    <center>
    <h2>Settings Page </h2>
    <br></br>
    <h4>Current Username: {user.username}</h4>
    <br></br>

    <Grid item className="GridItems">
    <form onSubmit={handleSubmit}>
    <Typography className="userNameChange" align="center" wrap="nowrap">Change Username</Typography>
    <br></br>
    <Grid container 
        justifyContent="center"
        item align="center" >

<TextField variant="outlined"
        placeholder={user.username}
        // value={user.username}
        value={usernameLocal}
        onChange={(event) => setUserNameLocal(event.target.value)} 
        /> 
       
        {/* <button type='submit'>Submit</button> */}
        <Button variant="contained" type='submit'>
        Submit
    
            </Button>
        </Grid>
    </form>


    </Grid>
    <br></br>
        </center>




 


    </Box>
    </>


)

};


export default Settings;