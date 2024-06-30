import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StudentService{

  constructor(private http: HttpClient) {
  }

  getStudents(courseID: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/courses/${courseID}/students`);
  }

  getCourseByStudent(studentID: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/students/${studentID}/courses`);
  }
}
