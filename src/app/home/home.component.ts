import { Component, OnInit } from '@angular/core';
//import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private blogHttpService:BlogHttpService) { }

  allBlogs:any;

  ngOnInit(): void {
    this.blogHttpService.getAllBlog().subscribe(
      data=>{
        console.log("data received Successfully");
        this.allBlogs=data["data"];
      },
      error=>{
        console.log("Something went Wrong");
       
      }
    );
  }

}
