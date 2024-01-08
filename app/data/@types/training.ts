import { Student } from './student';

export interface Training { 
    id: string,
    name: string,
    description: string,
    student: Student
}