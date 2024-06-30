import { Injectable, signal } from "@angular/core";
import { CourseDto } from "../course/course.dto";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CourseStorageService {

   
    private selectedCourse = new BehaviorSubject<CourseDto | null>(null)


    getSelectedCourse() {
        return this.selectedCourse.asObservable()
    }

    setSelectedCourse(course: CourseDto) {
        this.selectedCourse.next(course)
        // console.log(this.selectedCourse);
    }


}