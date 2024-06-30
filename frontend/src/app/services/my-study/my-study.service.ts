import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class MyStudyService{

  constructor(private http: HttpClient) {
  }

  getFacultyByStudentID(studentID: number): Observable<any>{
    return this.http.get<any>(`http://localhost:3000/student-faculty/${studentID}/faculty`);
  }

  getFacultyByID(facultyID: number): Observable<any>{
    return this.http.get<any>(`http://localhost:3000/faculty/${facultyID}`)
  }

}
