import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';
import {RegistracijaComponent} from "./component/registracija/registracija.component";

const routes: Routes = [
  {path: '', redirectTo: '/home-page', pathMatch:'full'},
  {path: 'home-page' , component: HomePageComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'registration', component: RegistracijaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
