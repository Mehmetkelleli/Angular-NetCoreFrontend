import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Router:Router,private tost:ToastrService,private jwt:JwtHelperService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(localStorage.getItem("Token") == null){
          this.Router.navigate(["/login"]);
          this.tost.error("Access Denied");
      }
      var token = JSON.parse(localStorage.getItem("Token"));
      try {
        if(this.jwt.decodeToken(token) && !this.jwt.isTokenExpired(token)){
          return true;
        }
      } catch (error) {
        this.tost.error("Access Denied You small lamer :)")
        return false;
      }
      return false;
  }

}
