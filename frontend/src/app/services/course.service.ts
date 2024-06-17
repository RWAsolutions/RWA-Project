import { HttpClient } from "@angular/common/http";
import { Course } from "../courses/course.model";
import { Observable, of } from "rxjs";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class CourseService{


    private courses: Course[] = [
        {
          courseName: 'IT',
          description: 'Learning the computer'
        },
        {
          courseName: 'History',
          description: 'To understand why Hitler lost the war'
        },
        {
          courseName: 'Mathematics',
          description: 'Explore the world of numbers and equations'
        },
        {
          courseName: 'Biology',
          description: 'Study of living organisms and their interactions'
        },
        {
          courseName: 'Literature',
          description: 'Dive into classic and contemporary works of literature'
        },
        {
          courseName: 'Chemistry',
          description: 'Investigate the properties and reactions of substances'
        },
        {
          courseName: 'Physics',
          description: 'Discover the fundamental principles governing the universe'
        },
        {
          courseName: 'Art',
          description: 'Express creativity through various forms of visual and performing arts'
        },
        {
          courseName: 'Economics',
          description: 'Examine production, consumption, and distribution of goods and servicessfddsfsdfdsfdsfdsdsfsdfsdfds'
        },
       
      ];
      

    constructor(private http: HttpClient){
        
    }

    getCoursesMock(): Course[] {
        return this.courses;
    }

    getCoursesFromDB(): Observable<any> {
        return this.http.get<any>('http://localhost:3000/students/184/courses')
       
    }
    
}