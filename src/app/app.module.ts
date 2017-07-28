// base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// addons
import { NgxPaginationModule } from 'ngx-pagination';

// components
import { ErrorComponent } from './components/error/error.component';
import { CommentsComponent } from './components/comments/comments.component';
import { PaginationControllerComponent } from './components/includes/pagination-controller/pagination-controller.component';
import { PaginationComponent } from './components/includes/pagination/pagination.component';

// services
import { DataService } from './services/data/data.service';
import { PaginationService } from './services/pagination/pagination.service';


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
    PaginationControllerComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgxPaginationModule,
    HttpModule
  ],
  providers: [DataService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
