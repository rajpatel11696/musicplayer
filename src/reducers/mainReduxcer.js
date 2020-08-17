const { DARK_MODE, MUSIC_LIST } = require("../Action/ActionType");


const initialState = {
    darkMode: false,
    musicList:[]
}

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case DARK_MODE:
            return {
                ...state,
                darkMode: action.payload
            };
            break
        case MUSIC_LIST:
            return{
                ...state,
                musicList:action.payload
            };
            break
        default:
            return state;
    }
}

export default mainReducer