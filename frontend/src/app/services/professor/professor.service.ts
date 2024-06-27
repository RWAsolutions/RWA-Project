import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProfessorService{

  constructor(private http: HttpClient) {
  }

  getProfessors(id: {profesorID: number, studentID: number}): Observable<any> {
    if(id) {
      if(id.profesorID !== null && id.profesorID !== undefined) {
        return this.http.get<any>(`http://localhost:3000/courses/${id.profesorID}/students`)
      } else {
        return this.http.get<any>(`http://localhost:3000/courses/${id.studentID}/profesors`)
      }
    } else {
      throw console.error('No valid id is present!!!');
    }

  }
}
