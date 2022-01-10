import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  productlist:any=[]
  index:any
  isImageLoading: boolean |any;
  apiUrl=environment.apiendpoint

  constructor(private ser:ProductService, private cart:CartService, private router:Router,  public _sanitizer: DomSanitizer,private http:HttpClient) { }

  ngOnInit(): void {

    this.getproduct()
  //  var token = localStorage.getItem("token")
  //  console.log(token)
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
  //  console.log(btoa( binary ))
   return window.btoa( binary );
  
 }



getproduct(){

  this.ser.getProduct().subscribe((res)=>{
    this.productlist=res;
    console.log(res)
    this.productlist.forEach((a:any)=>{
      Object.assign(a,{quantity:1,Toatal:a.price})

    })
  });
  (err:any)=>{

  }
}

addCart(id:any){
  let payload = {
    productId: id,
   
  };
  console.log(payload)
//  this.index ={ "shank" :i} 
//   console.log(this.index)
  // var token = localStorage.getItem("token")
//  const  token:any = localStorage.getItem("token")
//  console.log(token)
// console.log(id)
  // this.cart.addToCart(this.index).subscribe((res:any)=>{
  //   console.log(res)
  // })
  // .subscribe((res:any)=>{
  //   console.log(res)
  this.http.post(this.apiUrl+`/api/addtocart`,payload ).subscribe(()=>{
    // this.getproduct()
  })
 
  this.router.navigate(['/ecom/cart'])  

}

}
