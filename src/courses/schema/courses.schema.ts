import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type CourseDocumet = HydratedDocument<Course>

@Schema()
export class Course {
    @Prop({ required: true, unique: true })
    name: string

    @Prop({ required: true })
    description: string

    @Prop({ required: true })
    teacher: string

    @Prop({ default:'20hs' })
    hoursOfCourse: string

    @Prop({ required: true })
    status: boolean 
}

export const CourseSchema = SchemaFactory.createForClass(Course)
