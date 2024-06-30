import { Component } from '@angular/core';
import {MyStudyService} from "../services/my-study/my-study.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-my-study',
  standalone: true,
  imports: [],
  templateUrl: './my-study.component.html',
  styleUrl: './my-study.component.scss',
  providers: [CookieService, MyStudyService]
})
export class MyStudyComponent {

  facultyID: any;

  faculty: any;

  id: any;
  backupID: any;

  constructor(private cookieService: CookieService, private myStudyService: MyStudyService) {
  }

  ngOnInit(){
    this.fetchFaculty();
  }

  fetchFaculty(){
    const jwt = this.cookieService.get('jwt');
    const jwtPayload = this.decodeJWT(jwt);
    this.id = jwtPayload.studentID;
    console.log(this.id)
    this.myStudyService.getFacultyByStudentID(this.id).subscribe(
      (data) => {
        this.facultyID = data.facultyId; 
        this.backupID = this.facultyID;

        this.fetchFacultyByID();
      }
    )
  }

  fetchFacultyByID(): any{
    console.log(this.myStudyService.getFacultyByID(this.backupID));
    console.log("ID in getFacultyByID:", this.backupID);
    this.myStudyService.getFacultyByID(this.backupID).subscribe(
      (data) => {
        console.log(data);
        this.faculty = data;
      }
    );
  }

  getFaculty(): string{
    return `This is faculties name: ${this.faculty}`
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
