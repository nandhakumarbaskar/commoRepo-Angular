import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard } from './auth.guard';
const routes: Routes = [
  { path: "blog", component: BlogListComponent, canActivate:[authGuard] },
  { path: "blog/:id", component: BlogComponent, canActivate:[authGuard]},
  { path: "login", component: LoginComponent},
  { path: "logout", component: LogoutComponent}
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
