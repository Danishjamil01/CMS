import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CourcesComponent } from './cources/cources.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { SheduleComponent } from './shedule/shedule.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { LoaderComponent } from './loader/loader.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { ManagestudentComponent } from './managestudent/managestudent.component';
import { AHomeComponent } from './a-home/a-home.component';
import { AHomeDashboardComponent } from './a-home-dashboard/a-home-dashboard.component';
import { ManagesessionComponent } from './managesession/managesession.component';
import { ManageteacherComponent } from './manageteacher/manageteacher.component';
import { ParentsComponent } from './parents/parents.component';
import { ExamComponent } from './exam/exam.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PaymentsComponent } from './payments/payments.component';
import { ClassesComponent } from './classes/classes.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { EventsComponent } from './events/events.component';
import { TableModule } from 'primeng/table';
import { AttendanceComponent } from './attendance/attendance.component';


import { ToastrModule } from 'ngx-toastr';
import { TeacherprofileComponent } from './teacherprofile/teacherprofile.component';
import { MainStudentComponent } from './main-student/main-student.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CourcesComponent,
    ServicesComponent,
    LoginComponent,
    SheduleComponent,
    TeacherloginComponent,
    TeachersComponent,
    StudentsComponent,
    StudentProfileComponent,
    LoaderComponent,
    ADashboardComponent,
    ManagestudentComponent,
    AHomeComponent,
    AHomeDashboardComponent,
    ManagesessionComponent,
    ManageteacherComponent,
    ParentsComponent,
    ExamComponent,
    AssignmentsComponent,
    PaymentsComponent,
    ClassesComponent,
    SubjectsComponent,
    EventsComponent,
    AttendanceComponent,
    TeacherprofileComponent,
    MainStudentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    TableModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
