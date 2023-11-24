import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ExpSummary:[]
}

export const ExperienceSummary = createSlice({
  name: "EmpSummary",
  initialState,
  reducers: {
  
    setExpSummary: (state, {payload} ) => {
      state.ExpSummary.push(payload);
    },
    
  
  },
});

 
 
export const { setExpSummary } = ExperienceSummary.actions;
export default ExperienceSummary.reducer;
