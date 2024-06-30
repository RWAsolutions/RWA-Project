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

    this.retrieveDataFromSessionStorage()

    if (!this.payload) {
      this.payload = this.courseService.getDecodedJwtPayload();
      this.saveDataToSessionStorage('payload', this.payload);
      
    }
    
    this.courseStorageService.getSelectedCourse().subscribe((data: CourseDto | null) => {
      if(data) {
         this.course = data
         this.saveDataToSessionStorage('selectedCourse',this.course)
         
      } else {
        console.error('The returned behaviour subject for selected course is null');
        
      }
    })


    this.getCourseInfo()
    this.getParticipants()

  }

  getCourseInfo() {
    
    this.courseInfoService.getCourseInfo(this.payload.studentID, this.payload.profesorID, this.course.courseID).subscribe({
      next: (response) => {
        this.courseInfo = response
        console.log('This is what was returned from the get request -->', this.courseInfo);
        console.log('The profesor ID -->', this.payload.userID);
        console.log('The student ID -->', this.payload.studentID);
        console.log('The Payload -->', this.payload);
        
        
        this.saveDataToSessionStorage('courseInfo',this.courseInfo)

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
          this.saveDataToSessionStorage('participants', this.courseParticipants);
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


  private saveDataToSessionStorage(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  private retrieveDataFromSessionStorage() {
    const payload = sessionStorage.getItem('payload');
    const course = sessionStorage.getItem('selectedCourse');
    const courseInfo = sessionStorage.getItem('courseInfo');
    const participants = sessionStorage.getItem('participants')

    if (payload && course && courseInfo && participants ) {
      this.payload = JSON.parse(payload)
      this.course = JSON.parse(course)
      this.courseInfo = JSON.parse(courseInfo)
      this.courseParticipants = JSON.parse(participants)
    }
  }

  
}
