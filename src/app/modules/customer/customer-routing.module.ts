import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { DeleteCustomerComponent } from './module/delete-customer/delete-customer.component';
import { NewCustomerComponent } from './module/new-customer/new-customer.component';

const routes: Routes = [
  { path: '', component: CustomerComponent, children:[
    {path:'new-customer', component:NewCustomerComponent},
    {path:'delete-customer', component:DeleteCustomerComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
