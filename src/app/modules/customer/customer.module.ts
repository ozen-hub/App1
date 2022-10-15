import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { NewCustomerComponent } from './module/new-customer/new-customer.component';
import { DeleteCustomerComponent } from './module/delete-customer/delete-customer.component';


@NgModule({
  declarations: [
    CustomerComponent,
    NewCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
