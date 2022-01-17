import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  currentid:any
  currentproduct:any=[]
  rzp1:any;

  constructor(private ser:ProductService, private aroute:ActivatedRoute, public _sanitizer: DomSanitizer) { }

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

options = {
  "key": "rzp_test_QTqT8RlhnJKjDk", 
  "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  "currency": "INR",
  "name": "Acme Corp",
  "description": "Test Transaction",
  "image": "https://example.com/your_logo",
  "order_id": "", 
  "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
  "prefill": {
      "name": "Gaurav Kumar",
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

pay(){
  this.rzp1 = new this.ser.nativeWindow.Razorpay(this.options)
  this.rzp1.open();
}
}
