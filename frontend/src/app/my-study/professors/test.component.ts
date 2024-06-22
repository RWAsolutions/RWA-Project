import { Component } from '@angular/core';
import {TestService} from "./test.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  profesors: any[] = [];

  constructor(private professorService: TestService) { }

  ngOnInit(): void {
    this.fetchProfessors();
  }

  fetchProfessors() {
    this.professorService.getProfessors().subscribe(
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
    return `${frstLetterInName}${lastName}@uni.prof.hr`;
  }

  getProfessorFullName(professor: any): string{
    const frstName = professor.profesorName;
    const lastName = professor.profesorSurname;
    return `${frstName} ${lastName}`;
  }

}
