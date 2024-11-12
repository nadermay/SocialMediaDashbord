
// eslint-disable-next-line no-unused-vars
import { ExposureTwoTone } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line no-unused-vars
const initialState ={
    mood:"dark"
};

export const globalSlice = createSlice ({
    name:"global",
    initialState,
    reducers:{
        setMode:(state)=>{
            state.mood=state.mood==='light'?"dark":'light';
        }
    },

})

export const {setMode}=globalSlice.actions;
export default globalSlice.reducer;