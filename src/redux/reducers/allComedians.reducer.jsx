
// --- reducer to save allComedians state --- //

const allComediansReducer =(state = [],  action) => {
    console.log('allComediansREDUCER (allComedians.jsx) state:', state);
    switch (action.type) {
        case 'SAVE_ALL_COMEDIANS':
            return action.payload;
        default:
            return state;
    }
};

export default allComediansReducer;