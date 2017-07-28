// base
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
    @Input() setConfig: {currentPage};

    // change pagination number
    onPageChange(number: number) {
      this.setConfig.currentPage = number;
    }
}
