import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'


//importing observables
// import { Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';



@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  baseUrl : string = "https://blogapp.edwisor.com/api/v1/blogs/";
  authToken : string = "MzA1NmY1MjlkNjA3NzEwNTBmYjBjYTgwNTA4MDgxMzkyYjdjODliZTEzYzhlZDRjODA2ZWFhYzc0YjI1N2I3ZTcyMWVlN2QyZjBlZGY4MGI4YWU1ZGE2ZTI5N2E1YTU4ODlmNWMyODc3ZTU0MzQ1Y2RiZDM1NTI4YTFhYzkzODRhMQ==";
  allBlogs:any;
  currentBlog:any;

  constructor(private _http:HttpClient) {
    console.log("Blog http Service started");
  }

  getAllBlog():any{
    this.allBlogs = this._http.get(this.baseUrl+"all?authToken="+this.authToken);
    console.log(this.allBlogs);
    return this.allBlogs;
  }

  findBlog(blogId: string): any {
    this.currentBlog = this._http.get(this.baseUrl+"view/"+ blogId+"?authToken="+this.authToken);
    return this.currentBlog;
  }

  createBlog(blogData):any{
    return this._http.post(this.baseUrl+"create/"+"?authToken="+this.authToken,blogData);
  }

  deleteBlog(blogId):any{
    return this._http.post(this.baseUrl+blogId+"/delete?authToken="+this.authToken,blogId);
  }

  editBlog(blogId,newBlogData){
    return this._http.put(this.baseUrl+blogId+"/edit?authToken="+this.authToken,newBlogData);
  }
}
