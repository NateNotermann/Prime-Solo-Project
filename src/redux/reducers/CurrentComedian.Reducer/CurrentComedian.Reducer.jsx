

// --- reducer to save current comedian state --- //

const comedianId =(state = ['-default state-'],  action) => {
    switch (action.type) {
        // this is LISTENING
        case 'SAVE_CURRENT_COMEDIAN':  // DON`T CHANGE -  must be 'SAVE_CURRENT_COMEDIAN'
             //'SAVE_CURRENT_COMEDIAN' comes from -> clickIcon's dispatch
                // SAVES the prop of current comedians ID in the reducer state
            console.log('comedianId:', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default comedianId;
    // is imported into root.reducer.js 
        //and renamed 'comedianIdStore'
            // then lives as 'comedianIdStore' 
                // in the root.reducer store