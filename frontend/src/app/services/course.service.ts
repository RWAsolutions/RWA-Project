import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class CourseService{

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }



  getCourses(id: {studentID: number, profesorID: number}): Observable<any> {
    if(id) {
      if(id.studentID !== null && id.studentID !== undefined) {
        return this.http.get<any>(`http://localhost:3000/students/${id.studentID}/courses`)   
      } else {
        return this.http.get<any>(`http://localhost:3000/profesors/${id.profesorID}/courses`)   
      }
    } else {
      throw console.error('No valid id is present!!!');
    }
    
  }
    
  getDecodedJwtPayload(): any {
    try {
      const token = this.cookieService.get('jwt')
      const decoded = jwtDecode
      <{
        userID: number, 
        role: string, 
        email: string, 
        studentID: number | null, 
        profesorID: number | null
      }>
      (token);
      console.log('Decoded Jwt cookie payload: ', decoded);
      return decoded;
    } catch (error) {
      console.error('Invalid JWT token', error);
      return null;
    }
  }
  
}