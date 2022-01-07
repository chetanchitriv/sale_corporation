import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[];
  public puductList = new BehaviorSubject<any>([])
  

  constructor(private http:HttpClient) { }

 
// accesstokn = () =>{
//   let userdetails = localStorage.getItem("token")
  
//     let header = new HttpHeaders({
//       // 'Content-Type':  'application/json',
//       'authToken': userdetails
//     })
//     // console.log('tokenheader',header);

//     // header.append()
//     return { headers: header }
//   }

 

  addToCart(product:any){

    this.cartItemList.push(product);
    this.puductList.next(this.cartItemList)
    this.getTotalPrice();
    console.log(this.cartItemList)
  //  return this.http.post("http://204d-43-224-0-155.ngrok.io/api/addtocart",data,token )
  }


  getProductList(){
    // return this.http.get("http://204d-43-224-0-155.ngrok.io/api/addtocart",  ) ;
    return this.puductList.asObservable()
  }


  setProduct(product:any){
    this.cartItemList.push(product);
    this.puductList.next(product)
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
