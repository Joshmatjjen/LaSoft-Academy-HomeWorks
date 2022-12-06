import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import courseReducer from "./course/course.reducer";
import teacherReducer from "./teacher/teacher.reducer";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ['navigation'],
  // whitelist: ['auth', 'notes'],
};

const appReducer = combineReducers({
  course: courseReducer,
  teacher: teacherReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default persistReducer(persistConfig, rootReducer);
