import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Movies } from './movies/movies';
import { Contact } from './contact/contact';
import { Customer } from './customer/customer';
import { MovieDetails } from './movie-details/movie-details';
import { CustomerDetails } from './customer-details/customer-details';
import { ProductModule } from './products/products.module';

@NgModule({
  declarations: [
    App,
    Home,
    Movies,
    Contact,
    Customer,
    MovieDetails,
    CustomerDetails,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
