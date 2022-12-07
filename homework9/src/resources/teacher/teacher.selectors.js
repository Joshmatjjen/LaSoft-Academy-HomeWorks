import { createSelector } from "reselect";

const selectTeacher = (state) => state.teacher;

export const selectTeachers = createSelector(
  [selectTeacher],
  (teacher) => teacher.teachers
);
