import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProfessorService{

  constructor(private http: HttpClient) {
  }

  getProfessors(courseID: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/courses/${courseID}/profesors`);
  }
}
