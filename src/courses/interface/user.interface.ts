import { Document } from "mongoose";

export interface ICourse extends Document{
    readonly name: string;
    readonly description: string;
    readonly teacher: string;
    readonly hoursOfCourse: string;
    readonly status: boolean;
}
