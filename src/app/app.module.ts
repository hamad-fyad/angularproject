import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GenersComponent } from './geners/geners.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginComponent } from './login/login.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    PagenotfoundComponent,
    GenersComponent,
    CatalogComponent,
    LoginComponent,
    BuildingsComponent,
    RegisterComponent,
    ProfileComponent,
    UserDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
