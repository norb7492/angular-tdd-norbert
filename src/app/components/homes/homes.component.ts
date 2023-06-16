import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {DataServiceService} from "../../services/data-service.service";

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  public valueToChange = 'first text';

  public homes$: Observable<any> = new Observable<any>;

  constructor(private dataService: DataServiceService) {
  }
  public ngOnInit(): void {

    this.homes$ = this.dataService.getHomes$();
  }

  public changeText(): void {
    this.valueToChange = 'second text';
  }
}
