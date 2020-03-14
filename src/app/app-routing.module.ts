import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'createBlog',component:BlogCreateComponent},
  {path:'blog/:blogId',component:ViewBlogComponent},
  {path:'edit/:blogId',component:BlogEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
