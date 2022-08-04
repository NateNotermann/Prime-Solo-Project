
// --- reducer to save allComedians state --- //

const allComediansReducer =(state = ['hello eric'],  action) => {
    // console.log('allComediansREDUCER (allComedians.jsx) state:');
    // console.log('action:',action );
    console.log('action.payload:', action.payload );
    switch (action.type) {
        case 'SAVE_ALL_COMEDIANS':
            return [action.payload];
        default:
            return state;
    }
};

export default allComediansReducer;