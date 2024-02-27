import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {
  ngAfterViewInit() {
    anime({
      targets: '.my-text-element',
      opacity: [0, 1],
      duration: 1500,
    });
  }

  teacherInfo=[
    {name:' Danish',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/7.jpg'},
    {name:' Imran',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/8.jpg'},
    {name:' Imran',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/9.webp'},
    {name:' Imran',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/10.webp'},
    {name:' Imran',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/11.jpg'},
    {name:' Imran',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/12.jpg'},
    {name:' Imran',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/13.jpg'},
    {name:' Imran',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/14.jpg'},
    {name:' Danish',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/15.jpg'},
    {name:' Danish',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/16.jpg'},
    {name:' Danish',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/17.jpg'},
    {name:' Danish',qualification:'  Bsc Math(hons)',age:' 25',institution:' Manuu',img:'assets/teachers/18.jpg'},
  ]




  
}
