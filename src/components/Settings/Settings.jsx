import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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


return (

    <div>

    <h2>Settings Page </h2>
    <br></br>
    <h4>Current Username: {user.username}</h4>
    
    <br></br>

    <form onSubmit={handleSubmit}>
    <label>Change Username</label>
        <input
        placeholder={user.username}
        // value={user.username}
        value={usernameLocal}
        onChange={(event) => setUserNameLocal(event.target.value)} 
        /> 
       
        <button type='submit'>Submit</button>
    </form>




    </div>


)

};


export default Settings;