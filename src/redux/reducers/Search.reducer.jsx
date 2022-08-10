
// --- reducer to save allComedians state --- //

const searchReducer =(state = ['-default state-'],  action) => {
    
    switch (action.type) {
        case 'SAVE_SEARCH':
            console.log('SEARCH Results (Reducer)', state);
            return action.payload;
        default:
            return state;
    }
};

export default searchReducer;