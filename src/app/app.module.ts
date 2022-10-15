import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MainPageComponent } from './componets/main-page/main-page.component';
import { UserDetailsComponent } from './componets/user-details/user-details.component';
import { NotFoundComponent } from './componets/not-found/not-found.component';
import { ParentComponent } from './componets/parent/parent.component';
import { Child1Component } from './componets/parent/child/child1/child1.component';
import { Child2Component } from './componets/parent/child/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserDetailsComponent,
    NotFoundComponent,
    ParentComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
