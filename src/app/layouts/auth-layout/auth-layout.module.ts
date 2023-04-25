import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';

import { RegisterComponent } from '../../pages/register/register.component';

import { NgxScannerFaceModule } from 'ngx-scanner-face';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgxScannerFaceModule

    // NgbModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class AuthLayoutModule { }
