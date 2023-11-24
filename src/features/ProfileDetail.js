import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ProDetail:[]
}

export const ProfileDetail = createSlice({
  name: "ProDetail",
  initialState,
  reducers: {
  
    setProDetail: (state, {payload} ) => {
      state.ProDetail.push(payload);
    },
    
  
  },
});

 
 
export const { setProDetail } = ProfileDetail.actions;
export default ProfileDetail.reducer;
