import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CourseService } from '../services/course.service';
import { Course } from './course.model';
import { CommonModule } from '@angular/common';
import { CourseDto } from './courseDB.model';


@Component({
  selector: 'grid-list-overview-example',
  standalone: true,
  imports: [
    MatGridListModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule,
    CommonModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [CourseService]
})
export class CoursesComponent implements OnInit{

  courses: Course[] = []
  courseDB: CourseDto[] = []

  constructor(private courseService: CourseService) {
    this.getCoursesFromDB()
  }


  ngOnInit(): void {
    this.getCourses()
    console.log(this.courses);
    
  }


  getCourses() {
    this.courses = this.courseService.getCoursesMock()
  }
  
  getCoursesFromDB() {
     this.courseService.getCoursesFromDB()
     .subscribe(
        (response) => {
          console.log('response for the courses has been received')
          this.courseDB = response
          console.log(this.courseDB);
          
        },
     )
  }
}
