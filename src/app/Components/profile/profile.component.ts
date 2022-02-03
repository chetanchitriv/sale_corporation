import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  viewuser:any
  user:any=[]
  total:any=[]
view:boolean=true
edit:boolean=false
username:any

  constructor(private ser:ProductService) { }

  ngOnInit(): void {

this.username=localStorage.getItem("user")
this.getuser()

  }

  getuser(){
    this.ser.getuser().subscribe((res:any)=>{
     this.viewuser=res
     console.log(res)
    //  this.total=res.length
    this.viewuser.forEach((a:any)=>{
      // console.log(a);
      
          if(a.fullname == this.username ){
                 this.user.push(a)
                 console.log(this.user)
           }else{console.log("nhi");
           }
    }) 
 })
    // console.log(this.user);
          return this.user
    
    
 }

 editdetails(item:any){

      this.view=false
      this.edit=true
      
}

savedetails(){

    this.view=true
    this.edit=false
}

}
