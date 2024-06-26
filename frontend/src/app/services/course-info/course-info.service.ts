import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { error } from "jquery";
import { Observable } from "rxjs";

@Injectable({ 
    providedIn: 'root' 
})
export class CourseInfoService {


    constructor(private http: HttpClient,){}


    getCourseInfo(studentID: number, courseID: number): Observable<any> {
        if(studentID && courseID) {
            return this.http.get<any>(`http://localhost:3000/Courses/${studentID}/student-course-info?courseID=${courseID}`)
        } else {
            throw console.error('Student or course ID does not have valid input!');
            
        }
    }
}