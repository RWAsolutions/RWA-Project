import { Injectable } from "@angular/core";
import { CourseDto } from "../course/course.dto";

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  courses: CourseDto[] = [];

  constructor() { }

  getData(): CourseDto[] {
    return this.courses;
  }

  setData(courses: CourseDto[]): void {
    this.courses = courses;
  }

}
