import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
import Select, { SelectChangeEvent } from '@mui/material/Select';



function MUIElements() {
    const listAllComedians = useSelector(store => store.allComediansReducerStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_ALL_COMEDIANS' });
    }, []);

    return (<>
        <Box container className="MainMuiGreen">


<Paper     sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("/public/images/Landing_Background.gif")`,
      }}
    >

    </Paper>

            <Grid container className="inputsBlue"
                // justifyContent="center"
                justifyContent="space-evenly"
                alignItems="center"
            // direction="column"
            >
                <Grid container className="justInputs"
                    //  justifyContent="center"
                    justifyContent="space-evenly"
                    direction="row"
                    spacing={6}>
                    <Grid item>
                        <TextField label="TextField 1" margin="normal" />
                    </Grid>
                    <Grid item>
                        <TextField label="TextField 2" margin="normal" />
                    </Grid>
                    <Grid item>
                        <TextField label="TextField 3" margin="normal" />
                    </Grid>
                    <Grid item>
                        <TextField label="TextField 4" margin="normal" />
                    </Grid>
                </Grid>


                <Grid item>
                    <Button
                        label="button"
                        variant="outlined"
                        color="primary" >
                        Hello
                    </Button>
                </Grid>
            </Grid>

            <Box
                // alignItems="center"
                // direction="row"
                className="testGridYellow">
                <Grid container
                    direction="row"
                    spacing={6}
                    justifyContent="center"
                // alignItems="center"
                //   justifyContent="space-evenly"

                >
                    <Grid item>
                        <Button variant="contained">Register</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained">Register</Button>
                    </Grid>    <Grid item>
                        <Button variant="contained">Register</Button>
                    </Grid>    <Grid item>
                        <Button variant="contained">Register</Button>
                    </Grid>

                </Grid>
            </Box>




            <Grid container
                className="favoritesList">
                {listAllComedians.map(thing => {
                    return (
                        <Grid item>
                            <Paper variant="elevation"
                                elevation={10}>
                                <img className='icon'
                                    src={thing.icon}
                                />
                            </Paper>
                        </Grid>
                    )
                })}


            </Grid>





        </Box>
        <img src="/public/images/Landing_Background.gif"></img>

        <Grid container>
            <Button variant="text">Register</Button>
            <Button variant="outlined">Register</Button>
            <Button variant="contained">Register</Button>

        </Grid>
    </>

    )
}

export default MUIElements;