import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-editproducthere',
  templateUrl: './editproducthere.component.html',
  styleUrls: ['./editproducthere.component.css']
})
export class EditproducthereComponent implements OnInit {

  editForm:any=FormGroup;
  productId:any
  response:any=[]
  apiUrl=environment.apiendpoint
  constructor( private fb:FormBuilder,private http:HttpClient, private aroute:ActivatedRoute,private ser:ProductService,public _sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.editForm = this.fb.group({
      image:['', [Validators.required, ]],
      
      productname:['', [Validators.required, ]],
      cat:['',[Validators.required]],
      description:['', [Validators.required, ]],
     
      
      modelno:['', [Validators.required, ]],
      color:['', [Validators.required, ]],
      price:['',[Validators.required]]
      
    })

this.productId=this.aroute.snapshot.params.id
this.get_product_toedit()
  }

 get_product_toedit(){
  this.ser.getcurerntproduct(this.productId).subscribe((res:any)=>{
    this.response=res.image
    
  //  console.log(this.response);

   
    // this.editForm.controls.image.patchValue(res.image.filename)
    this.editForm.controls.productname.patchValue(res.productname)
    this.editForm.controls.cat.patchValue(res.cat)
    this.editForm.controls.description.patchValue(res.description)
    this.editForm.controls.modelno.patchValue(res.modelno)
    this.editForm.controls.color.patchValue(res.color)
    this.editForm.controls.price.patchValue(res.price)
    this.editForm.controls.image.patchValue(res.image)
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
deletimage(){

  this.response=[]
  console.log(this.response);
  
}
onfileselect(event:any){
  if(event.target.files.length>0){
    const file=event.target.files[0];
    this.editForm.get('image').setValue(file);
   }
}
update(){
    
  const fd =new FormData();
  fd.append('image',this.editForm.get('image').value);
  fd.append('productname',this.editForm.get('productname').value);
  fd.append('cat',this.editForm.get('cat').value);
  fd.append('description',this.editForm.get('description').value);
  fd.append('modelno',this.editForm.get('modelno').value);
  fd.append('color',this.editForm.get('color').value);
  fd.append('price',this.editForm.get('price').value);

  this.http.post(this.apiUrl+`/api/addproduct`,fd)
  .subscribe( 
      (res) => {
        // this.alert=true,
  console.log(res)
// this.router.navigate(['/ecom/shop'])
 },
(err)=>{console.log(err)}

  )
}
}
