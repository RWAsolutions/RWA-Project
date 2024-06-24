import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { CourseDto } from '../services/course/course.dto';
import { CourseService } from '../services/course/course.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  studentID: number | null;
  profesorID: number | null;
  id: any;
  email: string;
  city: string;
  postNumber: number | null;
  courses: CourseDto[];
}

@Component({
  selector: 'app-user-info',
  standalone: true,
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  providers: [CookieService, CourseService],
  imports: [CommonModule, MatIconModule, MatCardModule, HeaderComponent]
})
export class ProfilComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    studentID: null,
    profesorID: null,
    id: null,
    email: '',
    city: '',
    postNumber: null,
    courses: [],
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    console.log("starting generateUser");
    this.generateUser().then(() => {
      console.log("user generated, starting getCourses");
      console.log(this.user.id);
      this.getCourses();
      console.log("got courses of user: "+ this.user.firstName);
    }).catch(error => {
      console.error('Error generating user:', error);
    });
  }

  generateUser(): Promise<void> {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(jwt);

    return new Promise((resolve, reject) => {
      if (jwtPayload.studentID) {
        this.http.get<any>(`http://localhost:3000/students/${jwtPayload.studentID}`).subscribe(user => {
          this.populateUser(user.studentName, user.studentSurname, user.dateOfBirth, user.street, user.streetNumber, jwtPayload);
          resolve();
        }, error => {
          reject(error);
        });
      } else if (jwtPayload.profesorID) {
        this.http.get<any>(`http://localhost:3000/profesors/${jwtPayload.profesorID}`).subscribe(user => {
          this.populateUser(user.profesorName, user.profesorSurname, user.dateOfBirth, user.street, user.streetNumber, jwtPayload);
          resolve();
        }, error => {
          reject(error);
        });
      } else {
        reject('No valid ID found in JWT payload');
      }
    });
  }

  private populateUser(firstName: string, lastName: string, dateOfBirth: string, street: string, streetNumber: string, jwtPayload: any): void {
    this.user.firstName = firstName;
    this.user.lastName = lastName;
    this.user.dateOfBirth = this.formatBirthDate(dateOfBirth);
    this.user.address = `${street} ${streetNumber}`;
    this.user.email = jwtPayload.email;
    this.user.studentID = jwtPayload.studentID;
    this.user.profesorID = jwtPayload.profesorID;
    this.user.id = { studentID: jwtPayload.studentID, profesorID: jwtPayload.profesorID };
    
    if (jwtPayload.studentID) {
      this.http.get<any>(`http://localhost:3000/students/${this.user.studentID}/city`).subscribe(city => {
        this.user.city = city.cityName;
        this.user.postNumber = city.postNumber;
      });
    } else {
      this.http.get<any>(`http://localhost:3000/profesors/${this.user.profesorID}/city`).subscribe(city => {
        this.user.city = city.cityName;
        this.user.postNumber = city.postNumber;
      });
    }
  }

  getCourses() {
    if (this.user.id) {
      this.courseService.getCourses(this.user.id).subscribe({
        next: response => {
          this.user.courses = response;
          console.log('COURSES:', this.user.courses);
        },
        error: error => {
          console.error('Error fetching courses:', error);
        }
      });
    } else {
      console.error('No valid ID found to fetch courses');
    }
  }

  private decodeJWT(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.log('Invalid JWT token');
      return { studentID: -1, profesorID: -1 };
    }
  }

  private formatBirthDate(dateOfBirth: string): string {
    const date = new Date(dateOfBirth);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns zero-based month
    const year = date.getFullYear();
  
    return `${day}.${month}.${year}.`;
  }
}
