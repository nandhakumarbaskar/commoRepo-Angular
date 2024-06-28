import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blog: any
  id: string
  ngOnInit(): void {
    this.getBlogById()
    
  }
  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router){}

  getBlogById(){
    this.id = this.route.snapshot.paramMap.get("id") || ''
    this.blogService.getBlogById(this.id).subscribe(data=>{
      this.blog= data
    })

  }

  goToList(){
    this.router.navigate(["/blog"])

  }
  

}
