

// --- reducer to save current comedian state --- //

const currentComedian =(state = ['-default state-'],  action) => {
    switch (action.type) {
        // this is LISTENING
        case 'SAVE_CURRENT_COMEDIAN':  // DON`T CHANGE -  must be 'SAVE_CURRENT_COMEDIAN'
             //'SAVE_CURRENT_COMEDIAN' comes from -> clickIcon's dispatch
                // SAVES the prop of current comedians ID in the reducer state
            console.log('currentComedian-action.payload', action.payload);
            console.log('currentComedian-action.payload[0]', action.payload[0]);
            return action.payload[0];
        default:
            return state;
    }
};

export default currentComedian;
    // is imported into root.reducer.js 
        //and renamed 'currentComedianStore'
            // then lives as 'currentComedianStore' 
                // in the root.reducer store