import { Component } from '@angular/core';
import {MyStudyService} from "../services/my-study/my-study.service";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

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

  constructor(private cookieService: CookieService, private myStudyService: MyStudyService, private router: Router) {
  }

  ngOnInit() {
    this.fetchFaculty()
      .then((facultyId) => {
        if (facultyId) {
          this.fetchFacultyByID();
        } else {
          // console.log("Faculty not found!");
          window.location.href = "http://localhost:4200/students";
        }
      })
      .catch((error) => {
        // console.log("Error fetching faculty:", error);
        window.location.href = "http://localhost:4200/students";
      });
  }

  fetchFaculty(): Promise<any> {
    return new Promise((resolve, reject) => {
      const jwt = this.cookieService.get('jwt');
      const jwtPayload = this.decodeJWT(jwt);
      this.id = jwtPayload.studentID;
      // console.log('Student ID:', this.id);

      this.myStudyService.getFacultyByStudentID(this.id).subscribe(
        (data) => {
          this.facultyID = data.facultyId;
          this.backupID = this.facultyID;
          resolve(this.facultyID);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  fetchFacultyByID(): any {
    // console.log('Fetching faculty by ID:', this.backupID);
    this.myStudyService.getFacultyByID(this.backupID).subscribe(
      (data) => {
        // console.log('Faculty Data:', data);
        this.faculty = data;
        this.redirectToFaculty();
      },
      (error) => {
        // console.log('Error fetching faculty by ID:', error);
        window.location.href = "http://localhost:4200/students";
      }
    );
  }

  getFaculty(): any {
    if (this.faculty === undefined) {
      return null;
    } else {
      return this.faculty.facultyName ? this.faculty.facultyName.trim() : null;
    }
  }

  redirectToFaculty(): any{
    const facultyName = this.getFaculty();
    // console.log("Faculty name: ", facultyName);

    if (facultyName === null) {
      // console.log("No faculty name found.");
      window.location.href = "http://localohost:4200/students"
      return;
    }

    switch (facultyName){
      case "Department of Tourism and Communication Sciences": {
        window.location.href = "https://tikz.unizd.hr/about-the-department";
        break;
      }
      case "Faculty of Electrical Engineering and Computing": {
        window.location.href = "https://www.fer.unizg.hr/en#";
        break;
      }
      case "Faculty of Mechanical Engineering and Naval Architecture": {
        window.location.href = "https://www.fsb.unizg.hr/index.php?fsbonline&international_exchange&home";
        break;
      }
      case "Faculty of Economics and Business": {
        window.location.href = "https://www.efzg.unizg.hr/en";
        break;
      }
      case "Faculty of Law": {
        window.location.href = "https://www.pravo.unizg.hr/en/";
        break;
      }
      case "Faculty of Humanities and Social Sciences": {
        window.location.href = "https://web2020.ffzg.unizg.hr/international/about-fhss/";
        break;
      }
      case "Faculty of Economics": {
        window.location.href = "https://www.efzg.unizg.hr/en";
        break;
      }
      case "Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture": {
        window.location.href = "https://www.efzg.unizg.hr/en/";
        break;
      }
      case "Faculty of Medicine": {
        window.location.href = "https://medical-studies-in-english.com/";
        break;
      }
      case "Faculty of Engineering":{
        window.location.href = "http://www.riteh.uniri.hr/en/about/";
        break;
      }
      case "Faculty of Electrical Engineering, Computer Science and Information Technology": {
        window.location.href = "https://www.ferit.unios.hr/2021/about-ferit/general";
        break;
      }
      case "Faculty of Agriculture": {
        window.location.href = "https://www.agr.unizg.hr/en/group/285/About+Us";
        break;
      }
      case "Department of Economics": {
        window.location.href = "https://www.efzg.unizg.hr/en";
        break;
      }
      case "Department of Teacher Education Studies": {
        window.location.href = "https://nstgospic.unizd.hr/en/home/pgrid/18366/pageid/1";
        break;
      }
      case  "Department of English": {
        window.location.href = "https://anglist.ffzg.unizg.hr/?lang=en";
        break;
      }
      case "Department of Maritime Studies": {
        window.location.href = "https://www.pfri.uniri.hr/web/en/index.php";
        break;
      }
      case "Department of Electrical Engineering and Computing": {
        window.location.href = "https://www.fer.unizg.hr/en";
        break;
      }
      case "Department of Aquaculture": {
        window.location.href = "https://www.unizd.hr/cimmar/involved-departments/department-of-ecology-agriculture-aquaculture";
        break;
      }
      case "Department of Economics and Business Economics": {
        window.location.href = "https://www.efzg.unizg.hr/en";
        break;
      }
      case "Department of Art and Restoration": {
        window.location.href = "https://www.ied.edu/school-of-art-and-restoration";
        break;
      }

    }

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
