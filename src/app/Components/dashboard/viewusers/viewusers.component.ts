import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {

 viewuser:any
 p: number = 1
 selectInput:any
 term=''
 total:any

  constructor(private ser:ProductService) { }

  ngOnInit(): void {
    
    this.getuser()
  }
getuser(){
  this.ser.getuser().subscribe((res:any)=>{
   this.viewuser=res
   this.total=res.length
  })
}
}
