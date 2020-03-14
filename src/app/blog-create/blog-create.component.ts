import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  public blogTitle:string;
  public blogDescription:string;
  public blogCategory:string;
  public categories = ["Personal","Technology","Business","Entertainment"];
  public blogHtml:string;

  constructor(private blogHttpService:BlogHttpService,private router:Router,private _route:ActivatedRoute,public toastr: ToastrManager) { 
    
  }

  ngOnInit(): void {
  }

  public createBlog():any{
    let blogData = {
      title : this.blogTitle,
      description : this.blogDescription,
      blogBody : this.blogHtml,
      category : this.blogCategory
    }

    this.blogHttpService.createBlog(blogData).subscribe(
      data=>{
        console.log(data);
        console.log(data["message"]); 
        this.toastr.successToastr('Blog Posted Successfully', 'Success!');
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)
      },
      error=>{
        console.log("Something went Wrong");
        alert("somethig went Wrong"); 
      }
    )
  }

  
  
}
