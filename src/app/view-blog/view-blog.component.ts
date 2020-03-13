import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  currentBlog: any;

  constructor(private _route: ActivatedRoute, private router: Router,private blogService:BlogService) { }

  ngOnInit(): void {
    let blogId: string = this._route.snapshot.paramMap.get('blogId');

    this.currentBlog=this.blogService.findBlog(blogId);
  }

  

}
