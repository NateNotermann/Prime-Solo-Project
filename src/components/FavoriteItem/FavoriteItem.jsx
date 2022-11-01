
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, } from 'react-router-dom';

// --- item to render a single comedian's 
// id, first name, last name, icon and a favorite or unfavorite button.
// will be used any time we are .map()ing 

// ------ MUI ELEMENTS ------ // in Alphabetical order ------ //
import { Box, Button, Grid, Link, Paper, TextField, Typography, Tooltip } from '@mui/material';
import { positions } from '@mui/system';
import '../MUIElements/MUIElements.css';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse } from '@mui/material';

import './FavoriteItem.css';

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


function ComedianItem({ favoriteProp }) {
  const user = useSelector(store => store.user.id);
  const history = useHistory();
  const space = ' ';
  const google = 'https://www.google.com/maps/search/';
  const dispatch = useDispatch();


  console.log('favoriteProp', favoriteProp);


  const clickIcon = (comedianId) => {

    dispatch({
      // this is TELLING
      type: 'GET_CURRENT_COMEDIAN', // DON`T CHANGE - 
      //Goes to -> CurrentComediansReducer
      payload: comedianId,
    })
    // history.push(`/ComedianDetails/${comedianId.first_name}${comedianId.last_name}`)
    history.push(`/ComedianDetails/${favoriteProp.first_name}-${favoriteProp.last_name}-${comedianId}`)
    // must match route with 'exact path="/ComedianDetails"' in App.jsx - 
  }



  // ------ REMOVE FAVORITE ------ // 
  const deleteFavorite = (favoriteId) => {
    console.log('Delete Favorite:', favoriteId, 'user:', user);
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: favoriteId,  // favoriteId is just and INT, it is pulled from favorites.id
    })
  };



  console.log('favoriteProp', favoriteProp);
  console.log('favoriteProp.id', favoriteProp.id);
  console.log('favoriteProp.comedian_id', favoriteProp.comedian_id);

  return (<>
    <Grid container className="mainFavoriteItemBox" key={favoriteProp.id}>


      <Card className="cardFav">
        <CardMedia onClick={() => clickIcon(favoriteProp.comedian_id)}
          component="img"
          height="194"
listAllComedians
          image={favoriteProp.icon}
          alt={favoriteProp.name}
        />
        {/* <CardHeader className="cardHeader"
          action={
            <Tooltip title="Delete">
            <IconButton aria-label="settings">
              <DeleteIcon item variant="contained" onClick={() => deleteFavorite(favoriteProp.id)} />
            </IconButton>
          </Tooltip>
          }
          title={favoriteProp.first_name + space + favoriteProp.last_name}
          location={favoriteProp.city}
          
        /> */}

        <Typography container
          margin=".5rem"
          className={"MuiTypography--heading"}
          variant={"h5"}
          // gutterBottom
          color='text.secondary'
        >

          {/* <Button aria-label="settings"
          color='fifthBlack'>
            {favoriteProp.first_name} {favoriteProp.last_name}
          </Button> */}

          {/* <Tooltip title={favoriteProp.city}>
            <IconButton aria-label="settings">
              <a href={google + favoriteProp.city}
                className="link"
                title="Instagram"
                target="_blank"><LocationOnIcon variant="inherit"> </LocationOnIcon> </a>

            </IconButton>
            </Tooltip> */}
          <Grid container
            //  justifyContent="center"
            xs={12}
            justifyContent="space-around"
            // alignItems="stretch"
            alignItems="center"
          >
            <Grid item></Grid>

            <Grid item>
              <Grid item></Grid>
              <Typography className="typo" xs={{ fontSize: "2vh" }}

                color="text.primary" variant={"h5"} >
                {favoriteProp.first_name}
              </Typography>

              <Typography className="typo" xs={{ fontSize: "2vh" }}
                color="text.primary" variant={"h5"} >
                {favoriteProp.last_name}
              </Typography>
            </Grid>

            <Grid item >
              <Tooltip title="Delete">
                <IconButton aria-label="settings">
                  <DeleteIcon item variant="contained" onClick={() => deleteFavorite(favoriteProp.id)} />
                </IconButton>
              </Tooltip>
            </Grid>

          </Grid>





          <Grid container
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Tooltip title={favoriteProp.city}>

              <Link a href={google + favoriteProp.city} >
                {/* <Button component={Link} to={google + favoriteProp.city}
                variant="inherit"> */}

                <IconButton aria-label="settings" >
                  <a href={google + favoriteProp.city}
                    className="link"
                    target="_blank">
                    <LocationOnIcon color="forth">
                    </LocationOnIcon>
                  </a>
                </IconButton>
                {/* </Button> */}
              </Link>
            </Tooltip>

            <Tooltip title="Comedian Details">
              <IconButton aria-label="settings" onClick={() => clickIcon(favoriteProp.comedian_id)}>
                <InfoIcon color="primary" />

              </IconButton>
            </Tooltip>

            {/* City: {favoriteProp.city} */}
            {/* <Tooltip title="Delete">
            <IconButton aria-label="settings">
              <DeleteIcon item variant="contained" onClick={() => deleteFavorite(favoriteProp.id)} />
            </IconButton>
          </Tooltip> */}
          </Grid>
        </Typography>


        {/* <div onClick={() => clickIcon(favoriteProp.comedian_id)}>
          <h2>{favoriteProp.first_name} {favoriteProp.last_name}</h2>
          <img className='icon'
            src={favoriteProp.icon}
            alt={favoriteProp.first_name} />
        </div> */}

        {/* <Button variant="contained" onClick={() => deleteFavorite(favoriteProp.id)}>Delete Favorite</Button> */}


      </Card>




    </Grid>
  </>
  )
}


export default ComedianItem;