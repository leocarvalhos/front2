import { Instructor } from "./instructor";

export interface Student {
    id: string;
    name: string;
    cpf: string;
    due_date: string;
    active: boolean;
    gender: string;
    photo: string;
    birthday: string;
    goal: string;
    instructor: Instructor,
}