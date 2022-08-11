import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Paper, TextField, Typography, } from '@mui/material';
import { positions } from '@mui/system';
import '../MUIElements/MUIElements.css';


function MUIElements() {
    const listAllComedians = useSelector(store => store.allComediansReducerStore);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'GET_ALL_COMEDIANS' });
    }, []);

    return (<>
        <Box container className="MainMuiGreen" xs={12} md={12}>




            <Grid container className="inputsBlue"
                justifyContent="flex-start"
                alignItems="center"
                // direction="column"
            >
                <Grid item>
                <TextField label="TextField" margin="normal" />
                </Grid>

                <TextField id="margin-normal" label="TextField" margin="normal" />
                <TextField label='type in me'margin="normal" />
            </Grid>

            <Box container
                alignItems="center"
                direction="column"
                className="testGridYellow">
                <Grid item alignItems="center" direction="column"
                    className="testGridItemWhite" xs={12} md={12}>
                  <Button alignItems="center" direction="column" variant="contained">Register</Button>
                </Grid>
                <Grid item className="testGridItemWhite" xs={12} md={12}>
                    <Button variant="contained">Register</Button>
                </Grid>
                <Grid item className="testGridItemWhite" xs={12} md={12}>
                    <Button variant="contained">Register</Button>
                </Grid>
                <Grid item className="testGridItemWhite" xs={12} md={12}>
                    <Button variant="contained">Register</Button>
                </Grid>
                
            </Box>

            <Grid container>


            </Grid>


            <Grid container
                className="favoritesList">{listAllComedians.map(thing => {
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