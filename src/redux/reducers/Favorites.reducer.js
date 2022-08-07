



const Favorites =(state = ['-default state-'], action) => {
    switch (action.type) {
        case 'FAVORITES_REDUCER': //HEARS 

            return action.payload;
        default:
            return state;
    }
};

export default Favorites;