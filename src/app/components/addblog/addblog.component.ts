import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder, NgForm, Validators} from '@angular/forms';
import{HttpClient , HttpHeaders}from '@angular/common/http'
import axios from "axios";
import { ApisService } from 'src/app/apis.service';
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  

  files: File[] = [];

	onFilesAdded(event:any) {
		console.log(event);
		this.files.push(...event.addedFiles);
    console.log(this.files)
    this
	}

	onFilesRejected(event:any) {
		console.log(event);
	}

	onRemove(event:any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
  private  url = "https://localhost:4000/blog";
  accessToken = localStorage.getItem("token");
  constructor(    private auth:ApisService
    ) {}
    loginUserData  = {}
  ngOnInit(): void {}
  fetchuserdata = {}
  // onSubmit(form: NgForm) {
  //   // let  value ={
  //   // name:form.value.name,
  //   // description:form.value.description,
  //   // image:form.value.file

  //   // };
  //   // const headers = {
  //   //   "Content-Type": "multipart/form-data",
  //   //   'Authorization': 'Bearer '  + this.accessToken,
  //   //   "Accept": "application/json",
  //   // };

  //       // this.auth.postBlogData(form)
  //       // .subscribe((res)=>{
  //       //     this.fetchuserdata = res.user
  //       // })
        
  //       this.loginUserData =  form.value
  //       this.auth.postBlogData(  this.loginUserData )
  //       .subscribe ( res =>{
  //         console.log('hello')
  //         this.fetchuserdata = res.user
  //         console.log()

      
  //       } ,
  //       err => console.log(err,'hello')
  //       )
  // }
  onSubmit(form: NgForm) {
    // let  value ={
    // name:form.value.name,
    // description:form.value.description,
    // image:form.value.file

    // };
    // const headers = {
    //   "Content-Type": "multipart/form-data",
    //   'Authorization': 'Bearer '  + this.accessToken,
    //   "Accept": "application/json",
    // };

  
    // var FormData = require('form-data');
 
    var data = new FormData();
    data.append('title', form.value.title);
    data.append('description', form.value.description);
    data.append('image',form.value.image);
    
    var config = {
      method: 'post',
      url: 'http://localhost:4000/blog',
      headers: { 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjdkM2Q3ZWFhMzhkYmRmMmZhNDU1YjYiLCJpYXQiOjE2NTI0NDQ3MDN9.ra0071KsIeuRSENu_8vnfTQtX9yUgJjFNQ9agyyiSEE', 

      },
      data : data
    };
    
    axios(config)
    .then(function (response:any) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error:any) {
      console.log(error);
    });
}}
