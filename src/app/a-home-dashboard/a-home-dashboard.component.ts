import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-a-home-dashboard',
  templateUrl: './a-home-dashboard.component.html',
  styleUrls: ['./a-home-dashboard.component.scss']
})
export class AHomeDashboardComponent {

  constructor(public redirect:Router){

  }


navigateToteacherlogin(){
  this.redirect.navigateByUrl('teacherlogin');
  (<HTMLInputElement>document.getElementById('common-header')).style.display = 'block'
}
 
}
