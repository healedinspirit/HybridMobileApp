import { Injectable } from '@angular/core';
//import { Subject } from 'rxjs/Subject';
//import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class GlobalService {

  private logData = new BehaviorSubject<string>(null);
  logData$ = this.logData.asObservable();

  updateLogData(log: string) {
    this.logData.next(log);
  }

  addLogItem(log: string) {
    this.logData.next(log);
  }

}
