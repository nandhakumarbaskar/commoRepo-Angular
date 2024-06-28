import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  restUrl: string = 'http://localhost:7000/api/blog'
  httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbmRoYSIsImlhdCI6MTcxOTU2OTIxNSwiZXhwIjoxNzE5NTcyODE1fQ.0Mj8NzjuUgtafdA0gPicsUiX5SHVo5UtMU_r5u4hfHI'
  }) 


  constructor(private httpClient: HttpClient) { }
  getBlogs(){
    return this.httpClient.get(this.restUrl,{ headers: this.httpOptions }).pipe(retry(2), catchError(this.httpErrorHandler))
  }

  getBlogById(id: string){
    return this.httpClient.get(this.restUrl+"/"+id,{ headers: this.httpOptions }).pipe(retry(2), catchError(this.httpErrorHandler))
  }

  httpErrorHandler(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("Client side error "+error)
    }else{
      console.error("Server side error status"+error.status+ " message: "+error.message)
    }
    return throwError(()=>{
     error
    })

  }
}
