import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,} from '@angular/forms';
import { FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-sellproduct',
  templateUrl: './sellproduct.component.html',
  styleUrls: ['./sellproduct.component.css']
})
export class SellproductComponent implements OnInit {
  sellForm:any=FormGroup; 
  alert : boolean=false ;
   // Variable to store shortLink from api response
   apiUrl=environment.apiendpoint

  constructor( private fb:FormBuilder, private service:ProductService, private http:HttpClient , private router:Router) { }
  
  ngOnInit(): void {
    this.sellForm = this.fb.group({
      image:['', [Validators.required, ]],
      
      productname:['', [Validators.required, ]],
      cat:['',[Validators.required]],
      description:['', [Validators.required, ]],
     
      
      modelno:['', [Validators.required, ]],
      color:['', [Validators.required, ]],
      price:['',[Validators.required]]
      
    })
  }
   // On file Select
  

   onfileselect(event:any) {
      
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.sellForm.get('image').setValue(file);
     }
  }

  sell(){
    
    const fd =new FormData();
    fd.append('image',this.sellForm.get('image').value);
    fd.append('productname',this.sellForm.get('productname').value);
    fd.append('cat',this.sellForm.get('cat').value);
    fd.append('description',this.sellForm.get('description').value);
    fd.append('modelno',this.sellForm.get('modelno').value);
    fd.append('color',this.sellForm.get('color').value);
    fd.append('price',this.sellForm.get('price').value);

    this.http.post(this.apiUrl+`/api/addproduct`,fd)
    .subscribe( 
        (res) => {
          this.alert=true,
    console.log(res)
  this.router.navigate(['/ecom/shop'])
   },
  (err)=>{console.log(err)}

    )
  }
      


    
  }


 

  
