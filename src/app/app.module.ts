import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { BlogEditComponent } from './blog-edit/blog-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogCreateComponent,
    ViewBlogComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
