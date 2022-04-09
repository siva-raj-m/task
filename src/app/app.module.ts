import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ZynerdLoginComponent } from './zynerd-login/zynerd-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicAuthInterceptor } from './helper/basic-auth.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ZynerdLoginComponent,
    DashboardComponent,
    LeftMenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
