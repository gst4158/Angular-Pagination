// base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// addons
import { NgxPaginationModule } from 'ngx-pagination';
import { NgPipesModule } from 'ngx-pipes';

// components
import { ErrorComponent } from './components/error/error.component';
import { CommentsComponent } from './components/comments/comments.component';
  // optional components
  import { PaginationControllerComponent } from './components/includes/pagination-controller/pagination-controller.component';
  import { PaginationComponent } from './components/includes/pagination/pagination.component';
  import { filterComponent } from './components/includes/filter-controller/filter-controller.component';

// services
import { DataService } from './services/data/data.service';
import { PaginationService } from './services/pagination/pagination.service';
import { PostfilterService } from './services/postfilter/postfilter.service';

// create page routes
const appRoutes: Routes = [
    // base route
    { path: '', component: CommentsComponent },

    // 404 router
    //{ path: '404', component: PageNotFoundComponent },
    { path: '**', component: ErrorComponent /*redirectTo: '/404'*/ }
];

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    ErrorComponent,

    // optional components
    PaginationControllerComponent,
    PaginationComponent,
    filterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,

    // addons
    NgxPaginationModule,
    NgPipesModule,
  ],
  providers: [DataService, PaginationService, PostfilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
