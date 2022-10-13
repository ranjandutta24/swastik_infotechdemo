import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { Child1ComponentComponent } from './child1-component/child1-component.component';
import { Child2ComponentComponent } from './child2-component/child2-component.component';
import { SharedComponentComponent } from './shared-component/shared-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponentComponent,
    Child1ComponentComponent,
    Child2ComponentComponent,
    SharedComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
