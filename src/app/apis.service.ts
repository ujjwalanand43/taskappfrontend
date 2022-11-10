import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  private _loginUrl = "http://localhost:4000/users/login"
  private _registerUrl = "http://localhost:4000/users/register"
  private _fetch = "http://localhost:4000/users"
private _specific = "http://localhost:4000/users/me"
private _blog = "http://localhost:4000/blog"
private _postblog = "http://localhost:4000/blog"
  constructor(private http : HttpClient) { }
  loginUser(user:any){
    return this.http.post<any>(this._loginUrl,user)
  }
  registerUser(user:any){
    return this.http.post<any>(this._registerUrl,user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getUserDetails(){
    return  this.http.get<any>(this._specific)
  }
  getToken(){
     return  localStorage.getItem('token')
  }
  getData(){
    return this.http.get<any>(this._fetch)
  }
  getBlogData(){
    return this.http.get<any>(this._blog)
  }

  postBlogData(blog:any){
    return this.http.post<any>(this._postblog,blog)
  }
} 
