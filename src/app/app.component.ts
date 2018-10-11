import { Component, OnInit } from '@angular/core';
  /**
 * Constants for Days
 */
export enum Daylist {
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
}
/**
* Constants for Months
*/
export enum MonthsList {
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public days = true;
  public weeks: boolean;
  public months: boolean;
  public value: Date = new Date();
  public dateFormat: any;

  public evntData: any[] = [{
    ShortDescription: 'Tree desc',
    LocList: '01BN - 01 Berneslai Lifecycle-01',
    color: 'bg-pink'
  },
  {
    ShortDescription: 'Tree desc',
    LocList: '01BN - 01 Berneslai Lifecycle-01',
    color: 'bg-yellow'
  },
  {
    ShortDescription: 'Tree desc',
    LocList: '01BN - 01 Berneslai Lifecycle-01',
    // color: 'bg-lime'
  },
  {
    ShortDescription: 'Tree desc',
    LocList: '01BN - 01 Berneslai Lifecycle-01',
    color: 'bg-yellow'
  },
  {
    ShortDescription: 'Tree desc',
    LocList: '01BN - 01 Berneslai Lifecycle-01',
    color: 'bg-lime'
  },
  {
    ShortDescription: 'Tree desc',
    LocList: '01BN - 01 Berneslai Lifecycle-01',
    color: 'bg-yellow'
  },
  {
    ShortDescription: 'Tree desc',
    LocList: '01BN - 01 Berneslai Lifecycle-01',
    color: 'bg-lime'
  },
  ];
  constructor(
  ) { }

  ngOnInit() {
    this.dateFormat = this.headerDateDisplay(this.value.getDay() - 1, this.value.getMonth(), this.value.getFullYear());
  }


  EventNavigate(events) {
    switch (events) {
      case 'day': this.days = true; this.months = false; this.weeks = false; break;
      case 'month': this.months = true; this.days = false; this.weeks = false; break;
      case 'week': this.weeks = true; this.months = false; this.days = false; break;
    }
  }



  dateChange(data) {
    this.value = data;
    this.dateFormat = this.headerDateDisplay(this.value.getDay() - 1, this.value.getMonth(), this.value.getFullYear());
  }
  navigateToPrevDate() {
    this.value.setDate(this.value.getDate() - 1);
  }
  navigateToNextDate() {
    this.value.setDate(this.value.getDate() + 1);

  }
  private headerDateDisplay(d, m, y) {
    return `${Daylist[d]},${MonthsList[m]} ${m + 1}, ${y}`;
  }

}
