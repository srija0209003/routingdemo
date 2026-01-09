import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //needed for routing
import { Home } from './home/home';
import { Movies } from './movies/movies';
import { Contact } from './contact/contact';
import { Customer } from './customer/customer';
import { MovieDetails } from './movie-details/movie-details';
import { CustomerDetails } from './customer-details/customer-details';

//path--component---when to load that component
const routes: Routes = [
  { path: '', component: Home },
  { path: 'movies', component: Movies },
  { path: 'contactus', component: Contact},
  {path:'customer',component:Customer},
  {path:'customerdetails',component:CustomerDetails},
  {path:'movies/:id',component:MovieDetails}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
