

import { useHistory } from 'react-router-dom';

function BackButton(){
    const history = useHistory();


    function back() {
        history.goBack();
         // console.log('history', history);
    }
    
    return(
        <div className="backbutton">
            <br></br>
        <button onClick={() => back('back')}>GO BACK</button>
        </div>
    )
}

export default BackButton;