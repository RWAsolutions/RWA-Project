import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import { CourseService } from "../../services/course/course.service";
import { CookieService } from "ngx-cookie-service";
import {HttpClient} from "@angular/common/http";
import {ProfessorService} from "../../services/getProfessorOrStudent/professor.service";
import {StudentService} from "../../services/getProfessorOrStudent/student.service";
import {HeaderComponent} from "../../header/header.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    HeaderComponent
  ],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss',
  providers: [CourseService, ProfessorService, StudentService],
})
export class ProfessorComponent {

  private apiUrl = 'http://localhost:3000';
  courseProfessors: any[] = [];

  courses: any[] = [];
  backupCourses: any[] = [];

  students: any[] = [];
  backupStudents: any[] = [];

  studentCourses: any[] = [];
  backupStudentCourses: any[] = [];

  isProfessorLoggedIn: any;
  id: any;

  constructor( private http: HttpClient,
               private cookieService: CookieService,
               private courseService: CourseService,
               private professorService: ProfessorService,
               private studentService: StudentService,
  ){}

  ngOnInit(): void {
    (async () => {
      this.fetchCourses();
      console.log(this.id)
      await new Promise(f => setTimeout(f, 500));
      if (this.id.studentID){
        this.isProfessorLoggedIn = true;
        this.fetchCourseProfessors();
      }else {
        this.isProfessorLoggedIn = false;
        this.fetchStudents();
      }
      console.log(this.isProfessorLoggedIn);
    })();
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

        this.backupCourses = this.courses;
      }
    )
  }


  fetchCourseProfessors() {
    this.courses.forEach(crs => {
      //console.log("Processing course:", crs);
      const currentId = crs.courseID;
      //console.log("Current course ID:", currentId);
      this.professorService.getProfessors(currentId).subscribe({
        next: (response) => {
          //console.log(`Response for course ID ${currentId} has been received`);
          this.courseProfessors.push(...response);

          console.log("Updated courseProfessors array:", this.courseProfessors);
        },
        error: (err) => {
          console.error(`Error fetching professors for course ID ${currentId}`, err);
        }
      });
    });
  }

  fetchStudents(){
    this.courses.forEach(crs => {
      const currentId = crs.courseID;
      //console.log("Current course ID:", currentId);
      this.studentService.getStudents(currentId).subscribe({
        next: (response) => {
          //console.log(`Response for course ID ${currentId} has been received`);
          this.students.push(...response);

          this.backupStudents = this.students;

          console.log("Updated courseProfessors array:", this.students);
        },
        error: (err) => {
          console.error(`Error fetching professors for course ID ${currentId}`, err);
        }
      });
    });
  }


  getEmail(professor: any): string {
    const frstLetterInName = professor.profesorName.charAt(0).toLowerCase();
    const lastName = professor.profesorSurname.toLowerCase();
    const idProfessor = professor.profesorID;
    return `${frstLetterInName}${lastName}${idProfessor}@uni.prof.hr`;
  }

  getStudentEmail(student: any){
    const frstLetterInName = student.studentName.charAt(0).toLowerCase();
    const lastName = student.studentSurname.toLowerCase();
    const idStudent = student.studentID;
    return `${frstLetterInName}${lastName}${idStudent}@uni.hr`;
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
