import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';


function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home" className='logoLink'>
        <h2 className="nav-title">Wik-hehe-pedia</h2>
        {/* <div className="logo1"> </div> */}
      </Link>
      <div>
        {/* If no user is logged in, show these links */}

        {/* <Link className="navLink" to="/DrumKit">
          Bonus DRUMKIT!
        </Link> */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}


        <Link className="navLink" to="/user">
          Browse
        </Link>
        <Link className="navLink" to="/SearchPage">
          Search
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="MuiElements" to="/MUIElements">
              MUI!
            </Link> */}


            {/* <Link className="navLink" to="/user">
              Browse
            </Link> */}

            {/* <Link className="navLink" to="/SearchPage">
              Search
            </Link> */}

            <Link className="navLink" to="/Favorites/">
              Favorites
            </Link>

            <Link className="navLink" to="/Settings">
              Settings
            </Link>


            <LogOutButton />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
