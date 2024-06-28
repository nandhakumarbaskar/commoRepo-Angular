import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string
  password: string
  formData: FormGroup
  ngOnInit(): void {
    this.formData = new FormGroup({
      'username': new FormControl('nandha'),
      'password': new FormControl('nandha')
    })
    
  }
  constructor(private authSerice: AuthService, private router: Router){}

  submitForm(data: any){
    this.authSerice.login(data.username, data.password).subscribe(data=>{
      console.log("login component:", data)
      this.router.navigate(["/blog"])
    })

  }

}
