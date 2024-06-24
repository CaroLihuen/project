import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose'
import { CreateCourseDto } from './dto/create-course.dto';
import { ICourse } from './interface/user.interface';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private courseModel: Model<ICourse>) { }

  async createCourse(createcourseDto: CreateCourseDto): Promise <ICourse> {
    const newCourse = await new this.courseModel(createcourseDto);
    return newCourse.save();
  }

  async findAllCourses(): Promise<ICourse[]> { 
    const allCourses = await this.courseModel.find();
    return allCourses;
  }

  async findOneCourse(courseId: string): Promise<ICourse> {
    const course = await this.courseModel.findOne({_id: courseId})
    if(!course){throw new BadRequestException('ID not found.')}
    return course; 
  }

  async updateCourse(courseId: string, updateCourseDto: UpdateCourseDto):Promise<ICourse> {
    await this.findOneCourse(courseId) 
    const updateCourse = await this.courseModel.findByIdAndUpdate(courseId, updateCourseDto)  
    return updateCourse;
  }

  async removeCourse(courseId: string):Promise<ICourse> {
    await this.findOneCourse(courseId)
    const deleteCourse = await this.courseModel.findOneAndDelete({_id : courseId})
    return deleteCourse;
  }
}
