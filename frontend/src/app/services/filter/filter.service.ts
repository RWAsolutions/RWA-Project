import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CourseDto } from "../../courses/course.dto";
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


@Injectable()
export class FilterService {


   
    constructor(private http: HttpClient){}

 

    getFilters(): Observable<FilterDto[]> {
        return this.http.get<any[]>('http://localhost:3000/filter');
        
    }

activateFilter(courses: CourseDto[], id: number, selectedFilter: FilterDto): Observable<CourseDto[]> {
    
        return this.http.get<InfoDto[]>(`http://localhost:3000/courses/${id}/course-semester-info`).pipe(
            map((info: InfoDto[]) => {
                // console.log('Info received:', info);
                return this.sortCoursesBySemester(courses, info, selectedFilter);
            })
        );
        
        
    }

    sortCoursesBySemester(courses: CourseDto[], info: InfoDto[], selectedFilter: FilterDto): CourseDto[] {

        const infoMap = new Map<number,number>()
        info.forEach(item => {
            infoMap.set(item.courseID,item.semester.semesterOrdinalNumber)
        })

        const sortedCourses = sortData.sortBy(courses,  course => {
            const sortKey = infoMap.get(course.courseID) || 0
            return selectedFilter.filterID === 1 ? sortKey : -sortKey
        })
        
        
        return sortedCourses
    }
}