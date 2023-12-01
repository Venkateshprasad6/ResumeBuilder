import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    EducationDetail:[]
}

export const EduDetail = createSlice({
  name: "EducationDetail",
  initialState,
  reducers: {
  
    setEduDetail: (state, {payload} ) => {
      state.EducationDetail.push(payload);
    },
    
  
  },
});

 
 
export const { setEduDetail } = EduDetail.actions;
export default EduDetail.reducer;

