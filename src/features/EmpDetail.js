import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    EmpDetail:[]
}

export const EmpDetail = createSlice({
  name: "EmpDetail",
  initialState,
  reducers: {
  
    setEmpDetail: (state, {payload} ) => {
      state.EmpDetail.push(payload);
    },
    
  
  },
});

 
 
export const { setEmpDetail } = EmpDetail.actions;
export default EmpDetail.reducer;
