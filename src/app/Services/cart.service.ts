import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[];
  public puductList = new BehaviorSubject<any>([])

  constructor() { }
  getProductList(){
    return this.puductList.asObservable();
  }

  setProduct(product:any){
     this.cartItemList.push(product);
     this.puductList.next(product)
  }

  addToCart(product:any){
    this.cartItemList.push(product);
    
    this.puductList.next(this.cartItemList)
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice():number{
    let grabndTotal = 0
    this.cartItemList.map((a:any)=>{
      grabndTotal  += a.price;
    })
    return grabndTotal;
  }
    
    remonveItem(product: any){
      this.cartItemList.map((a:any, index:any)=>{
        if(product.id === a.id){
          this.cartItemList.splice(index,1)
        }
      })
  }

  removeAllItem(){
    this.cartItemList= []
    this.puductList.next(this.cartItemList)
  }
}
