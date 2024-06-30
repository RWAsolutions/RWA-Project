import { IsInt, IsNotEmpty } from 'class-validator'


export class CourseInfoDto {

    courseID: number = 0

    semesterID: number = 0

    studyID: number = 0

    studyName: string = ''

    dateOfEnrollment: Date = new Date()

}