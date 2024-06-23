import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { NavigationEnd, Router } from '@angular/router';

export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  studentID: number | null;
  profesorID: number | null;
  email: string;
  city: string;
  postNumber: number | null;
  courses: any[];
}

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, HeaderComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss',
})
export class ProfilComponent implements AfterViewInit {
  user: User = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    studentID: null,
    profesorID: null,
    email: '',
    city: '',
    postNumber: null,
    courses: [],
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(jwt);

    if (jwtPayload.studentID) {
      this.http
        .get<any>(`http://localhost:3000/students/${jwtPayload.studentID}`)
        .subscribe((user) => {
          this.user.firstName = user.studentName;
          this.user.lastName = user.studentSurname;
          this.user.dateOfBirth = formatBirthDate(user.dateOfBirth);
          this.user.address = user.street + ' ' + user.streetNumber;
          this.user.studentID = user.studentID;
          this.user.profesorID = user.profesorID;
          this.user.email = jwtPayload.email;
        });
      this.http
        .get<any>(`http://localhost:3000/students/${jwtPayload.studentID}/city`)
        .subscribe((user) => {
          this.user.city = user.cityName;
          this.user.postNumber = user.postNumber;
        });
    } else if (jwtPayload.profesorID) {
      this.http
        .get<any>(`http://localhost:3000/profesors/${jwtPayload.profesorID}`)
        .subscribe((user) => {
          this.user.firstName = user.profesorName;
          this.user.lastName = user.profesorSurname;
          this.user.dateOfBirth = formatBirthDate(user.dateOfBirth);
          this.user.address = user.street + ' ' + user.streetNumber;
          this.user.studentID = user.studentID;
          this.user.profesorID = user.profesorID;
          this.user.email = jwtPayload.email;
        });
      this.http
        .get<any>(
          `http://localhost:3000/profesors/${jwtPayload.profesorID}/city`
        )
        .subscribe((user) => {
          this.user.city = user.cityName;
          this.user.postNumber = user.postNumber;
        });
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  // if the jwt cannot be decoded, the user is redirected to the login page
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

function formatBirthDate(dateOfBirth: any): string {
  const year = dateOfBirth.substring(0, 4);
  const month = dateOfBirth.substring(5, 7);
  const day = dateOfBirth.substring(8, 10);
  const formatedDateOfBirth = day + '.' + month + '.' + year;
  return formatedDateOfBirth;
}
