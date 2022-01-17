import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

admin:boolean=true


  constructor(private router:Router) { }

  ngOnInit(): void {

 
  }

  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("user")
    this.router.navigate(['/login'])
  }
  boom(){
    this.admin=false
  }
  home(){
    this.admin=true
  }
}

