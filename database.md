# Database

## Entities
- City
- Course
- Faculty
- Filter
- Notification
- Profesor
- profesor_course
- Semester
- Student
- student_course
- Study
- Test
- User
- user_notification

## Atributes

#### City
- <ins>postNumber</ins>
- cityName

#### Course
- <ins>courseID</ins>
- courseName
- ECTS
- description
- *semesterID*

#### Faculty
- <ins>facultyID</ins>
- facultyName
- street
- streetNumber
- contactNumber
- contactMail
- *cityID*

#### Filter
- <ins>filterID</ins>
- filterName
- filterDescription

#### Notification
- <ins>notificationID</ins>
- title
- content
- *courseID*

#### Profesor
- <ins>profesorID</ins>
- profesorName
- profesorSurname
- title
- dateOfBirth
- gender
- street
- streetNumber
- *cityID*

#### profesor_course
- *profesorID*
- *courseID*

#### Semester
- <ins>semesterID</ins>
- semesterOrdinalNumber
- *studyID*

#### Student
- <ins>studentID</ins>
- studentName
- studentSurname
- dateOfBirth
- gender
- street
- streetNumber
- *cityID*

#### student_course
- dateOfEnrollment
- *studentID*
- *courseID*

#### Study
- <ins>studyID</ins>
- studyName
- type (strucni/sveucilisni)
- firstDegree
- secondDegree
- *facultyID*






#### Test
- <ins>testID</ins>
- grade
- *courseID*

#### User
- <ins>userID</ins>
- email
- password
- role
- *studentID*
- *profesorID*

#### user_notification
- *userID*
- *notificationID*
- isRead

## Relations

![Relations diagram](relations-diagram.jpg)

