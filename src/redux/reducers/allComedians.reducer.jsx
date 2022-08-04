
// --- reducer to save allComedians state --- //

const allComediansReducer =(state = [],  action) => {
    switch (action.type) {
        case 'SAVE_ALL_COMEDIANS':
            console.log('allComediansREDUCER (allComedians.jsx) state:', state);
            return action.payload;
        default:
            return state;
    }
};

export default allComediansReducer;