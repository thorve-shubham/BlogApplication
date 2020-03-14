import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      "blogId" : "1",
      "lastModified" : "2019-10-22T15:00:00.782Z",
      "created" : "2019-10-22T15:00:00.782Z",
      "tags" : [],
      "author" : "Shubham",
      "category" : "Technology",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : "<h2>this is technology blog</h2>",
      "description" : "this is tech blog description",
      "title" : "About Android 10 Launch"
    },
    {
      "blogId" : "2",
      "lastModified" : "2019-11-22T15:00:00.782Z",
      "created" : "2019-11-22T15:00:00.782Z",
      "tags" : ["UI/UX","Responsive Design"],
      "author" : "Sanket",
      "category" : "Design",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : "<p><u>this is Design blog<u><p>",
      "description" : "this is design blog description",
      "title" : "About Bootstrap 4 Launch"
    },
    {
      "blogId" : "3",
      "lastModified" : "2019-12-22T15:00:00.782Z",
      "created" : "2019-12-22T15:00:00.782Z",
      "tags" : [],
      "author" : "Pritam",
      "category" : "Development",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : "this is development blog",
      "description" : "this is development blog description",
      "title" : "About node 10 Launch"
    },
    {
      "blogId" : "4",
      "lastModified" : "2019-10-22T15:00:00.782Z",
      "created" : "2019-10-22T15:00:00.782Z",
      "tags" : [],
      "author" : "Revan Indral",
      "category" : "Language",
      "isPublished" : true,
      "views" : 0,
      "bodyHtml" : "this is Language blog",
      "description" : "this is Language blog description",
      "title" : "About Spanish Launch"
    }
    
  ]

  constructor() {
    console.log("Service Started")
   }

  getAllBlog():any{
    return this.allBlogs;
  }

  findBlog(blogId: string): any {
    for (let blog of this.allBlogs) {
      if (blog.blogId == blogId) {
        return blog;
      }
    }
  }
}
