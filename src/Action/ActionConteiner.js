import { DARK_MODE, MUSIC_LIST } from "./ActionType"

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