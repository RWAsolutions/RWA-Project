# Database

## Entities
- City
- Faculty
- Semester
- Study (studij "samo dragi Bog zna ovo na engleski...God bless google translate...")
- Course
- Test
- Student
- Profesor
- Notification
- profesor_course
- student_course

---

## Atributes

#### City
- <ins>postNumber</ins>
- cityName

#### Faculty
- <ins>facultyID</ins>
- facultyName
- street
- streetNumber
- contactNumber
- contactMail

#### Semester
- <ins>semesterID</ins>
- semesterOrdinalNumber

#### Study
- <ins>studyID</ins>
- studyName
- type (strucni/sveucilisni)
- firstDegree
- secondDegree

#### Course
- <ins>courseID</ins>
- courseName
- ECTS
- description

#### Test
- <ins>testID</ins>
- grade

#### Student
- <ins>studentID</ins>
- studentName
- studentSurname
- dateOfBirth
- gender
- street
- streetNumber

#### Profesor
- <ins>profesorID</ins>
- profesorName
- profesorSurname
- title
- dateOfBirth
- gender
- street
- streetNumber

#### Notification
- <ins>notificationID</ins>
- title
- content
- profesorID (FK ne zaboraviti!)

#### profesor_course
.
.
.

#### student_course
.
.
.

---

## Relations

![Relations diagram](relations-diagram.jpg)

