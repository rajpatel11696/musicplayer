import { DARK_MODE, MUSIC_LIST, PLAY_OBJECT,CHANGE_PLAYER, CUREENT_PLAY_INDEX } from "./ActionType"
import { exp } from "react-native-reanimated"

export const changeDarkMode = (value)=>{
   return{
       type:DARK_MODE,
       payload:value
   }
}

export const storeMusicList = (value)=>{
    return{
        type:MUSIC_LIST,
        payload:value
    }
 }

 export const storePlayObject = (playObject)=>{
    return{
        type:PLAY_OBJECT,
        payload:playObject
    }
 }

 export const changePlayer = (value)=>{
    return{
        type:CHANGE_PLAYER,
        payload:value
    }
 }

 export const storeCurrentPLayIndex = (value)=>{
    return{
        type:CUREENT_PLAY_INDEX,
        payload:value
    }
 }