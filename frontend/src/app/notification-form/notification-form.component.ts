import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CourseDto } from '../services/course/course.dto';
import { CourseListService } from '../services/cache/course-list.service';
import { CookieService } from 'ngx-cookie-service';
import { decodeJWT } from '../helpers/decode-jwt';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-notification-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatCardModule],
  templateUrl: './notification-form.component.html',
  styleUrl: './notification-form.component.scss'
})
export class NotificationFormComponent implements OnInit {

  courses: CourseDto[] = [];
  profesorID = -1;

  notificationForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    course: new FormControl('')
  });

  constructor(
    private courseListService: CourseListService,
    private cookieService: CookieService,
    private http: HttpClient,
  ) { }

  onSubmit() {
    console.log(this.notificationForm.value);
    this.http.post('http://localhost:3000/notifications',
      {
        title: this.notificationForm.value.title,
        content: this.notificationForm.value.content,
        profesorID: this.profesorID,
        courseID: this.notificationForm.value.course
      }
    ).subscribe();
  }

  ngOnInit(): void {
    this.courses = this.courseListService.getData();
    let jwtPayload = decodeJWT(this.cookieService.get('jwt'));
    this.profesorID = jwtPayload.profesorID;
  }

}
