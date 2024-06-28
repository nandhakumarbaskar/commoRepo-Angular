import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  ngOnInit(): void {
    this.logout()
    
  }
  constructor(private authService: AuthService, private router: Router){}
  logout(){
    this.authService.logout()
this.router.navigate(["/login"])
  }

}
