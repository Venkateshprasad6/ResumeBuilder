import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Media:[]
}

export const Sm = createSlice({
  name: "Media",
  initialState,
  reducers: {
  
    setMedia: (state, {payload} ) => {
      state.Media.push(payload);
    },
    
  
  },
});

 
 
export const { setMedia } = Sm.actions;
export default Sm.reducer;
