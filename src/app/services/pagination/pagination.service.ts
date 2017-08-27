import { Injectable } from '@angular/core';

@Injectable()
export class PaginationService {

  constructor(
  ){}

  // Default Variables
  //===========================================//
  public config: any = {
    id: 'custom-pagination',
    maxSize: 7,
    itemsPerPage: 10,
    currentPage: 1,
    previousLabel: 'Previous',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  // Service Functions
  //===========================================//

  /**
  * Init pag
  */
  setConfig(object: any = {}) {
    let merged = Object.assign({}, this.config, object);
    return merged;
  }

}
