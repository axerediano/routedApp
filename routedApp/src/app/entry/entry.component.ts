import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private dataStore: SharedService) { }

  ngOnInit() {
  }

  onSubmit(nameForm){
    this.dataStore.addNewStud(nameForm.value.num, nameForm.value.fname, nameForm.value.lname, nameForm.value.prog, nameForm.value.yr)
    nameForm.reset();
  }

}
