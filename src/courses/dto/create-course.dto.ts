import { IsNotEmpty, IsString, MaxLength, IsBoolean } from "class-validator";

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    name: string;

    @IsString()
    @MaxLength(250)
    description: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    teacher: string;

    @IsString()
    hoursOfCourse: string;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean; 
}
