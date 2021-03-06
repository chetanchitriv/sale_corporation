import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public totalitem:any=0
  myaccount:boolean=true
  logout:boolean=false
  username:any;
  term:any

  constructor(private cart:CartService , private ser:ProductService) { }

  ngOnInit(): void {
    this.getcart()
    this.check()
    }

    getcart(){
      this.cart.getcartitem().subscribe((res:any)=>{
        this.totalitem=res.product.length;
        // console.log(res )
    })
      
  }
  check(){
    if(this.ser.isLoggedIn()){
      
    this.myaccount=false
    this.logout=true
    this.username=localStorage.getItem("user")

    }else{
      this.myaccount=true
      this.logout=false
  
    }

  }
  out(){
    localStorage.removeItem("token")
     localStorage.removeItem("role")
    this.myaccount=true
    this.logout=false
  }
  
}


