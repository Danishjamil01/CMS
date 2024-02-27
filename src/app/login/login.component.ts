import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public redirect: Router) {

  }
  navigateTologin() {
    this.redirect.navigateByUrl('login')
  }


  openEyeDisabled: boolean = false;
  passwordVisible: boolean = false;

  openEye() {
    (<HTMLInputElement>document.getElementById("open1")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open2")).style.display = 'none';
    this.openEyeDisabled = true;
    this.passwordVisible = false;
  }

  closeEye() {
    (<HTMLInputElement>document.getElementById("open2")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open1")).style.display = 'none';
    this.openEyeDisabled = false;
    this.passwordVisible = true;
  }




  openEyeDisabled1: boolean = false;
  passwordVisible1: boolean = false;

  openEye1() {
    (<HTMLInputElement>document.getElementById("open3")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open4")).style.display = 'none';
    this.openEyeDisabled1 = true;
    this.passwordVisible1 = false;
  }

  closeEye1() {
    (<HTMLInputElement>document.getElementById("open4")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open3")).style.display = 'none';
    this.openEyeDisabled1 = false;
    this.passwordVisible1 = true;
  }






  openEyeDisabled2: boolean = false;
  passwordVisible2: boolean = false;

  openEye2() {
    (<HTMLInputElement>document.getElementById("open5")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open6")).style.display = 'none';
    this.openEyeDisabled2 = true;
    this.passwordVisible2 = false;
  }

  closeEye2() {
    (<HTMLInputElement>document.getElementById("open6")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open5")).style.display = 'none';
    this.openEyeDisabled2 = false;
    this.passwordVisible2 = true;
  }


  openPopup() {
    (<HTMLInputElement>document.getElementById("popup1")).style.visibility = 'visible';
    (<HTMLInputElement>document.getElementById("popup1")).style.transform = 'translateY(100px)';
    (<HTMLInputElement>document.getElementById("popup1")).style.transition = '.52s ease';
    (<HTMLInputElement>document.getElementById("")).style.backgroundColor
  }








  // showChatModal() {
  //   (<HTMLInputElement>document.getElementById('chat-modal')).style.visibility = 'visible';
  //   (<HTMLInputElement>document.getElementById('chat-modal')).style.transform = 'translateX(0)';
  //   (<HTMLInputElement>document.getElementById('chat-modal')).style.transition = '0.52s ease';
  //   (<HTMLInputElement>document.getElementById('contact')).style.opacity = '0';
  // }
  // turnoffmodel(){
  //   (<HTMLInputElement>document.getElementById('chat-modal')).style.visibility = 'hidden';
  //   (<HTMLInputElement>document.getElementById('chat-modal')).style.transform = 'translateX(300px)';
  //   (<HTMLInputElement>document.getElementById('chat-modal')).style.transition = '0.3s ease';
  //   (<HTMLInputElement>document.getElementById('contact')).style.opacity = '1';
  // }
  forgotModal() {
    (<HTMLInputElement>document.getElementById('logingif')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('forgotgif')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('loginmodel')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('requestotp')).style.display = 'block';
  }

  gotoresetpassword() {
    (<HTMLInputElement>document.getElementById('otprecieved')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('requestotp')).style.display = 'none';
  }

  confirmotp() {
    (<HTMLInputElement>document.getElementById('newpassword')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('otprecieved')).style.display = 'none'
  }





  openEyeDisabled01: boolean = false;
  passwordVisible01: boolean = false;

  openEye01() {
    (<HTMLInputElement>document.getElementById("open01")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open02")).style.display = 'none';
    this.openEyeDisabled01 = true;
    this.passwordVisible01 = false;
  }

  closeEye01() {
    (<HTMLInputElement>document.getElementById("open02")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open01")).style.display = 'none';
    this.openEyeDisabled01 = false;
    this.passwordVisible01 = true;
  }



  openEyeDisabled02: boolean = false;
  passwordVisible02: boolean = false;

  openEye02() {
    (<HTMLInputElement>document.getElementById("open03")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open04")).style.display = 'none';
    this.openEyeDisabled02 = true;
    this.passwordVisible02 = false;
  }

  closeEye02() {
    (<HTMLInputElement>document.getElementById("open04")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open03")).style.display = 'none';
    this.openEyeDisabled02 = false;
    this.passwordVisible02 = true;
  }


  backToLogin() {
    (<HTMLInputElement>document.getElementById('loginmodel')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('forgotgif')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('otprecieved')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('newpassword')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('requestotp')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('logingif')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('succcessful')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('succcessful')).style.display = 'none';
  }

  savePassword() {
    (<HTMLInputElement>document.getElementById('succcessful')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('newpassword')).style.display = 'none'
  }

  createDone() {
    (<HTMLInputElement>document.getElementById('accountcreated')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('createaccount')).style.display = 'none'
  }
  navigateTostudentprofile() {
    this.redirect.navigateByUrl('studentprofile')
  }
  
}
