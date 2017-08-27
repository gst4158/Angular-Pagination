import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter-controller.component.html',
})
export class filterComponent implements OnInit {
  @Input() filterArray: any;

  constructor() { }

  ngOnInit() {
      console.log(this.filterArray);
  }

}
