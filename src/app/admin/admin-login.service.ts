import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  private _loginUrl = "http://localhost:4000/superadmin/login";
  private _accessBlog = "http://localhost:4000/admin/blog"
  private _accessTodo = "http://localhost:4000/superadmin/todo"
  
  constructor(private http : HttpClient) { }



  loginAdmin(user:any){
   return  this.http.post<any>(this._loginUrl, user)
  }
  accessBlog(){
    return this.http.get<any>(this._accessBlog)
  }
  accessTodo(){
    return this.http.get<any>(this._accessTodo)
  }
}
