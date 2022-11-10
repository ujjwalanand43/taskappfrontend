import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminLoginService } from '../admin-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AdminLoginService,    private _router:Router) { }
  loginUserData  = {}
  ngOnInit(): void {
  }
   fetchuserdata = {}
onSubmit(form:NgForm){
  this.loginUserData = form.value
  this.auth.loginAdmin(this.loginUserData)
  .subscribe(
    res =>{
      this.fetchuserdata = res.user
      localStorage.setItem('token' , res.token)
      this._router.navigate(['/98765/superadmin'])
    } ,
    err => console.log(err.message)
  )
}



}
