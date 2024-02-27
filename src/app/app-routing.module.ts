import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourcesComponent } from './cources/cources.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SheduleComponent } from './shedule/shedule.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './header/header.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cources', component: CourcesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shedule', component: SheduleComponent },
  { path: 'teacherlogin', component: TeacherloginComponent },
  { path: 'teacher', component: TeachersComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'studentprofile', component: StudentProfileComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin-routing.module').then(m => AdminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
