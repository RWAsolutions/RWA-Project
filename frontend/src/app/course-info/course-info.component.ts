import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CourseDto } from '../services/course/course.dto';
import { CourseSignalService } from '../services/signal/data-signal.service';
import { CourseInfoService } from '../services/course-info/course-info.service';
import { CourseService } from '../services/course/course.service';
import { CourseInfoDto } from '../services/course-info/courseInfo.dto';
import { error } from 'jquery';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [
    MatTabsModule,
    MatGridTile,
    MatGridList,
    MatCardModule,
    CommonModule
  ],
  providers: [],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.scss'
})
export class CourseInfoComponent implements OnInit{
 


  course: CourseDto = {
    courseID: 0,
    courseName: '',
    description: 'If you get this you have an undefined course object',
    ECTS: 0,
    semesterOrdinalNumber: 0
  };

  payload: any

  courseInfo!: CourseInfoDto
    
  constructor(
    private courseSignalService: CourseSignalService,
    private courseInfoService: CourseInfoService,
    private courseService: CourseService,
  ){}
  
  ngOnInit(): void {
    this.payload = this.courseService.getDecodedJwtPayload()
    

    this.courseSignalService.getData().subscribe((course) => {
      this.course = course
    })

    this.getCourseInfo()
  }

  getCourseInfo() {
    
    this.courseInfoService.getCourseInfo(this.payload.studentID, this.course.courseID).subscribe({
      next: (response) => {
        this.courseInfo = response
        console.log('Course info retrieved --> ',this.courseInfo);

      },
      error: (error) => {
        console.error('Error fetching the course info');    
      }
    })
    
    
  }
  
}
