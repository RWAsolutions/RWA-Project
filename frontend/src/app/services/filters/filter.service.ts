import { Injectable } from "@angular/core";
import { Filter } from "./filter.model";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { CourseDto } from "../../courses/courseDB.model";

@Injectable()
export class FilterService {


    filters: Filter[] = [
      { id: 1, filterCondition: "Semester (ASC)" },
      { id: 1, filterCondition: "Semester (DESC)" },
    ]

    constructor(private http: HttpClient, private cookieService: CookieService){}

    getFilters(): Filter[] {
        return this.filters
    }

    activateFilter(courses: CourseDto[]) {
        
        const courseIDs = courses.map(course => course.courseID)

        console.log('available course ids: ', courseIDs);
        

        // try {
        //     this.http.get<any>('http://localhost:3000/courses/id/semester')
        // } catch (error) {
            
        // }
    }
}