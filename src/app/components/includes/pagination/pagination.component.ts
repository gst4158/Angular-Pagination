// base
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
    @Input() setConfig: {currentPage};

    onPageChange(number: number) {
      return this.setConfig.currentPage = number;
    }
}
