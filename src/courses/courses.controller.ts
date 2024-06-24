import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Res, Put } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { CourseService } from './courses.service';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('course')
export class CoursesController {
  constructor(private readonly courseService: CourseService) { }

  @Post()
  async createCourse(@Res() response, @Body() createCourseDto: CreateCourseDto) {
    try {
      const newCourse = await this.courseService.createCourse(createCourseDto);
      return response
      .status(HttpStatus.CREATED)
      .json({
      message: 'Course has been created successfully',
      newCourse,});
   } catch (err) {
      return response
      .status(HttpStatus.BAD_REQUEST)
      .json({
      statusCode: 400,
      message: 'Error: Course not created!',
      error: 'Bad Request'
   });
   }
  }

  @Get()
  async findAllCourses(@Res() response) {
    try {
      const courses = await this.courseService.findAllCourses()
      return response
      .status(HttpStatus.OK)
      .json({
        message: 'All courses data fount successfully', courses
      })
    } catch (error) {
      return response
      .status(error.status)
      .json(error.response)
    }
  }

  @Get('/:id')
  async findOneCourse(@Res() response,@Param('id') courseId: string) {
     try {
      const findCourse = await this.courseService.findOneCourse(courseId)
      return response
      .status(HttpStatus.OK)
      .json({ message: 'Course found successfully', findCourse})
     } catch (error) {
       return response
       .status(error.status)
       .json(error.response) 
     }
  }

  @Put('/:id')
  async updateCourse(@Res() response,@Param('id') courseid: string, @Body() updateCourseDto: UpdateCourseDto) {
    try {
      const course = await this.courseService.updateCourse(courseid,updateCourseDto)
      return response
      .status(HttpStatus.OK)
      .json({ message: 'Course has been successfully update', course})
    } catch (error) {
      return response
       .status(error.status)
       .json(error.response) 
    }
  }

  @Delete('/:id')
  async remove(@Res() response, @Param('id') courseid: string) {
    try {
      const deleteCourse = await this.courseService.removeCourse(courseid)
      return response
      .status(HttpStatus.OK)
      .json({ message: 'Course deleted successfully', deleteCourse})
    } catch (error) {
      return response
       .status(error.status)
       .json(error.response) 
    }
  }
}
