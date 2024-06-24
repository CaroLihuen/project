import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './courses/schema/courses.schema';
import { CoursesController } from './courses/courses.controller';
import { CourseService } from './courses/courses.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017',
      {dbName:'testCourses'}),
    MongooseModule.forFeature([{name: 'Course', schema: CourseSchema }])
   
  ],
  controllers: [AppController, CoursesController],
  providers: [AppService, CourseService],
})
export class AppModule {}
