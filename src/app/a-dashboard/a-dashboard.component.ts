import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { transition } from '@angular/animations';
@Component({
  selector: 'app-a-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrls: ['./a-dashboard.component.scss']
})
export class ADashboardComponent implements OnInit {
  constructor(public redirect: Router) {

  }
  hideHeader: boolean = false;
  ngOnInit(): void {
    this.ChangeFilterTab('dashboard');
    // this.headerComponent.hide();
  }

  activeItem: number = 0;
  setActiveItem(itemNumber: number, pagename: string): void {
    this.activeItem = itemNumber;
    if (pagename === 'managestudent') {
      this.redirect.navigateByUrl('managestudent');
    }
  }


  showTabBar: string = 'dashboard';
  ChangeFilterTab(elementId: string) { 
    this.showTabBar = elementId;
    const element = (<HTMLCollection>document.getElementsByClassName('filter-tab')) as any;
    for (let i = 0; i < element.length; i++) {
      element[i]['style'].background = 'transparent';
      element[i]['style'].color = '#000';
      element[i]['style'].borderLeft = '4px solid transparent';
      element[i]['style'].fontWeight = '400';
      if (elementId === element[i].id) {
        element[i]['style'].borderLeft = '4px solid red';
        element[i]['style'].color = 'blue';
        element[i]['style'].fontWeight = '600';
        element[i]['style'].background = '#ffece0';
      }
    }
  }
  // navigateTomanageStudent(pagename:string) {
  //   this.redirect.navigateByUrl('managestudent');
  // }
  slideLeft() {
    // (<HTMLInputElement>document.getElementById('dashitem')).style.width = '5%';
    // (<HTMLInputElement>document.getElementById('allpage')).style.width = '95%';

    const dashitem = document.getElementById('dashitem') as HTMLInputElement;
    dashitem.style.width = dashitem.style.width === '5%' ? '21%' : '5%';
    dashitem.style.transition = '.5s';
    dashitem.style.height = '100vh';

    const hamheader = document.getElementById('hamheader') as HTMLInputElement;
    hamheader.style.padding = hamheader.style.padding === '10px' ? '0' :'10px'

    const allpage = document.getElementById('allpage') as HTMLInputElement;
    allpage.style.width = allpage.style.width === '95%' ? '79%' : '95%';
    allpage.style.transition = '.5s'


    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i] as HTMLElement;
      tab.style.display = tab.style.display === 'none' ? 'block' : 'none';
    }
  }
}
