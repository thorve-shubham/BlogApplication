import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';

//for going back page its a service
import { Location } from '@angular/common';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
  providers : [Location]
})
export class ViewBlogComponent implements OnInit {

  currentBlog: any;

  constructor(private location:Location,private _route: ActivatedRoute, private router: Router,private blogHttpService:BlogHttpService,public toastr:ToastrManager) { }

  ngOnInit(): void {
    let blogId: string = this._route.snapshot.paramMap.get('blogId');

    this.blogHttpService.findBlog(blogId).subscribe(
      data=>{
        console.log("opened Sucessfully");
        this.currentBlog=data["data"];
      },
      error=>{
        console.log("Something went Wrong");
      }
    );
  }

  public deleteBlog(){
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(
      data=>{
        console.log(data);
        this.toastr.errorToastr('Blog Deleted Successfully', 'Alert!');
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1500)
      }
    )
  }

  public goBack():any{
    this.location.back();
  }  

}
