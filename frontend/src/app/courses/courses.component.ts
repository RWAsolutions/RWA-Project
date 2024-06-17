import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { CourseDto } from './courseDB.model';
import {MatSelectModule} from '@angular/material/select';
import { FilterService } from '../services/filters/filter.service';


@Component({
  selector: 'grid-list-overview-example',
  standalone: true,
  imports: [
    MatGridListModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  providers: [CourseService, FilterService]
})


export class CoursesComponent implements OnInit{

  courses: CourseDto[] = []
  payload: any
  id: any
  filters : any
  

  constructor(private courseService: CourseService, private filterService: FilterService) {
  }


  ngOnInit(): void {
    this.getJwtPayload()
    this.getFilters()
    this.getCourses()
    this.activateSelectedFilter() 


  }


  
  getCourses() {
    if (this.id) {
      this.courseService.getCourses(this.id)
        .subscribe(
          (response) => {
            console.log('Response for the courses has been received');
            this.courses = response;
            console.log(this.courses);
          },
          (error) => {
            console.error('Error fetching courses:', error);
          }
        );
    } else {
      console.error('No valid ID found to fetch courses');
    }
  }


  getJwtPayload() {
    this.payload = this.courseService.getDecodedJwtPayload()

    if (!this.payload) {
      console.error('Invalid or missing JWT payload');  
    } else {
      this.id = {studentID: this.payload.studentID, profesorID: this.payload.profesorID}
    }   
  }

  getFilters() {
    this.filters = this.filterService.getFilters()
  }

  activateSelectedFilter() {
    this.filterService.activateFilter(this.courses)
  }

}
