import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { LoginComponent } from './pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxScannerFaceModule } from 'ngx-scanner-face';
import { ErrorIntercepterService } from './intercepters/error-intercepter.service';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>{console.log(JSON.parse(localStorage.getItem("Token")));return JSON.parse(localStorage.getItem("Token"))},
        allowedDomains:[environment.host1]
      }
    }),
    SocialLoginModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginComponent,
  ],
  providers: [
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleId)
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("905601927250669")
          }
        ],
        onError: err => console.log(err)
      } as SocialAuthServiceConfig
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercepterService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
