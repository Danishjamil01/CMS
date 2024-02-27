import { Component, HostListener, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  hideheader: boolean = false;
  modulename: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private redirect:Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.activatedRoute.root.firstChild?.snapshot;
        if (currentRoute) {
          this.modulename = currentRoute.data?.['module']; // Accessing using index signature
          this.updateHeaderVisibility();
        }
      }
    });
  }

  updateHeaderVisibility(): void {
    if (this.modulename === 'admin') {
      this.hideheader = true; // Hide the header when modulename is 'admin'
    } else {
      this.hideheader = false; // Show the header for other modules
    }
  }

  

  backgroundColor: string = 'white';
  @HostListener('window : scroll', ['$event']) windowScroll() {
    const navbar = document.getElementById('common-header');
    const navitem = document.getElementById('navlink');
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      if (!!navbar) {
        navbar.style.background = 'rgba(0,0,0,0.7)';
        navbar.style.boxShadow = 'var(--box-shadow)'
        navbar.style.width = '100%'
        navbar.style.padding = '15px 15px'
        navbar.style.transition = '0.5s ease'
      }
    }
    else {
      if (!!navbar) {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none'
        navbar.style.padding = '10px'
        navbar.style.transition = '0.5s ease'
      }
    }
  }






  navigateTo(pagename: string) {
    if (pagename === 'HOME') {
      this.redirect.navigateByUrl('')
    }
    else if (pagename === 'COURCES') {
      this.redirect.navigateByUrl('cources');
    }
    else if (pagename === 'SHEDULE') {
      this.redirect.navigateByUrl('shedule');
    }
    else if (pagename === 'SERVICES') {
      this.redirect.navigateByUrl('services')
    }
    else if (pagename === 'TEACHER') {
      this.redirect.navigateByUrl('teacher')
    }
  }
  navigateTologin() {
    this.redirect.navigateByUrl('login')
  }
  navigateToteacherlogin() {
    this.redirect.navigateByUrl('teacherlogin')
  }

  // openlogin(){
  //   (<HTMLInputElement>document.getElementById('loginmodal')).style.display = 'block' ? 'none' : 'block';
  // }
  openlogin(): void {
    const loginModal = document.getElementById('loginmodal') as HTMLInputElement;
    loginModal.style.display = loginModal.style.display === 'block' ? 'none' : 'block';
  }

  // navitem(){
  //   (<HTMLInputElement>document.getElementById('navline')).style.visibility = 'visible';
  // }
  // }

  // isAUtoFocus: boolean = true;
  //   @ViewChild('agInput', { static: true }) public elm: ElementRef;
  //   ngAfterViewInit(): void {
  //     setTimeout(() => {
  //       this.setFocus();
  //     }, 200);
  //   }
  //   setFocus() {
  //     this.elm.nativeElement.focus();
  //   }
  //   ngOnDestroy() {
  //     this.isAUtoFocus = false;
  //   }

}
