import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZynerdLoginComponent } from './zynerd-login/zynerd-login.component';
import { AuthGuard } from './helper/auth.gurd';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', component: ZynerdLoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
  children: [
    {
      path:'counselling', component: ContentComponent
    }
  ] },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
