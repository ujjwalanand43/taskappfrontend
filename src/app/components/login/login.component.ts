import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApisService } from 'src/app/apis.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:ApisService,    private _router:Router) { }
  loginUserData  = {}
  ngOnInit(): void {
  }
   fetchuserdata = {}
onSubmit(form:NgForm){
  this.loginUserData = form.value
  this.auth.loginUser(this.loginUserData)
  .subscribe(
    res =>{
      this.fetchuserdata = res.user
      localStorage.setItem('token' , res.token)
      this._router.navigate(['/'])
    } ,
    err => console.log(err)
  )
} 
}
