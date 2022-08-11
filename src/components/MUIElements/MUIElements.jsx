import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, TextField, Typography, } from '@mui/material';




function MUIElements() {
    const listAllComedians = useSelector(store => store.allComediansReducerStore);
    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch({ type: 'GET_ALL_COMEDIANS' });
      }, []);

    return (<>
            <Box container>
            <Grid>

                <Button variant="text">Register</Button>
                <Button variant="outlined">Register</Button>


                <Button variant="contained">Register</Button>

            </Grid>
            <Grid>
              
                <TextField label={'margin="none"'} id="margin-none" />
            
                <TextField label={'margin="dense"'} id="margin-dense" margin="dense" />
           
                <TextField label={'margin="normal"'} id="margin-normal" margin="normal" />
            

            </Grid>



        <Grid item>
            
        </Grid>
           

            <Grid className="favoritesList">{listAllComedians.map(thing => {
                return (
                    <img className='icon'
                    src={thing.icon}/>
                    )
                })}
      </Grid>





        </Box>
                <img src="/public/images/Landing_Background.gif"></img>
                </>

    )
}

export default MUIElements;