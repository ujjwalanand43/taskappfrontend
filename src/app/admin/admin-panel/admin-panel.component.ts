import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminLoginService } from '../admin-login.service';
import axios from "axios";
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  private _accessBlog = "http://localhost:4000/admin/blog"
  private _countBlog  = "http://localhost:4000/countblogs"
  constructor(private sanitizer: DomSanitizer , private auth:AdminLoginService,    private _router:Router) { }
  accessToken = localStorage.getItem("token");
  loginUserData  = {}

  public getSantizeUrl(url : string) {
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  
    
  isList:number | undefined;
  isMenu: boolean = false;
  isSearch: boolean = false;

  
  ngOnInit(): void {
    this.brands()
    console.log(this.productDetails)
    this.countBlogs()
  }
  productDetails:any = [
   
    
  ]
  number:any 
   brands(){

    const req = {
        
    };
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '  + this.accessToken
    }
    axios.get(this._accessBlog,{
      headers:headers
    })
    .then(res=>{
      // res.data = this.productDetails
      this.productDetails = res.data.data
      console.log(res.data.data)
      console.log(this.productDetails)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  countBlogs(){

    const req = {
        
    };
    
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '  + this.accessToken
    }
    axios.get(this._countBlog,{
      headers:headers
    })
    .then(res=>{
      // res.data = this.productDetails
      this.number = res.data.orderCount
      console.log( res.data.orderCount)
      console.log(this.number)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
