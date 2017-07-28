// base
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-pagination-controller',
  templateUrl: './pagination-controller.component.html',
})
export class PaginationControllerComponent {
    @Input() setConfig: {itemsPerPage, maxSize};

    // change pagination number
    updatePagination(itemsPerPage: number, maxSize: number) {
      console.log('test');
      this.setConfig.itemsPerPage = itemsPerPage;
      this.setConfig.maxSize = maxSize;
      return false;
    }
}
