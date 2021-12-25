import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }



  // sellproduct(data:any):Observable<any>{
  //   return this.http.post("http://localhost:3000/products",data)
  // }
  getProduct():Observable<any>{
    return this.http.get(" http://933c-150-129-202-90.ngrok.io/image");
  }
  postlog(name:any ):Observable<any>{
    return this.http.post("http://b235-43-224-0-201.ngrok.io/login" , name  )
    // .pipe(
    //   tap(tokens => this.dologinuser(data, tokens)),
    //   mapTo(true),
    //   catchError(erro =>{
    //   return of(false)
    //   }));
    
  }
  getlog( ):Observable<any>{
    return this.http.get("http://b235-43-224-0-201.ngrok.io/login/get"   )
    
  }


 
}
