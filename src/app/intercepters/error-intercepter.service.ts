import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, catchError, of } from "rxjs";
import { AuthService } from '../services/auth.service';
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: "root",
})

export class ErrorIntercepterService implements HttpInterceptor {
  constructor(private tost: ToastrService,private AuthService:AuthService,private route:Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(async(error: any) => {
        switch (error.status) {

          case HttpStatusCode.Unauthorized:
            console.log(error.error);
            try {
              var result = this.AuthService.loginRefreshToken();
              console.log(result)

            } catch (error) {
              this.tost.info("You are logged out");
              this.route.navigate(["/"]);
              return;
            }
            break;
          case HttpStatusCode.BadRequest:
              console.log(error.error);
              break;
          default:
            break;
        }
        return error;
      })
    );
  }
}
