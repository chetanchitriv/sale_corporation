import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-editproducthere',
  templateUrl: './editproducthere.component.html',
  styleUrls: ['./editproducthere.component.css']
})
export class EditproducthereComponent implements OnInit {

  editForm:any=FormGroup;
  productId:any

  constructor( private fb:FormBuilder, private aroute:ActivatedRoute,private ser:ProductService) { }

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
   console.log(res);
   
    // this.editForm.controls.image.patchValue(res.image.filename)
    this.editForm.controls.productname.patchValue(res.productname)
    this.editForm.controls.cat.patchValue(res.cat)
    this.editForm.controls.description.patchValue(res.description)
    this.editForm.controls.modelno.patchValue(res.modelno)
    this.editForm.controls.color.patchValue(res.color)
    this.editForm.controls.price.patchValue(res.price)
    })
 }

  onfileselect($event:any){

  }
}
