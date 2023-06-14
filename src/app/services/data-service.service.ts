import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  getHomes$(): Observable<any> {
    return of([]);
  }
}
