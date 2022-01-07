import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  check:any
  constructor(private ser:ProductService , private router:Router){}
  canActivate()
     {
      if (this.ser.isAdminLoggedIn()) 
      {
        return true
       
      }
     else{
       alert("Jada Hushyari Karra Kya")
   this.router.navigate(['/login'])
   return false
      

     }
    }
} 
