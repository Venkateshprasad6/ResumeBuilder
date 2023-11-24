import { combineReducers } from "@reduxjs/toolkit";
import ProDetailSummary from "./ProfileDetail";
 import ExpSummaryReducer from "./ExperienceSummary";
// import EmpDetailReducer from "./EmpDetail";
// import EduDetailReducer from "./EduDetail";
// import SkillReducer from "./Skills";
// import SmReducer from "./Sm"
const rootReducer = combineReducers({
  ProDetail: ProDetailSummary,
   ExpSummary: ExpSummaryReducer,
  // EmpDetail: EmpDetailReducer,
  // EduDetail: EduDetailReducer,
  // Skill: SkillReducer,

  // Sm: SmReducer,
});

export default rootReducer;
