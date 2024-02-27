import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  hideheader: boolean = true;
  modulename: string = '';
  ngOnInit(): void {
    // if (this.modulename === 'admin') {
    //   this.hideheader = false;
    // } else {
    //   this.hideheader = true;
    // }
  }
 
  refreshPage(): void {
    // No need to reset hideheader on page refresh
  }
  constructor() {

  }
  title = 'majorproject';

  ngAfterViewInit() {
    anime({
      targets: '.my-text-element',
      opacity: [0, 1],
      duration: 1500,
    });
  }
  openIcon() {
    const iconElement = document.getElementById("icon") as HTMLInputElement;
    const rotateElement = document.getElementById("rotate") as HTMLInputElement;
    const siconElement = document.getElementById("sicon") as HTMLInputElement;

    if (iconElement.style.opacity === '0') {
      iconElement.style.opacity = '1';
      rotateElement.style.transform = 'rotate(45deg)';
    } else {
      iconElement.style.opacity = '0';
      rotateElement.style.transform = 'rotate(0deg)';
    }


    rotateElement.style.transition = '.5s';
    iconElement.style.transition = '.5s';
  }
}
