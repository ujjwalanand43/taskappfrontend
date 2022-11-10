import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { ApisService } from './apis.service';
ApisService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authservice : ApisService,private _router:Router) {
      
    }
    // canActivate() {
    //   if(this.authservice.loggedIn()){
    //     return true
    //   }else{
    //     this._router.navigate(['/login'])
    //   }
    // }
    canActivate(): boolean {
  if (this.authservice.loggedIn()){
    return true
   }else{
    this._router.navigate(['/login'])
    return false
  }
}
}
