import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './componets/main-page/main-page.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { Child1Component } from './componets/parent/child/child1/child1.component';
import { Child2Component } from './componets/parent/child/child2/child2.component';
import { ParentComponent } from './componets/parent/parent.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/main', pathMatch:'full'},
  {path:'main', component:MainPageComponent},
  {path:'user/:name',component:UserDetailsComponent},
  {path:'parent', component: ParentComponent, children:[
    {path:'', redirectTo:'/parent/child1', pathMatch:'full'},
    {path:'child1', component:Child1Component},
    {path:'child2', component:Child2Component}
  ]},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
