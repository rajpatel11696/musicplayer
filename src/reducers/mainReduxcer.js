const { DARK_MODE, MUSIC_LIST, PLAY_OBJECT, CHANGE_PLAYER, CUREENT_PLAY_INDEX } = require("../Action/ActionType");


const initialState = {
    darkMode: false,
    musicList:[],
    playObject:{},
    selectedplayer:0,
    cureentPlayIndex:0
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
        case PLAY_OBJECT:
            return{
                ...state,
                playObject:action.payload
            };
            break
        case CHANGE_PLAYER:
            
            return{
                ...state,
                selectedplayer:action.payload
            };
            break
        case CUREENT_PLAY_INDEX:
            return{
                ...state,
                cureentPlayIndex:action.payload
            };
            break
        
        default:
            return state;
    }
}

export default mainReducer