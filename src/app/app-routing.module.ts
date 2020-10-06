import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { GetTrendingInfoComponent } from './components/get-trending-info/get-trending-info.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PeopleComponent } from './components/people/people.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TvComponent } from './components/tv/tv.component';


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movies', canActivate:[AuthGuard] ,component: MoviesComponent},
  {path: 'tv', canActivate:[AuthGuard] ,component: TvComponent},
  {path: 'people',canActivate:[AuthGuard] , component: PeopleComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'trending-info/:item/:id', component: GetTrendingInfoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
