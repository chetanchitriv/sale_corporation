import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productlist:any=[]
  p: number = 1
  term=''
  total:any
  selectInput:any

  constructor(private ser:ProductService, private cart:CartService, private router:Router,) { }

  ngOnInit(): void {

    this. getproduct()
  }
  getproduct(){

    this.ser.getProduct().subscribe((res)=>{
      this.productlist=res;
      this.total=res.length
      console.log(res)
      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,Toatal:a.price})
  
      })
    });
    (err:any)=>{
  
    }
  }
  deletproduct(item:any){
    let payload = {
      productId: item._id,
    };
    this.productlist.map((a:any , index:any)=>{
      if(item._id == a._id){
        this.productlist.splice(index,1)
      }
    })
    this.ser.deletproduct(item._id).subscribe((res:any)=>{

    })
  }
}
