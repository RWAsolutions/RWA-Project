import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CourseDto } from '../services/course/course.dto';
import { CourseStorageService } from '../services/signal/course-storage.service';
import { CourseInfoService } from '../services/course-info/course-info.service';
import { CourseService } from '../services/course/course.service';
import { CourseInfoDto } from '../services/course-info/courseInfo.dto';
import { CommonModule } from '@angular/common';
import { CourseParticipant } from '../services/course-info/course-participant.dto';
import { error } from 'jquery';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


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
        MatFormField,
        MatLabel,
        MatInputModule,
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

  courseParticipants!: CourseParticipant[]
  backupCourseParticipants!: CourseParticipant[]
    
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
    
    this.courseStorageService.getSelectedCourse().subscribe((data: CourseDto | null) => {
      if(data) {
         this.course = data
        //  console.log('the returned subject', this.course);
         this.saveDataToLocalStorage('selectedCourse',this.course)
         
      } else {
        console.error('The returned behaviour subject for selected course is null');
        
      }
    })


    this.getCourseInfo()
    this.getParticipants()

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


  getParticipants() {
    this.courseInfoService.getParticipants(this.course.courseID).subscribe({
      next: (data: any) => {
        if(data) {

          this.courseParticipants = [
            ...data.professors.map((profesor: any) => ({
              id: profesor.profesorID,
              name: `${profesor.profesorName} ${profesor.profesorSurname}`,
              role: 'professor'
            })),
            ...data.students.map((student: any) => ({
              id: student.studentID,
              name: `${student.studentName} ${student.studentSurname}`,
              role: 'student'
            }))
          ];
          this.saveDataToLocalStorage('participants', this.courseParticipants);
        } else {
          throw console.error('Unexpected data structure');
        }
        this.backupCourseParticipants= this.courseParticipants
      },
      error: (error: Error) => {
        console.error('Error fetching participants', error);
      }
    })
  }

  onSearch(searchValue: string) {
    if(searchValue.trim() !== '') {
        this.courseParticipants = this.backupCourseParticipants.filter(participant => {
          return participant.name.toLowerCase().includes(searchValue.trim().toLowerCase())
        })
        
    } else {
      this.courseParticipants = [...this.backupCourseParticipants]
    }
  }


  private saveDataToLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  private retrieveDataFromLocalStorage() {
    const payload = localStorage.getItem('payload');
    const course = localStorage.getItem('selectedCourse');
    const courseInfo = localStorage.getItem('courseInfo');
    const participants = localStorage.getItem('participants')

    if (payload && course && courseInfo && participants ) {
      this.payload = JSON.parse(payload)
      this.course = JSON.parse(course)
      this.courseInfo = JSON.parse(courseInfo)
      this.courseParticipants = JSON.parse(participants)
    }
  }

  
}
