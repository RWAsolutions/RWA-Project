import { Injectable, signal } from "@angular/core";
import { CourseDto } from "../course/course.dto";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CourseSignalService {

    private course: BehaviorSubject<CourseDto>

    constructor(){
        this.course = new BehaviorSubject<CourseDto>({
            courseID: 0,
            courseName: '',
            description: '',
            ECTS: 0,
            semesterOrdinalNumber: 0
        })
    }

    setData(update: CourseDto): void {
        this.course.next(update)
    }

    getData(): BehaviorSubject<CourseDto> {
        return this.course
    }
}