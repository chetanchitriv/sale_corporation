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
   rzp1:any;
   username:any
   options:any
   selectInput:any=1

   checkarray:any=[]
   viewuser:any
  user:any=[]
   
  constructor(private cart:CartService, private ser:ProductService, public _sanitizer: DomSanitizer, public route:Router) { }
 


  ngOnInit(): void {
    
    this.getproduct()
    this.getuser()
    return this.checkarray
  
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
          // console.log(x);
       if(element._id == this.addtocartid[x] ){
        
        this.grandTotal  +=  Number(element.price)
            
               this.checkarray.push(element)
              //  console.log( this.checkarray)
              
       }else{
        //  console.log("nahi hua ");
         
       }} 
    });
    (err:any)=>{
  
    }
  })

  return this.checkarray;
 
  }

 getuser(){
    this.ser.getuser().subscribe((res:any)=>{
     this.viewuser=res
     console.log(res)
    //  this.total=res.length
    this.viewuser.forEach((a:any)=>{
      // console.log(a);
      
          if(a.fullname == this.username ){
                 this.user.push(a)
                 console.log(this.user)
           }else{console.log("nhi");
           }
    }) 
 })
    // console.log(this.user);
          return this.user
    
    
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
  pay(){
    this.options = {
      "key": "rzp_test_QTqT8RlhnJKjDk", 
      "amount": this.grandTotal + "00", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Sankalp Sales",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "", 
      "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": {
          "name": this.username,
          "email": this.user.email,
          "contact": this.user.phoneno
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
    }
    this.username=localStorage.getItem("user")
    this.rzp1 = new this.ser.nativeWindow.Razorpay(this.options)
    this.rzp1.open();
  }
 
  
}
 

