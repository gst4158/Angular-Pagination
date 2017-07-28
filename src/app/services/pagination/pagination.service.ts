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
    console.log(merged);
    return merged;
  }

  /**
  * Update pagination number
  */
  // control how many post per page
  updatePagination(pagenumber, maxsize) {
    console.log(pagenumber);
    this.config.itemsPerPage = pagenumber;
    this.config.maxSize = maxsize;
    return false;
  }

  // change pagination number
  onPageChange(number: number) {
    console.log('change to page', number);
    return number;
    //return this.config.currentPage = number;
  }


}
