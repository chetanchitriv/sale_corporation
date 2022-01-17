import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

function _window() : any {
  return window;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  get nativeWindow() : any {
    return _window();
 }

  apiUrl=environment.apiendpoint

  constructor( private http:HttpClient) { }



  
  getProduct():Observable<any>{
    return this.http.get(this.apiUrl+`/api/addproduct`);
  }

  getcurerntproduct(id:any):Observable<any>{
    return this.http.get(this.apiUrl+`/api/addproduct/`+id)
  }


// login and signup start

  postlog(name:any ):Observable<any>{
    return this.http.post(this.apiUrl +`/api/login` , name  )
    // .pipe(
    //   tap(tokens => this.dologinuser(data, tokens)),
    //   mapTo(true),
    //   catchError(erro =>{
    //   return of(false)
    //   }));
    
  }
  getlog( ):Observable<any>{
    return this.http.get( this.apiUrl +`/api/login`  )
    
  }
  postsignup(name:any ){
    return this.http.post(this.apiUrl+ `/api/signup `, name  )
  }
  getsignup( ):Observable<any>{
    return this.http.get(this.apiUrl+`/login/get`)
    
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

  return this.http.get(this.apiUrl+ `/api/viewusers`)
  // .pipe(res)
}

}
