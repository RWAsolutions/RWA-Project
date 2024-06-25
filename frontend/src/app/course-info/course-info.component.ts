import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { CourseDto } from '../services/course/course.dto';
import { DataSignalService } from '../services/signal/data-signal.service';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [
    MatTabsModule,
    MatGridTile,
    MatGridList,
    MatCardModule,
  ],
  providers: [DataSignalService],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.scss'
})
export class CourseInfoComponent implements OnInit{
 

  course: CourseDto = {
    courseID: 0,
    courseName: '',
    description: 'If you get this you have an undefined course object',
    ECTS: 0,
    semesterOrdinalNumber: 0
  }

  data;
    
  constructor(
    private dataSignalService: DataSignalService,
  ){
    this.data = dataSignalService.getData()
    console.log('This is the data that we are sending through signals: ', this.data);
    
  }
  
  ngOnInit() {
    
  }



}
