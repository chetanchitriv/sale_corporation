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
  console.log(res)
  //  console.log(res[0].email)
      if(res.message == 'Successfully Login'){

        alert("Yor are Succesfully Loged In")
        this.route.navigate(['main'])

      }
      else{

        alert("Yor are not  Loged In")
        this.route.navigate(['login'])
        
      }
    })
   
  }
  // this.ser.getlog().subscribe((res:any)=>{
  //   console.log(res)
  // })

}
