import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productlist:any=[]
  isImageLoading: boolean |any;

  constructor(private ser:ProductService, private cart:CartService,private router:Router,  public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getproduct()
   
  }


  sanitize(image:any){
     
    return this._sanitizer.bypassSecurityTrustUrl(image);
  }

 _arrayBufferToBase64( buffer:any ) {
   var binary = '';
   var bytes = new Uint8Array( buffer );
   var len = bytes.byteLength;
   for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
   }
   console.log(btoa( binary ))
   return window.btoa( binary );
  
 }



getproduct(){

  this.ser.getProduct().subscribe((res)=>{
    this.productlist=res;
    this.productlist.forEach((a:any)=>{
      Object.assign(a,{quantity:1,Toatal:a.price})

    })
  });
  (err:any)=>{

  }
}
addCart(product:any){
  this.cart.addToCart(product)
  this.router.navigate(['/ecom/cart'])
   
 
}
}