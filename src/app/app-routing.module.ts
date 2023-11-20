import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  //here we have the linkes to all of the components 
  //the "path" is a string that defines the URL that a specific route in the application maps to the component
  {path:'',pathMatch:'full',redirectTo:'profile/login'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'catalog',component:CatalogComponent },
  {path:'cart',component:CartComponent },
  {path:'profile',component:ProfileComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'userDetails/:mail',component:UserDetailsComponent}
  ]
},
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
