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
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean {
      if (this.ser.isLoggedIn()
       ) {
       
        return true
      }
     else{
       
       this.router.navigate(['main']);
       return false
     }
    }
} 
