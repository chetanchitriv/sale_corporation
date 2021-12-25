import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   public cartList:any =[];
   public grandTotal : number = 0

   
  constructor(private cart:CartService) { }
 


  ngOnInit(): void {
    // this.cart.getProductList().subscribe((res:any)=>{
    //   console.log(res)
    //   this.cartList=res;
    //   this.grandTotal = this.cart.getTotalPrice()
    // })
    this.get()
  
    }
    get(){
      this.cart.getProductList().subscribe((res:any)=>{
        console.log(res)
        this.cartList=res;
        this.grandTotal = this.cart.getTotalPrice()
      })
  }
  remove(item:any){
    this.cart.remonveItem(item);
  }
  emptycart(){
    this.cart.removeAllItem();
  }
}


