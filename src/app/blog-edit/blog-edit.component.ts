import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BlogHttpService } from '../blog-http.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public blogId;
  public categories = ["Personal","Technology","Business","Entertainment"];

  constructor(private _route:ActivatedRoute,private router:Router,private blogHttpService:BlogHttpService,private toastr: ToastrManager) {
    console.log("Blog edit")
   }

  ngOnInit(): void {
    this.blogId = this._route.snapshot.paramMap.get('blogId');
    
    this.blogHttpService.findBlog(this.blogId).subscribe(
      data=>{
        console.log("Found Sucessfully",data["data"]);
        this.currentBlog=data["data"];
      },
      error=>{
        console.log("Something went Wrong");
      }
    );
  }

  public editBlog(){
    this.blogHttpService.editBlog(this.blogId,this.currentBlog).subscribe(
      data=>{
        console.log("edited successfully");
        this.toastr.successToastr('Blog Updated Successfully', 'Noted!');
        this.router.navigate(['/blog',this.blogId]);
      },
      error=>{
        console.log("Something went Wrong");
      }
    );
  }
}
