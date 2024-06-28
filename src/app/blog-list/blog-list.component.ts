import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: any
  ngOnInit(): void {
    this.getBlogs()
    
  }
  constructor(private blogService: BlogService){}

  getBlogs(){
    this.blogService.getBlogs().subscribe(data=>{
      this.blogs = data
    })
  }
  

}
