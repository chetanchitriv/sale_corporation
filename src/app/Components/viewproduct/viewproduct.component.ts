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

  constructor(private ser:ProductService, private aroute:ActivatedRoute, public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
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


}
