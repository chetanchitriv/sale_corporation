import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl= "http://4bf1-43-224-0-159.ngrok.io/api/addproduct"

  constructor( private http:HttpClient) { }



  
  getProduct():Observable<any>{
    return this.http.get("http://4bf1-43-224-0-159.ngrok.io/api/addproduct");
  }

  getcurerntproduct(id:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`)
  }


// login and signup start

  postlog(name:any ):Observable<any>{
    return this.http.post("http://4bf1-43-224-0-159.ngrok.io/api/login" , name  )
    // .pipe(
    //   tap(tokens => this.dologinuser(data, tokens)),
    //   mapTo(true),
    //   catchError(erro =>{
    //   return of(false)
    //   }));
    
  }
  getlog( ):Observable<any>{
    return this.http.get("http://4bf1-43-224-0-159.ngrok.io/api/login"   )
    
  }
  postsignup(name:any ){
    return this.http.post("http://4bf1-43-224-0-159.ngrok.io/api/signup" , name  )
  }
  getsignup( ):Observable<any>{
    return this.http.get("http://4bf1-43-224-0-159.ngrok.io/login/get")
    
  }
  settoken(token:any){
    localStorage.setItem("token",token)
  }
  isLoggedIn(){
   return !!localStorage.getItem("token")
  
  }
  setAdmin(role:any){
    localStorage.setItem("role",role)
  }
  isAdminLoggedIn(){
   return !!localStorage.getItem("role")
  
  }
// login and signup end

//  view users
getuser():Observable<any>{

  return this.http.get("http://4bf1-43-224-0-159.ngrok.io/api/viewusers")
  // .pipe(res)
}

}
