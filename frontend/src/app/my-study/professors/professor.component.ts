import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { CourseService } from "../../services/course/course.service";
import { CookieService } from "ngx-cookie-service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FilterService} from "../../services/filter/filter.service";
import {ProfessorService} from "../../services/professor/professor.service";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss',
  providers: [CourseService, ProfessorService],
})
export class ProfessorComponent {

  private apiUrl = 'http://localhost:3000';
  allProfessors: any[] = [];
  courseProfessors: any[] = [];
  courses: any[] = [];

  id: any;

  constructor( private http: HttpClient, private cookieService: CookieService, private courseService: CourseService, private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.fetchCourses()
    this.fetchAllProfessors();

  }

  getProfessors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profesors`);
  }

  fetchCourses(){
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(jwt);
    this.id = {
      studentID: jwtPayload.studentID,
      profesorID: jwtPayload.profesorID,
    };
    this.courseService.getCourses(this.id).subscribe(
      (data) => {
        console.log(data);
        this.courses = data;
        for (var crs of this.courses){
          this.fetchCourseProfessors(crs.courseID);
        }
      }
    )
  }
  fetchAllProfessors() {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(jwt);
    this.id = {
      studentID: jwtPayload.studentID,
      profesorID: jwtPayload.profesorID,
    };

    this.getProfessors().subscribe(
      (data) => {
        this.allProfessors = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching professors', error);
      }
    );
  }

  fetchCourseProfessors(profID: number){
    console.log("HAHA1");
    this.id = profID;
    this.professorService.getProfessors(this.id).subscribe({
        next: (response) => {
          console.log('Response for the courses has been received');
          this.courseProfessors = response;

        }
      }
    )
  }

  getEmail(professor: any): string {
    const frstLetterInName = professor.profesorName.charAt(0).toLowerCase();
    const lastName = professor.profesorSurname.toLowerCase();
    const idProfessor = professor.profesorID;
    return `${frstLetterInName}${lastName}${idProfessor}@uni.prof.hr`;
  }

  getProfessorFullName(professor: any): string{
    const frstName = professor.profesorName;
    const lastName = professor.profesorSurname;
    return `${frstName} ${lastName}`;
  }

  private decodeJWT(token: string): any {
    const payload = token.split('.')[1];
    let decodedPayload: any = {};
    try {
      decodedPayload = JSON.parse(atob(payload));
    } catch (e) {
      // this.router.navigate(['/login2']);
      // throw new Error('Invalid JWT token');
      console.log('Invalid JWT token');
      decodedPayload.studentID = -1;
      decodedPayload.profesorID = -1;

    }
    return decodedPayload;
  }

}
