import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderService } from '../header.service';



@Component({
  selector: 'app-teacherlogin',
  templateUrl: './teacherlogin.component.html',
  styleUrls: ['./teacherlogin.component.scss']
})
export class TeacherloginComponent {









  

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


  openOption() {
    (<HTMLInputElement>document.getElementById('option')).style.opacity = '1';
    (<HTMLInputElement>document.getElementById('option')).style.transition = '.5s'
  }

  teacherSingup() {
    (<HTMLInputElement>document.getElementById('openSignup')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('openSignup')).style.top = '0';
    (<HTMLInputElement>document.getElementById('openSignup')).style.transition = '.5s'
  }
  turnOff() {
    (<HTMLInputElement>document.getElementById('openSignup')).style.display = 'none';
    // (<HTMLInputElement>document.getElementById('openSignup')).style.transform = 'translateX(-100px)';
    (<HTMLInputElement>document.getElementById('openSignup')).style.transition = '0.5s';
  }
  optionOff() {
    (<HTMLInputElement>document.getElementById('option')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('option')).style.transition = '.5s';
  }


  // alert(){
  //   alert("Password Reset Successfully");

  // }


  showReset() {
    (<HTMLInputElement>document.getElementById('reset')).style.visibility = 'visible';
    (<HTMLInputElement>document.getElementById('none')).style.visibility = 'hidden';
    (<HTMLInputElement>document.getElementById('arrow')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('hide')).style.display = 'none';
  }
  turnleft() {
    (<HTMLInputElement>document.getElementById('reset')).style.visibility = 'hidden';
    (<HTMLInputElement>document.getElementById('none')).style.visibility = 'visible';
    (<HTMLInputElement>document.getElementById('arrow')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('hide')).style.display = 'block';
  }

  navigateToreset() {
    (<HTMLInputElement>document.getElementById('reset_password')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('reset')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('arrow')).style.display = 'none';
  }




  openEyeDisabled3: boolean = false;
  passwordVisible3: boolean = false;

  openEye_1() {
    (<HTMLInputElement>document.getElementById("open7")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open8")).style.display = 'none';
    this.openEyeDisabled3 = true;
    this.passwordVisible3 = false;
  }

  closeEye_1() {
    (<HTMLInputElement>document.getElementById("open8")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open7")).style.display = 'none';
    this.openEyeDisabled3 = false;
    this.passwordVisible3 = true;
  }
  openEyeDisabled4: boolean = false;
  passwordVisible4: boolean = false;

  openEye_2() {
    (<HTMLInputElement>document.getElementById("open9")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open10")).style.display = 'none';
    this.openEyeDisabled4 = true;
    this.passwordVisible4 = false;
  }

  closeEye_2() {
    (<HTMLInputElement>document.getElementById("open10")).style.display = 'block';
    (<HTMLInputElement>document.getElementById("open9")).style.display = 'none';
    this.openEyeDisabled4 = false;
    this.passwordVisible4 = true;
  }

  resetSuccess() {
    (<HTMLInputElement>document.getElementById('changed-gif')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('forgot-gif')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('hide-1')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('successful')).style.display = 'block';
  }








  selectedImage: string | null = null;

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const fileList = inputElement.files;

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      const fileSizeKB = file.size / 1024; // Calculate file size in KB

      if (fileSizeKB <= 200) {
        this.readFileContent(file);
      } else {
        // File size exceeds 200KB, show an error or handle accordingly
        console.log("File size exceeds 200KB");
        this.selectedImage = null;
      }
    } else {
      this.selectedImage = null;
    }
  }

  readFileContent(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      // Get the data URL representing the image
      this.selectedImage = reader.result as string;
    };

    reader.readAsDataURL(file);
  }



  constructor(private redirect: Router) {

  }





  username: string = '';
  password: string = '';
  errorMessage: string = '';
  role: string = '';

  login() {
    // Add your login logic herethis.role
    if (this.username === 'admin' && this.password === '00' && this.role === 'Instiitute Head') {
      this.redirect.navigateByUrl('admin/dashboard');
      alert('login successful\n' + 'username : ' + this.username);
      (<HTMLInputElement>document.getElementById('rotate-icon')).style.display = 'none';
      // (<HTMLInputElement>document.getElementById('common-header')).style.display = 'none';
    }
    else if(this.username === 'teacher' && this.password === '00' && this.role === 'Instiitute Instructor'){
      this.redirect.navigateByUrl('admin/teacherprofile');
      (<HTMLInputElement>document.getElementById('rotate-icon')).style.display = 'none';
      // (<HTMLInputElement>document.getElementById('common-header')).style.display = 'none';
    }
    else {
      this.errorMessage = 'Invalid username or password';
    }

  }
}
