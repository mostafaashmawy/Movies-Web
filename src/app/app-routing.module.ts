import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActordetailsComponent } from './actor-details/actor-details.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { TvshowComponent } from './tvshow/tvshow.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'movies',component:MoviesComponent},
  {path:'tvshow',component:TvshowComponent},
  {path:'people',component:PeopleComponent},
  {path:'details/:mediaType/:id',component:DetailsComponent},
  {path:'actor/person/:id',component:ActordetailsComponent},
  {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
