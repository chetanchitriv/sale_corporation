import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupform:any=FormGroup
  red:boolean=false
  emailalert:boolean=false

  constructor( private fb:FormBuilder, private ser:ProductService, private router:Router ) { }

  ngOnInit(): void {

    this.signupform=this.fb.group({
      fullname:[''],
      phoneno:[''],
     
      email:[''],
      password:[''],
      cnfpassword:[''],
    })
  }
 
  postsign(){
    
    if(this.signupform.controls.password.value == this.signupform.controls. cnfpassword.value){
      this.red=false
      this.ser.postsignup(this.signupform.value).subscribe((res:any)=>{
        console.log(res.message)
        if(res.message == 'Failed! Email is already in use!'){
          this.emailalert = true
       }else{
         alert("Register Succefully")
         this.router.navigate(['/login'])
         this.emailalert =false
       }
        
      })
      


    }else{
      this.red=true
      this.router.navigate(['/ecom/signup'])
    }
   

  }
}
