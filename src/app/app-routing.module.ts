import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoggedInPageComponent } from './logged-in-page/logged-in-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: 'home-page',
      component: HomePageComponent,
  },
  {
  path: 'sign-page',
    component: SignUpComponent,
},
{
  path:'login-page',
  component:LoginPageComponent
},
{
  path:'logged-page',
  component:LoggedInPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
