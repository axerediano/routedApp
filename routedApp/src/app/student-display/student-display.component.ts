import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {

  studCollection: Array<object>;
  constructor(private dataStore: SharedService) { }

  ngOnInit() {
    this.studCollection = this.dataStore.getStud();
  }

}
