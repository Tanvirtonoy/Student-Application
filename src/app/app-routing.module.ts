import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentApplicationFormComponent } from './student-application-form/student-application-form.component';
import { SchoolAuthorityComponent } from './school-authority/school-authority.component';


const routes: Routes = [
    {path: 'form', component: StudentApplicationFormComponent},
    {path: 'school-authority-login', component: SchoolAuthorityComponent}
];

@NgModule ({
    imports: [ RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
