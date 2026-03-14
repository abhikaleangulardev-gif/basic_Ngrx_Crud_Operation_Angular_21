import { createAction, props } from "@ngrx/store";
import { Student } from "../component/student/student";


// add student action

export const addStudent = createAction(
    '[Student] Add Student',
    props<{ Student: Student }>()
);

//  Delete Student action

export const deleteStudent = createAction(
    '[Student] Delete Student',
    props<{ id: number }>()
);

// update student action

export const updateStudent = createAction(
    '[Student] Update Student',
    props<{ Student: Student }>()
);