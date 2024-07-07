import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseDto } from "../course/course.dto";
import { Observable, map } from "rxjs";
import { FilterDto } from "./filter.dto";
import sortData from 'lodash';

interface InfoDto {
  courseID: number;
  semester: {
    semesterID: number;
    semesterOrdinalNumber: number;
  }
}


@Injectable({
  providedIn: 'root'
})
export class FilterService {



  constructor(private http: HttpClient) { }



  getFilters(): Observable<FilterDto[]> {
    return this.http.get<any[]>('http://localhost:3000/filter');

  }

  activateFilter(courses: CourseDto[], id: { studentID: number, profesorID: number }, selectedFilter: FilterDto): Observable<CourseDto[]> {
    let type: 'student' | 'profesor' = 'student'
    let userID: number = id.studentID

    if (id.studentID === null) {
      userID = id.profesorID
      type = 'profesor'
    }

    return this.http.get<InfoDto[]>(`http://localhost:3000/courses/${userID}/course-semester-info?type=${type}`).pipe(
      map((info: InfoDto[]) => {
        // console.log('Info received:', info);
        return this.sortCoursesBySemester(courses, info, selectedFilter);
      })
    );


  }

  sortCoursesBySemester(courses: CourseDto[], info: InfoDto[], selectedFilter: FilterDto): CourseDto[] {

    const infoMap = new Map<number, number>()

    info.forEach(item => {
      infoMap.set(item.courseID, item.semester.semesterOrdinalNumber)
    })

    //* attaching the semester ordinal number for each course
    courses.forEach(course => {
      return course.semesterOrdinalNumber = infoMap.get(course.courseID) || 0
    })

    const sortedCourses = sortData.sortBy(courses, course => {
      const sortKey = course.semesterOrdinalNumber || 0
      return selectedFilter.filterID === 1 ? sortKey : -sortKey
    })

    console.log('These are the sorted courses:', sortedCourses);


    return sortedCourses
  }
}
