import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { CourseService } from '../services/course/course.service';
import { CommonModule } from '@angular/common';
import { CourseDto } from '../services/course/course.dto';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FilterService } from '../services/filter/filter.service';
import { FilterDto } from '../services/filter/filter.dto';
import { RomanizePipe } from "../pipes/romanize.pipe";
import { Router } from '@angular/router';
import { CourseStorageService } from '../services/signal/course-storage.service';


@Component({
    selector: 'grid-list-overview-example',
    standalone: true,
    templateUrl: './course-catalog.component.html',
    styleUrl: './course-catalog.component.scss',
    imports: [
        MatGridListModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        CommonModule,
        FormsModule,
        MatSelectModule,
        RomanizePipe,
    ]
})
export class CoursesCatalogComponent implements OnInit {
  courses: CourseDto[] = [];
  backupCourses: CourseDto[] = [];

  filters: FilterDto[] = [];

  info: any[] = [];

  payload: any;
  id: any;


  selectedCourse: CourseDto = {
    courseID: 0,
    courseName: '',
    description: 'If you get this you have an undefined course object',
    ECTS: 0,
    semesterOrdinalNumber: 0
  }

  defaultFilter: FilterDto = {
    filterID: 1,
    filterName: 'Semester(ASC)',
    filterDescription: 'Filter for sorting semesters in ascending order'
  }


  constructor(
    private courseService: CourseService, 
    private filterService: FilterService,
    private router: Router,
    private courseStorageService: CourseStorageService
  ){}


  ngOnInit(): void {
    this.getJwtPayload()
    this.getFilters()
    this.getCourses()
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

          //* This is used for default sort of the courses when logging in
          const defaultEvent = { value: this.defaultFilter } as MatSelectChange;
          this.onFilterSelected(defaultEvent); 
        },
        error: (error) => {
          console.error('Error fetching courses:', error);
        },
      });
    } else {
      console.error('No valid ID found to fetch courses');
    }
  }

  getJwtPayload() {
    this.payload = this.courseService.getDecodedJwtPayload();

    if (!this.payload) {
      console.error('Invalid or missing JWT payload');
    } else {
      this.id = {studentID: this.payload.studentID, profesorID: this.payload.profesorID}
      console.log('ID object from our payload',this.id);
      
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
      },
    });
  }

  onFilterSelected(event: MatSelectChange) {
    console.log(event);
    
    const selectedFilter = event.value;
    // console.log('Selected filter: ', selectedFilter);
    
    // console.log('Before sort [ ', this.courses, ' ]');

    this.filterService.activateFilter(this.courses ,this.id, selectedFilter).subscribe(sortedCourses => {
      this.courses = sortedCourses
      // console.log('After sort [ ', this.courses, ' ]');
    })
  }

  onSearch(searchValue: string) {
    // console.log('Search value:', searchValue);

    if (searchValue.trim() !== '') {
      this.courses = this.backupCourses.filter((course) => {
        return course.courseName
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase());
      });
    } else {
      this.courses = [...this.backupCourses];
    }
  }

  onSelectedCourse (course: CourseDto) {
    this.courseStorageService.setSelectedCourse(course);
    this.router.navigate(['/course-info'])
  }

}
