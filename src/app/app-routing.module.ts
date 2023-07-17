import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  { path: "login-form", component: LoginFormComponent },
  { path: "subscription-form", component: SubscriptionFormComponent },
  { path: "movies-list", component: MoviesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
