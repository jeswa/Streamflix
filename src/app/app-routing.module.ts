import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

const routes: Routes = [
  { path: "login-form", component: LoginFormComponent },
  { path: "subscription-form", component: SubscriptionFormComponent },
  { path: "movies-list", component: MoviesListComponent },
  { path: "movie-card", component: MovieCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
