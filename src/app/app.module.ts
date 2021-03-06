import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from '../practice/practice.component';
import { LearnComponent } from "../learn/learn.component";
import { HomeComponent } from "../home/home.component";
import { RegisterComponent } from "../register/register.component";
import { ReactiveComponent } from "src/reactiveform/reactive.component";
@NgModule({
  declarations: [
    AppComponent,PracticeComponent,LearnComponent,HomeComponent,RegisterComponent,ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
