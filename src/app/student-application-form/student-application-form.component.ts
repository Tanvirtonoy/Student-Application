import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-application-form.component.html',
  styleUrls: ['./student-application-form.component.css']
})
export class StudentApplicationFormComponent {

  levels = ['Play', 'Primary', 'Secondary', 'Higher Secondary'];
  schools = ['Aga Khan School', 'International School Dhaka', 'Oxford International School',
              'Ideal School and College', 'Monipur High School', 'Milestone School'];
  model = new Student('');
  constructor() { }


}
