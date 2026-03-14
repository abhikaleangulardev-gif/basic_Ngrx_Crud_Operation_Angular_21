import { createReducer, on } from "@ngrx/store";
import { Student } from "./student.model";
import { addStudent, deleteStudent, updateStudent } from "./student.actions";

export const initialState: Student[] = [];

export const studentReducer = createReducer(
    initialState,

    // add student
    on(addStudent, (state, { student }) => [...state, student]),

    // delete student
    on(deleteStudent, (state, { id }) => state.filter(student => student.id !== id)),

    // update student
    on(updateStudent, (state, { student }) => state.map(s => s.id === student.id ? student : s))
)