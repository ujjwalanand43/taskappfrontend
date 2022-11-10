import { Component, OnInit } from '@angular/core';
import{HttpClient , HttpHeaders}from '@angular/common/http'
import axios from "axios";
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private  url = "https://localhost:4000/users";
  private  blogurl = "http://localhost:4000/blog";
  accessToken = localStorage.getItem("token");
  productDetails:any = [
    
    
  ]
  
  constructor(
    private auth:ApisService
  ) { }


  ngOnInit(): void {
    this.getdata()
   this.getdetails()
   this.categories()
  }
 userDetails = {}

name : string = ''
getdata(){
  console.log('hello')
    axios( {
    method: 'get',
    url: 'http://localhost:4000/users',
    headers: { 
      'Authorization': 'Bearer ' + this.accessToken, 
   
      "Accept": "application/json",
    },

  })
  .then((res)=>{
        console.log(res)
  })
  .catch(function (error) {
    console.log(error);
  });
}
getdetails(){
   this.auth.getUserDetails()
   .subscribe(
    res =>{
      this.productDetails = res
      const verified = JSON.stringify(res)
      const name = res.name
      this.userDetails = verified
       this.name = name


    } ,
    err => console.log(err)
  )
} 
  blogDetails:any = []
// getBlogData(){
//   var config = {
//     method: 'get',
//     url: 'http://localhost:4000/blog',
//     headers: { 
//       'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkM2Q3ZWFhMzhkYmRmMmZhNDU1YjYiLCJpYXQiOjE2NTI0NDQ3MDN9.ra0071KsIeuRSENu_8vnfTQtX9yUgJjFNQ9agyyiSEE'
//     }
//   };
  
//   axios(config)
//   .then(function (response) {
//     this.blogDetails = JSON.stringify(response.data)
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
  
// }
categories() {
   

    
  const req = {

  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer'  + this.accessToken
  }

  axios.get(this.blogurl, {
    headers: headers
    })
    .then((response) => {
      console.log(response)
      this.blogDetails = response.data
    })
    .catch((error) => {
    console.log("Error");
   });
}
}

  


