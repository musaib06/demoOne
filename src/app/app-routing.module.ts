import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ServicesComponent } from './main/services/services.component';
import { AboutUsComponent } from './main/about-us/about-us.component';
import { ContactUsComponent } from './main/contact-us/contact-us.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {path: "home", component: HomeComponent},
  {path: "services", component: ServicesComponent},
  {path:"aboutUs", component: AboutUsComponent},
  {path:"contactUs", component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
