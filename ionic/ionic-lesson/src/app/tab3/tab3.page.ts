import { Component } from '@angular/core';
import arr from './friends';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  friendsArr: any[] = arr;
  constructor() {}

}
