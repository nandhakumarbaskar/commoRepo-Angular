import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserloggedIn: boolean

  constructor(private router: Router) { }

  login(username: string, password: string){
    this.isUserloggedIn = (username == 'nandha' && password == 'nandha')
    localStorage.setItem("isUserloggedIn", (this.isUserloggedIn) ? 'true' : 'false')
   return of(this.isUserloggedIn).pipe(delay(2000),tap(data=>{
      console.log("Service login: ", data)
       data
    }))

  }

  logout(){
    this.isUserloggedIn = false
    localStorage.removeItem("isUserloggedIn")
  }

  checkLogin(url: string){
    if(localStorage.getItem("isUserloggedIn") == 'true'){
      if(url == '/login'){
        return this.router.navigate(["/blog"])
      }else{
return true
      }
    }else{
        return this.router.navigate(["/login"])
    }

  }
}
