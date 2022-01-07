import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  currentid:any
  currentproduct:any

  constructor(private ser:ProductService, private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentid=this.aroute.snapshot.params.id
    this.getproduct()
  }


getproduct(){
  this.ser.getcurerntproduct(this.currentid).subscribe((res:any)=>{
  this.currentproduct=res
  console.log(this.currentproduct)
  })
}

}
