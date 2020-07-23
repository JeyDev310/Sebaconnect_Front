import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * @description
 * @class
 */
@Injectable()
export class AppService {

  onCurrentProject: BehaviorSubject<any>;
  constructor(
  ) {
    this.onCurrentProject = new BehaviorSubject([]);
  }

}
