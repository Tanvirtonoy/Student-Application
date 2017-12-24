import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentApplicationFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
