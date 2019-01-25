import { AuthGuard } from './_guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { VerificationComponent } from './verification/verification.component';
import { VerificationSuccessComponent } from './verification/success.component';
import { VerificationFailedComponent } from './verification/failure.component/failure.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  declarations: [
    AuthComponent,
    VerificationComponent,
    VerificationSuccessComponent,
    VerificationFailedComponent
  ],
  providers: [
    AuthGuard
  ],
  entryComponents: [
    VerificationSuccessComponent,
    VerificationFailedComponent
  ]
})
export class AuthModule { }
