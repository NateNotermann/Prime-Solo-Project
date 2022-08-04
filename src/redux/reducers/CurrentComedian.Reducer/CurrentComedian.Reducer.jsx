

// --- reducer to save allComedians state --- //

const CurrentComediansReducer =(state = ['-default state-'],  action) => {
    switch (action.type) {
        case 'SAVE_CURRENT_COMEDIAN':  // DON`T CHANGE -  must be 'SAVE_CURRENT_COMEDIAN'
            console.log('CurrentComediansReducer:', action.payload);
            return action.payload;
        default:
            return state;
    }
};

export default CurrentComediansReducer;