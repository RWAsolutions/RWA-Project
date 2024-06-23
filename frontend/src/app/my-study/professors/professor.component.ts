import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './professor.component.html',
  styleUrl: './professor.component.scss'
})
export class ProfessorComponent {

  private apiUrl = 'http://localhost:3000';
  profesors: any[] = [];

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProfessors();
  }

  getProfessors(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/profesors`);
  }
  fetchProfessors() {
    this.getProfessors().subscribe(
      (data) => {
        this.profesors = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching professors', error);
      }
    );
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
