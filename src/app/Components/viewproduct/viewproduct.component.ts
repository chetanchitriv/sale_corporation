import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  apiUrl=environment.apiendpoint 
  currentid:any
  currentproduct:any=[]
  rzp1:any;
  username:any
  options:any

  constructor(private ser:ProductService, private aroute:ActivatedRoute, public _sanitizer: DomSanitizer,private http:HttpClient) { }

  ngOnInit(): void {
    // take the id with routing 
    this.currentid=this.aroute.snapshot.params.id
    console.log(this.currentid)
    this.getproduct()
  }


getproduct(){
  this.ser.getcurerntproduct(this.currentid).subscribe((res:any)=>{
  this.currentproduct=res
  console.log(res)
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


addCart(id:any){
  let payload = {
    productId: id,
  };
  console.log(payload)

  this.http.post(this.apiUrl+`/api/addtocart`,payload ).subscribe(()=>{
  
  })
}

pay(){
  this.options = {
    "key": "rzp_test_QTqT8RlhnJKjDk", 
    "amount": this.currentproduct.price + "00", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Sankalp Sales",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", 
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": this.username,
        "email": "gaurav.kumar@example.com",
        "contact": "9999999999"
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
