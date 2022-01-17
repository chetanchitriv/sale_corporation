import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
   productlist:any =[]
   public grandTotal : number = 0
   addtocartid:any
   obj:any
  

   checkarray:any=[]

   
  constructor(private cart:CartService, private ser:ProductService, public _sanitizer: DomSanitizer, public route:Router) { }
 


  ngOnInit(): void {
    
    this.getproduct()
  
    }
  
  getproduct(){

    this.cart.getcartitem().subscribe((res:any)=>{
    this.obj=res
      this.addtocartid=res.product      
    },
    (err:any)=>{

    })


    this.ser.getProduct().subscribe((res)=>{
      this.productlist=res;
      console.log(this.productlist)
      res.forEach((element:any)=> {

        for(let x in this.addtocartid){
          console.log(x);
       if(element._id == this.addtocartid[x] ){
        
        this.grandTotal  +=  Number(element.price)
            
               this.checkarray.push(element)
               console.log( this.checkarray)
              
       }else{
         console.log("nahi hua ");
         
       }} 
    });
    (err:any)=>{
  
    }
  })

  return this.checkarray;
 
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

  remove(item:any){
    let payload = {
      productId: item._id,
    };
    console.log(item)
    this.checkarray.map((a:any,index:any)=>{
      if(item._id == a._id){
        this.checkarray.splice(index,1)
      }
    })
   this.cart.deletcartitem(payload).subscribe((res:any)=>{
     console.log(res)
    //  alert("item removed succefully")
    //  window.location.reload()
    //  this.getproduct()
   })
  }

  emptycart(id:any){
    let payload = {
      cartId: id,
    };
    console.log(payload);
    
    this.cart.removeAllItem(payload).subscribe((res:any)=>{
  
  this.checkarray=[]
    });

  }
  
}
 

