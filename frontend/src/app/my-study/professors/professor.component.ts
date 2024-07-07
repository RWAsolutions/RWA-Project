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


  isProfessorLoggedIn: any;
  id: any;
  loading: boolean = true;

  constructor( private http: HttpClient,
               private cookieService: CookieService,
               private courseService: CourseService,
               private professorService: ProfessorService,
               private studentService: StudentService,
  ){}

  ngOnInit(): void {
    (async () => {
      this.loading = true;
      await this.fetchCourses();
      // console.log(this.id);

      if (this.id.studentID) {
        this.isProfessorLoggedIn = true;
        await this.fetchCourseProfessors();
      } else {
        this.isProfessorLoggedIn = false;
        await this.fetchStudents();
      }

      this.loading = false;
      // console.log(this.isProfessorLoggedIn);
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
          // console.log(data);
          this.courses = data;
          this.backupCourses = this.courses;
          resolve();
        },
        (error) => {
          // console.error('Error fetching courses:', error);
          reject(error);
        }
      );
    });
  }

  async fetchCourseProfessors(): Promise<void> {
    const professorPromises = this.courses.map(crs => {
      const currentId = crs.courseID;
      return new Promise<void>((resolve, reject) => {
        this.professorService.getProfessors(currentId).subscribe({
          next: (response) => {
            this.courseProfessors.push(...response);
            // console.log("Updated courseProfessors array:", this.courseProfessors);
            resolve();
          },
          error: (err) => {
            // console.error(`Error fetching professors for course ID ${currentId}`, err);
            reject(err);
          }
        });
      });
    });

    await Promise.all(professorPromises);
  }

  async fetchStudents(): Promise<void> {
    const studentPromises = this.courses.map(crs => {
      const currentId = crs.courseID;
      return new Promise<void>((resolve, reject) => {
        this.studentService.getStudents(currentId).subscribe({
          next: (response) => {
            this.students.push(...response);
            this.backupStudents = this.students;
            // console.log("Updated students array:", this.students);
            resolve();
          },
          error: (err) => {
            // console.error(`Error fetching students for course ID ${currentId}`, err);
            reject(err);
          }
        });
      });
    });

    await Promise.all(studentPromises);
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
