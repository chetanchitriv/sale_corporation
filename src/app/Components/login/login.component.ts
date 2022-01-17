import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  name:any
  password:any
   check:any
   settoken:any
   user:boolean=false

   loginform:any=FormGroup
  constructor(private fb:FormBuilder , private ser:ProductService , private route:Router) { }

  ngOnInit(): void {
    this.loginform=this.fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
   
    this.ser.postlog(this.loginform.value).subscribe((res:any)=>{
 
  
  
  //  console.log(res[0].email)
      if(res.success){
          if(res.role){
            alert("welcome Admin")
            this.ser.setAdmin(res.role)
            this.ser.settoken(res.accesstoken)
            this.route.navigate(['/main'])
          }else
          {
            localStorage.setItem("user" ,res.fullname)
            this.ser.settoken(res.accesstoken)
            alert("Yor are Succesfully Logged In")
            this.route.navigate(['/ecom/home'])
          }
      }
      // else if( ){
      //   this.user=true
       
      //   alert("Yor are not  Loged In")
      //   this.route.navigate(['login'])
        
      // }
     
    },
    (err:any)=>{
      this.user=true
    })
   
  }
  // this.ser.getlog().subscribe((res:any)=>{
  //   console.log(res)
  // })

}
