import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './modules/auth/components/registration/registration.component';
import {AccountPageComponent} from './modules/account/components/account-page/account-page.component';
import {AuthGuard} from './services/guards/auth.guard';


const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full',
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
    ],
  },
  {
    path: 'account',
    loadChildren: './modules/account/account.module#AccountModule',
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
