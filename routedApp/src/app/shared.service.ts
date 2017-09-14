import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  shStudCollection: Array<object> = [];
  studObj: {studNum: number, firstName: string, lastName: string; prog: string; year: number};

  constructor() { }

  addNewStud(shNum: number, shFName: string, shLName: string, shProg: string, shYear: number){
    this.studObj = {
      studNum: shNum,
      firstName: shFName,
      lastName: shLName,
      prog: shProg,
      year: shYear
    }
    this.shStudCollection.push(this.studObj);
  }

  getStud(){
    return this.shStudCollection;
  }

}
