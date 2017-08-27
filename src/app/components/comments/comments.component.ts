// base
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'rxjs/Rx';
import 'rxjs/operator/finally';

// addons
import { PaginationInstance } from '../../../../node_modules/ngx-pagination/dist/ngx-pagination.module';
import { NgPipesModule } from 'ngx-pipes';
  // filtering example:
     // orderBy: 'email' <--- where 'email' is key name. To reverse order '-email'

// services
import { DataService } from '../../services/data/data.service';
import { PaginationService } from '../../services/pagination/pagination.service';
import { PostfilterService } from '../../services/postfilter/postfilter.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
})

export class CommentsComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private paginationService: PaginationService,
    private postfilterService: PostfilterService,
  ){}

  // Default Variables
  //===========================================//
  // comments data
  public posts: Post[];

  // pagination variables
  public config: PaginationInstance = this.paginationService.setConfig({
    itemsPerPage: 4,
    maxSize: 8,
  });

  // post filtering variables
  public filtering: any = this.postfilterService.setConfig({
    // orderBy: 'email',
    // filterBy: {
    //   keys: 'email',
    //   value: '.biz'
    // }
  });


  // Run on page start
  //===========================================//
  ngOnInit() {
      this.getPosts();
      console.log(this.filtering);
  }

  // Component Functions
  //===========================================//
  /**
  * Get jSON information
  */
  getPosts() {
    this.dataService.getComments()
      .finally(() => {
         //console.log('Post list:', this.posts);
      })
      .subscribe(
        (posts) => {
          this.posts = posts;
        },
        (error) => {
          this.handleError(error);
        }
      );
  }

  // Error Handling
  //===========================================//
  // prints a console log error on post get
  private handleError(error) {
      console.error('An error occurred', error);
      //this.showFilter = false;
      return error.message || error;
  }

}

export class Post {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public body: string
  ){ }
}
