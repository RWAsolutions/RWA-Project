import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { decodeJWT } from '../helpers/decode-jwt';

export interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  studentID: number | null;
  profesorID: number | null;
}

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements AfterViewInit {

  user: User = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    studentID: null,
    profesorID: null
  };

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) { }

  // ngOnInit(): void {
  //   this.http.get<User>('http://localhost:3000/student/', {
  // }

  ngAfterViewInit(): void {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = decodeJWT(jwt);

    if (jwtPayload.studentID) {
      this.http.get<any>(`http://localhost:3000/students/${jwtPayload.studentID}`).subscribe(user => {
        console.log('User data inside get request:', user);
        this.user.firstName = user.studentName;
        this.user.lastName = user.studentSurname;
        this.user.dateOfBirth = user.dateOfBirth;
        this.user.address = user.street + ' ' + user.streetNumber;
        this.user.studentID = user.studentID;
        this.user.profesorID = user.profesorID;
      });
    }
    else if (jwtPayload.profesorID) {
      this.http.get<any>(`http://localhost:3000/profesors/${jwtPayload.profesorID}`).subscribe(user => {
        console.log('User data inside get request:', user);
        this.user.firstName = user.profesorName;
        this.user.lastName = user.profesorSurname;
        this.user.dateOfBirth = user.dateOfBirth;
        this.user.address = user.street + ' ' + user.streetNumber;
        this.user.studentID = user.studentID;
        this.user.profesorID = user.profesorID;
      });
    }


    console.log('User data after req:', this.user);
  }

}
