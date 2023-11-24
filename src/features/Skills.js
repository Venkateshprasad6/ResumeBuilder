import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Strength:[]
}

export const Skills = createSlice({
  name: "Strength",
  initialState,
  reducers: {
  
    setStrength: (state, {payload} ) => {
      state.Strength.push(payload);
    },
    
  
  },
});

 
 
export const { setStrength } = Skills.actions;
export default Skills.reducer;
