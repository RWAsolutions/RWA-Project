import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

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
  imports: [],
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

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  // ngOnInit(): void {
  //   this.http.get<User>('http://localhost:3000/student/', {
  // }

  ngAfterViewInit(): void {
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(jwt);

    console.log('Decoded JWT:', jwtPayload);

    const userId = jwtPayload.studentID;

    // Now you can make your HTTP request with the user ID
    // this.http.get<User>(`http://localhost:3000/students/${userId}`).subscribe(
    //   (response) => {
    //     // Handle response from server
    //     console.log('User data:', response);
    //   },
    //   (error) => {
    //     // Handle error
    //     console.error('Error fetching user data:', error);
    //   }
    // );

    this.http.get<any>(`http://localhost:3000/students/${userId}`, {
      headers: {
        'Authorization': 'Bearer ' + jwt,
      }
    }).subscribe(user => {

      console.log('User data inside get request:', user);
      this.user.firstName = user.studentName;
      this.user.lastName = user.studentSurname;
      this.user.dateOfBirth = user.dateOfBirth;
      this.user.address = user.street + ' ' + user.streetNumber;
      this.user.studentID = user.studentID;
      this.user.profesorID = user.profesorID;
    });

    console.log('User data after req:', this.user);
  }


  private decodeJWT(token: string): any {
    const payload = token.split('.')[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  }

}
