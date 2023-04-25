import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, tap } from "rxjs";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient,private router:Router,private tost:ToastrService) {}

  singUp(data: FormData): Observable<any> {
    return this.http.post(environment.host + "auth", data);
  }
  login(data: any): Observable<any> {
    return this.http.post(environment.host + "auth/login", data).pipe(
      map((data: any) => {
        var token: any = data;
        return token;
      }),
      tap((token) => {
        console.log(token);
        localStorage.setItem("Token", JSON.stringify(token.token));
        localStorage.setItem("RefreshToken", JSON.stringify(token.refreshToken));
      })
    );
  }
  google(user:any){
    return this.http.post(environment.host + "auth/google", user).pipe(
      map((data: any) => {
        console.log(data);
        var token:any = data;
        return token;
      }),
      tap((token) => {
        console.log(token);
        localStorage.setItem("Token", JSON.stringify(token.token));
        localStorage.setItem("RefreshToken", JSON.stringify(token.refreshToken));
      })
    );
  }
  loginRefreshToken(){
    var result = false;
    try {
      this.http.post(environment.host+"auth/LoginRefreshToken", {refreshToken:localStorage.getItem("RefreshToken")?localStorage.getItem("RefreshToken"):"xxxxx"}).pipe(
        map((data:any)=>{
          var token:any = data
          return token
        }),tap((token:any)=>{
          console.log(token);
          result = true;
          localStorage.removeItem("RefreshToken");
          localStorage.removeItem("Token");

          localStorage.setItem("Token", JSON.stringify(token.token));
          localStorage.setItem("RefreshToken", JSON.stringify(token.refreshToken));
        })
      ).subscribe(data=>{
        next:()=>{

        }
        error:()=>{
          this.tost.info("You are logged out")
          this.router.navigate(["/login"]);
        }
      })
      result = true;
    } catch (error) {
      result = false;
    }
    return result;
  }
}
