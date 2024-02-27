import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADashboardComponent } from '../a-dashboard/a-dashboard.component';
import { ManagestudentComponent } from '../managestudent/managestudent.component';
import { AHomeDashboardComponent } from '../a-home-dashboard/a-home-dashboard.component';
import { ManagesessionComponent } from '../managesession/managesession.component';
import { ManageteacherComponent } from '../manageteacher/manageteacher.component';
import { ParentsComponent } from '../parents/parents.component';
import { ExamComponent } from '../exam/exam.component';
import { AssignmentsComponent } from '../assignments/assignments.component';
import { PaymentsComponent } from '../payments/payments.component';
import { ClassesComponent } from '../classes/classes.component';
import { SubjectsComponent } from '../subjects/subjects.component';
import { EventsComponent } from '../events/events.component';
import { AttendanceComponent } from '../attendance/attendance.component';
import { TeacherprofileComponent } from '../teacherprofile/teacherprofile.component';

const routes: Routes = [
  { path: 'dashboard', component: ADashboardComponent },
  { path: 'managestudent', component: ManagestudentComponent },
  { path: 'homedashboard', component: AHomeDashboardComponent },
  { path: 'managesession', component: ManagesessionComponent },
  { path: 'manageteacher', component: ManageteacherComponent },
  { path: 'parents', component: ParentsComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'teacherprofile', component: TeacherprofileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
