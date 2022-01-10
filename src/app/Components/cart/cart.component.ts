import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   public cartList:any =[];
   public cartitem:any=[]
   public grandTotal : number = 0

   
  constructor(private cart:CartService, private ser:ProductService, public _sanitizer: DomSanitizer) { }
 


  ngOnInit(): void {
    // this.cart.getProductList().subscribe((res:any)=>{
    //   console.log(res)
    //   this.cartList=res;
    //   this.grandTotal = this.cart.getTotalPrice()
    // })
    
    this. getacartitems()
    this.get()
  
    }
    get(){
      //  var token = localStorage.getItem("token")
      this.cart.getProductList().subscribe((res:any)=>{

        console.log(res)
        this.cartList=res;
        this.grandTotal = this.cart.getTotalPrice()
      })
  }

  getacartitems(){
    this.cart.getcartitem().subscribe((res:any)=>{
            this.cartitem=res
            console.log(res)
    },
    (err:any)=>{

    })
    
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

  remove(id:any){
  
    console.log(id)
   this.cart.deletcartitem(id).subscribe((res:any)=>{
     console.log(res)
   })
  }
  emptycart(){
    this.cart.removeAllItem();
  }
}


