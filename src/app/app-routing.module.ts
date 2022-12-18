import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { LoginServiceService } from './login-service.service';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    canActivate: [() => inject(LoginServiceService).isLoggedIn()]
  },
  {
    path: 'false',
    component: HelloComponent,
    canMatch: [() => inject(LoginServiceService).doNot()]
  },
  {
    path: 'false',
    component: HiComponent,
  },
  {
    path: 'hi',
    component: HiComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
