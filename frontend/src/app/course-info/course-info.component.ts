import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CourseDto } from '../services/course/course.dto';
import { CourseStorageService } from '../services/signal/course-storage.service';
import { CourseInfoService } from '../services/course-info/course-info.service';
import { CourseService } from '../services/course/course.service';
import { CourseInfoDto } from '../services/course-info/courseInfo.dto';
import { error } from 'jquery';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-course-info',
    standalone: true,
    providers: [],
    templateUrl: './course-info.component.html',
    styleUrl: './course-info.component.scss',
    imports: [
        MatTabsModule,
        MatGridTile,
        MatGridList,
        MatCardModule,
        CommonModule,
    ],
    encapsulation: ViewEncapsulation.ShadowDom

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
    private courseStorageService: CourseStorageService,
    private courseInfoService: CourseInfoService,
    private courseService: CourseService,
  ){}
  
  ngOnInit(): void {

    this.retrieveDataFromLocalStorage()

    if (!this.payload) {
      this.payload = this.courseService.getDecodedJwtPayload();
      this.saveDataToLocalStorage('payload', this.payload);
      
    }
    

    // this.courseStorageService.getData().subscribe((course: CourseDto) => {
    //   this.course = course
    //   this.saveDataToLocalStorage('course', this.course);

    // })

    this.courseStorageService.getSelectedCourse().subscribe((data: CourseDto | null) => {
      if(data) {
         this.course = data
         console.log('the returend subject', this.course);
         this.saveDataToLocalStorage('selectedCourse',this.course)
         
      } else {
        console.error('The returned behaviour subject for selected course is null');
        
      }
    })


    this.getCourseInfo()

  }

  getCourseInfo() {
    
    this.courseInfoService.getCourseInfo(this.payload.studentID, this.course.courseID).subscribe({
      next: (response) => {
        this.courseInfo = response
        this.saveDataToLocalStorage('courseInfo',this.courseInfo)

      },
      error: (error) => {
        console.error('Error fetching the course info');    
      }
    })
  }

  private saveDataToLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  private retrieveDataFromLocalStorage() {
    const payload = localStorage.getItem('payload');
    const course = localStorage.getItem('selectedCourse');
    const courseInfo = localStorage.getItem('courseInfo');

    if (payload && course && courseInfo) {
      this.payload = JSON.parse(payload)
      this.course = JSON.parse(course)
      this.courseInfo = JSON.parse(courseInfo)
    }
  }

  
}
