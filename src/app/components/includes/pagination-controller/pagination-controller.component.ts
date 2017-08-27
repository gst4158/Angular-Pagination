// base
import { Component, Input, } from '@angular/core';

@Component({
  selector: 'app-pagination-controller',
  templateUrl: './pagination-controller.component.html',
})
export class PaginationControllerComponent {
    @Input() setConfig: {};
}
