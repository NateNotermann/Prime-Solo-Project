

// --- reducer to save allComedians state --- //

const CurrentComediansReducer =(state = ['-default state-'],  action) => {
    console.log('CurrentComediansReducer:', action.payload);
    switch (action.type) {
        case 'SAVE_CURRENT_COMEDIAN':
            return action.payload;
        default:
            return state;
    }
};

export default CurrentComediansReducer;