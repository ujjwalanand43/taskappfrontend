import { Component, OnInit } from '@angular/core';
import axios from "axios";
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    private fetchSuperAdmin = "http://localhost:4000/getsuperadmin";
    private logout = "http://localhost:4000/superadmin/logout";
  constructor(  private _router:Router) { }
  accessToken = localStorage.getItem("token");
  loginUserData  = {}

  ngOnInit(): void {
    this.brands()
    console.log(this.productDetails)
  }
  sideBar:boolean = true
  toogleSidebar()
{
  this.sideBar = !this.sideBar
}

productDetails:any = [
 
  
]
brands(){
  

  const req = {
      
  };
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '  + this.accessToken
  }
  axios.get(this.fetchSuperAdmin,{
    headers:headers
  })
  .then(res=>{
    // res.data = this.productDetails
    this.productDetails = res.data
    // console.log(res.data.data)
    // console.log(this.productDetails)
  })
  .catch((err)=>{
    console.log(err)
  })
}

deleteToken(){
        
  axios( {
    method: 'post',
    url: 'http://localhost:4000/superadmin/logout',

    headers: { 
      'Authorization': 'Bearer ' + this.accessToken, 
      "Content-Type": "multipart/form-data",
      "Accept": "application/json",
    },

    })
    .then( (response)=> {
    
    console.log(JSON.stringify(response.data));
    localStorage.clear()
      this._router.navigate(['/admin/login'])

    })
    .catch(function (error) {
    console.log(error);
    });
  }
}
