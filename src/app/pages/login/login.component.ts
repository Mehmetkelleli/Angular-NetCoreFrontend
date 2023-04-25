import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  login : any = {}

  constructor(private auth:AuthService,private router:Router,private tost:ToastrService,private social:SocialAuthService) {}

  ngOnInit() {
    this.social.authState.subscribe(user =>{
      console.log(user);
      this.auth.google(user).subscribe({
        next:()=>{
          this.router.navigate(["/dashboard"]);
        },error:(err:HttpErrorResponse)=>{
          this.tost.error(err.error);
        }
      })
    })
  }
  ngOnDestroy() {
  }

  logins(form:NgForm):void{
    if(form.valid){
      this.auth.login(this.login).subscribe({
        next:()=>{
          this.router.navigate(["/dashboard"])
          this.tost.success("Welcome User");
        },error:(err:HttpErrorResponse)=>{
          console.log(err.error);
        }
      });
    }
  }
  google(){
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
