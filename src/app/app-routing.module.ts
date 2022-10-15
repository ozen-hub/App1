import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './componets/main-page/main-page.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/main', pathMatch:'full'},
  {path:'main', component:MainPageComponent},
  {path:'user/:name',component:UserDetailsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
