import { Component } from '@angular/core';

@Component({
  selector: 'app-managestudent',
  templateUrl: './managestudent.component.html',
  styleUrls: ['./managestudent.component.scss']
})
export class ManagestudentComponent {


  header = [
    {
      sno: 'Sl No.',
      photo: 'PHOTO',
      class: 'CLASS',
      rollNo: 'ROLL NO',
      fullName: 'FULL NAME',
      fatherName: 'FATHER NAME',
      motherName: 'MOTHER NAME',
      parentMobile: 'PARENTS MOBILE',
      studentMobile: 'STUDENT MOBILE',
      mail: 'EMAIL',
      address: 'ADDRESS',
      action: 'ACTION'
    }
  ]
  cols = [
    {
      sno: '1.',
      photo: 'assets/students/1.jpg',
      class: 'seventh',
      rollNo: '10',
      fullName: 'FULL NAME',
      fatherName: 'FATHER NAME',
      motherName: 'MOTHER NAME',
      parentMobile: '9654523568',
      studentMobile: '9654523568',
      mail: 'abc@gmail.com',
      address: 'ADDRESS',
    },
    {
      sno: '1.',
      photo: 'assets/students/7.jpg',
      class: 'seventh',
      rollNo: '10',
      fullName: 'FULL NAME',
      fatherName: 'FATHER NAME',
      motherName: 'MOTHER NAME',
      parentMobile: '9654523568',
      studentMobile: '9654523568',
      mail: 'abc@gmail.com',
      address: 'ADDRESS',
    },
    {
      sno: '1.',
      photo: 'assets/students/2.jpg',
      class: 'seventh',
      rollNo: '10',
      fullName: 'FULL NAME',
      fatherName: 'FATHER NAME',
      motherName: 'MOTHER NAME',
      parentMobile: '9654523568',
      studentMobile: '9654523568',
      mail: 'abc@gmail.com',
      address: 'ADDRESS',
    },
    {
      sno: '1.',
      photo: 'assets/students/8.jpg',
      class: 'seventh',
      rollNo: '10',
      fullName: 'FULL NAME',
      fatherName: 'FATHER NAME',
      motherName: 'MOTHER NAME',
      parentMobile: '9654523568',
      studentMobile: '9654523568',
      mail: 'abc@gmail.com',
      address: 'ADDRESS',
    },
    {
      sno: '1.',
      photo: 'assets/students/3.jpg',
      class: 'seventh',
      rollNo: '10',
      fullName: 'FULL NAME',
      fatherName: 'FATHER NAME',
      motherName: 'MOTHER NAME',
      parentMobile: '9654523568',
      studentMobile: '9654523568',
      mail: 'abc@gmail.com',
      address: 'ADDRESS',
    },
  ];

  // Inside your component class
  // toggleEditModal(): void {
  //   const toggleEditModal = document.getElementById('editmodal') as HTMLInputElement;
  //   toggleEditModal.style.display = toggleEditModal.style.display === 'block' ? 'none' : 'block';
  // }
}
