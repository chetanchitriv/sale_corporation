import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  public totalitem: number = 0

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.getcart();
    }
    getcart(){
      this.cart.getProductList().subscribe((res:any)=>{
        this.totalitem=res.length ;
    })
  }
}


