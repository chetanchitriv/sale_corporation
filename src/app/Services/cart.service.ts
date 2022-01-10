import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[];
  public puductList = new BehaviorSubject<any>([])
  
  apiUrl=environment.apiendpoint
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

 

  addToCart(i:any){

    // this.cartItemList.push(product);
    // this.puductList.next(this.cartItemList)
    // this.getTotalPrice();
    // console.log(this.cartItemList)
   return this.http.post(this.apiUrl+`/api/addtocart`,i )
  }

  getcartitem():Observable<any>{
    return this.http.get(this.apiUrl+`/api/addtocart`)
  }

  getProductList(){
    return this.http.get(this.apiUrl+`/api/addtocart` ) ;
    // return this.puductList.asObservable()
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
    
  deletcartitem(id: any):Observable<any>{
   return this.http.delete(this.apiUrl+`/api/deletefromcart`,id)
  }

  removeAllItem(){
    this.cartItemList= []
    this.puductList.next(this.cartItemList)
  }


}
