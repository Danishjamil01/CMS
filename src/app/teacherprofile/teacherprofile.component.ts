import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.component.html',
  styleUrls: ['./teacherprofile.component.scss']
})
export class TeacherprofileComponent {
  ngOnInit(): void {
    this.ChangeFilterTab('profile');
  }

  constructor(private redirect: Router) {

  }
  navigateTologout() {
      this.redirect.navigateByUrl('teacherlogin')
  }
  navigateToattendance() {

  }


  showTabBar: string = 'profile';
  ChangeFilterTab(elementId: string) {
    this.showTabBar = elementId;
    const element = (<HTMLCollection>document.getElementsByClassName('filter-tab')) as any;
    for (let i = 0; i < element.length; i++) {
      element[i]['style'].background = 'transparent';
      element[i]['style'].color = '#ffff';
      element[i]['style'].borderBottom = '4px solid transparent';
      element[i]['style'].fontWeight = '400';
      if (elementId === element[i].id) {
        element[i]['style'].borderBottom = '4px solid red';
        element[i]['style'].color = '#999';
        element[i]['style'].fontWeight = '600';
      }
    }
  }



  header = [
    {
      sno: 'Sl No.',
      photo: 'PHOTO',
      class: 'CLASS',
      rollNo: 'ROLL NO',
      StudentName: 'Student Name',
      AttendancePercentage: 'Attendance Percentage',
      Action: 'Action',

    }
  ]
  cols = [
    {
      sno: '1.',
      photo: 'assets/students/1.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '2.',
      photo: 'assets/students/7.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '3.',
      photo: 'assets/students/2.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '4.',
      photo: 'assets/students/8.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '5.',
      photo: 'assets/students/3.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '6.',
      photo: 'assets/students/9.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '7.',
      photo: 'assets/students/4.png',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '8.',
      photo: 'assets/students/10.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '9.',
      photo: 'assets/students/5.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
    {
      sno: '10.',
      photo: 'assets/students/11.jpg',
      class: 'seventh',
      rollNo: '10',
      StudentName: 'hhsddh bdbjd',
      AttendancePercentage: "75%",
    },
  ]

  teacherInfo=[
    {degree:'Bsc Math', experience:'10 Years',hobbies:'Music, Dancing and Family', courses:'Higher Math, Math Puzzle'} 
  ]
  teacher =[
    {monday:'9AM-3PM', tuesday:'9AM-3PM', wednesday:'9AM-3PM', thursday:'9AM-3PM', friday:'9AM-3PM', saturday:'9AM-3PM'}
  ]
}

