import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './componets/main-page/main-page.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';

const routes: Routes = [
  {path:'main', component:MainPageComponent},
  {path:'user/:name',component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
