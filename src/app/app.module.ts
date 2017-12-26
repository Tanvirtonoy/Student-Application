import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import { AppRoutingModule } from './app-routing.module';
import { SchoolAuthorityComponent } from './school-authority/school-authority.component';
import { AdmitCardComponent } from './admit-card/admit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentApplicationFormComponent,
    SchoolAuthorityComponent,
    AdmitCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
