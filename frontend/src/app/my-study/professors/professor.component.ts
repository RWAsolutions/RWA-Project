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
      await this.fetchCourses(); // Wait for fetchCourses to complete
      console.log(this.id);

      if (this.id.studentID) {
        this.isProfessorLoggedIn = true;
        this.fetchCourseProfessors();
      } else {
        this.isProfessorLoggedIn = false;
        this.fetchStudents();
      }

      console.log(this.isProfessorLoggedIn);
    })();
  }

  async fetchCourses(): Promise<void> {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(jwt);
    this.id = {
      studentID: jwtPayload.studentID,
      profesorID: jwtPayload.profesorID,
    };

    return new Promise((resolve, reject) => {
      this.courseService.getCourses(this.id).subscribe(
        (data) => {
          console.log(data);
          this.courses = data;
          this.backupCourses = this.courses;
          resolve(); // Resolve the promise when data is successfully fetched
        },
        (error) => {
          console.error('Error fetching courses:', error);
          reject(error); // Reject the promise if there's an error
        }
      );
    });
  }

  fetchCourseProfessors() {
    this.courses.forEach(crs => {
      const currentId = crs.courseID;
      this.professorService.getProfessors(currentId).subscribe({
        next: (response) => {
          this.courseProfessors.push(...response);
          console.log("Updated courseProfessors array:", this.courseProfessors);
        },
        error: (err) => {
          console.error(`Error fetching professors for course ID ${currentId}`, err);
        }
      });
    });
  }

  fetchStudents() {
    this.courses.forEach(crs => {
      const currentId = crs.courseID;
      this.studentService.getStudents(currentId).subscribe({
        next: (response) => {
          this.students.push(...response);
          this.backupStudents = this.students;
          console.log("Updated students array:", this.students);
        },
        error: (err) => {
          console.error(`Error fetching students for course ID ${currentId}`, err);
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

  getStudentEmail(student: any): string {
    const frstLetterInName = student.studentName.charAt(0).toLowerCase();
    const lastName = student.studentSurname.toLowerCase();
    const idStudent = student.studentID;
    return `${frstLetterInName}${lastName}${idStudent}@uni.hr`;
  }

  getProfessorFullName(professor: any): string {
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
      console.log('Invalid JWT token');
      decodedPayload.studentID = -1;
      decodedPayload.profesorID = -1;
    }
    return decodedPayload;
  }



}
