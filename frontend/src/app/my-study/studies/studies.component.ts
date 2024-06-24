import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NgForOf} from "@angular/common";
import {get} from "jquery";

@Component({
  selector: 'app-studies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent {

  private apiUrl = 'http://localhost:3000';
  studies: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.fetchStudies();
  }

  getStudies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/study`);
  }

  fetchStudies() {
    this.getStudies().subscribe(
      (data) => {
        this.studies = data;
        //console.log(data);
      },
      (error) => {
        console.error('Error fetching studies', error);
      }
    );
  }

  getStudyName(studies: any): string{
    const studyName = studies.studyName;

    return `Naziv studija:   ${studyName}`;
  }

  protected readonly get = get;
}
