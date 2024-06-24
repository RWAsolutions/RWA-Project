import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CourseService } from '../services/course/course.service';
import { CommonModule } from '@angular/common';
import { CourseDto } from '../services/course/course.dto';
import {MatSelectChange, MatSelectModule} from '@angular/material/select';
import { FilterService } from '../services/filter/filter.service';
import { FilterDto } from '../services/filter/filter.dto';


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
  templateUrl: './course-catalog.component.html',
  styleUrl: './course-catalog.component.scss',
  providers: [CourseService, FilterService]
})


export class CoursesCatalogComponent implements OnInit{

  courses: CourseDto[] = []
  backupCourses: CourseDto[] = []

  filters: FilterDto[] = []
  
  info: any[] = []  

  payload: any
  id: any

  constructor(
    private courseService: CourseService, 
    private filterService: FilterService,
  ){}


  ngOnInit(): void {
    this.getJwtPayload()
    this.getCourses()
    this.getFilters()
  }


  
  getCourses() {
    if (this.id) {
      this.courseService.getCourses(this.id).subscribe({
        next: (response) => {
          // console.log('Response for the courses has been received');
          this.courses = response;
          // console.log(this.courses);
          //* this line of code is used to backup all the retrieved courses from the database for search purposes
          this.backupCourses = this.courses;
        },
        error: (error) => {
          console.error('Error fetching courses:', error);
        }
      });
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
    this.filterService.getFilters().subscribe({
      next: (response: FilterDto[]) => {
        this.filters = response;
        //console.log(this.filters);
        
      },
      error: (error) => {
        console.error('Error fetching filters:', error);
      }
    });
  }

  onFilterSelected(event: MatSelectChange) {
    const selectedFilter = event.value;
    //console.log('Selected filter: ', selectedFilter);
    
    
    //console.log('Before sort [ ', this.courses, ' ]');
    

    this.filterService.activateFilter(this.courses ,this.payload.studentID, selectedFilter).subscribe(sortedCourses => {
      this.courses = sortedCourses
      //console.log('After sort [ ', this.courses, ' ]');
    })
      
  }

  onSearch(searchValue: string) {
    // console.log('Search value:', searchValue);
    
    if(searchValue.trim() !== '') {
        this.courses = this.backupCourses.filter(course => {
          return course.courseName.toLowerCase().includes(searchValue.trim().toLowerCase())
        })
        
    } else {
      this.courses = [...this.backupCourses]
    }
  }

}
