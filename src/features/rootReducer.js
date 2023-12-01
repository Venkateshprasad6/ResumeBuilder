import { combineReducers } from "@reduxjs/toolkit";
import setProDetailReducer from "./ProfileDetail";
 import setProSummaryReducer from "./profileSummary"
// import EmpDetailReducer from "./EmpDetail";
// import EduDetailReducer from "./EduDetail";
// import SkillReducer from "./Skills";
// import SmReducer from "./Sm"
const rootReducer = combineReducers({
  ProDetail: setProDetailReducer,
   ProfessionalSummary: setProSummaryReducer,
  // EmpDetail: EmpDetailReducer,
  // EduDetail: EduDetailReducer,
  // Skill: SkillReducer,

  // Sm: SmReducer,
});

export default rootReducer;
