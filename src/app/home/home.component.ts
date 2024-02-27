import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import anime from 'animejs/lib/anime.es.js';
import * as AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit() {
    anime({
      targets: '.my-text-element',
      opacity: [0, 1],
      duration: 1500,
    });
  }


  slides = [
    {
      img: 'assets/banner/002.jpg', text1: 'START INVESTING', text6: 'IN',
      text7: 'YOUR FUTURE TODAY', text8: 'We Have The Largest Collection Of Course',
      text_1: '332', text_2: 'Courses', text_3: '500', text_4: 'Members', text_5: '40',
      text_6: 'Authors', text_7: '100', text_8: 'Subject'
    },
    { img: 'assets/banner/001.jpg', text2: 'WITH BEST TEACHER' },
    { img: 'assets/banner/003.jpg', text3: 'WITH TOP STUDENT' },
    { img: 'assets/banner/004.jpg', text4: 'TOP FACILITIES' },
    { img: 'assets/banner/005.jpg', text5: 'BEST GUIDENCE' },


  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    dots: true,
    speed: 1000,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };






  offers = [
    { img: 'assets/cources/01.webp', text: 'Ui/Ux Designer', paragraph: "Dr Subhash Chandra", paragraph3: "New Delhi-India", oldPrice: '₹ 17,000', newPrice: '₹ 15,000', button: 'Apply Now' },
    { img: 'assets/cources/02.jpeg', text: 'Web Designer', paragraph: "Dr Arun Prasad", paragraph3: "Dwarka-India", oldPrice: '₹ 6,500', newPrice: '₹ 5,000', button: 'Apply Now' },
    { img: 'assets/cources/03.webp', text: 'Frontend Development', paragraph: "Dr Avtar Singh Bath", paragraph3: "New Delhi-India", oldPrice: '₹ 4,000', newPrice: '₹ 2900', button: 'Apply Now' },
    { img: 'assets/cources/04.webp', text: 'Backend Developer', paragraph: "Dr AniL Kumar Guliya", paragraph3: "Dwarka-India", oldPrice: '₹ 5,000', newPrice: '₹ 3,900', button: 'Apply Now' },
    { img: 'assets/cources/05.webp', text: 'Ethical Hacking', paragraph: "Dr Rajeev Varma", paragraph3: "Dwarka-India", oldPrice: '₹ 16,000', newPrice: '₹ 14,000', button: 'Apply Now' },
    { img: 'assets/cources/06.webp', text: 'Artifitial Intelligence', paragraph: "Dr Chandragouda Dodagoudar", paragraph3: "New Delhi-India", oldPrice: '₹ 19,000', newPrice: '₹ 17,000', button: 'Apply Now' },
    { img: 'assets/cources/07.jpeg', text: 'Machine Learning', paragraph: "Dr Sunil Kumar Kansal", paragraph3: "New Delhi-India", oldPrice: '₹ 28,000', newPrice: '₹ 24,000', button: 'Apply Now' },
    { img: 'assets/cources/08.jpg', text: 'Networking', paragraph: "Dr Rohit Bansil", paragraph3: "New Delhi-India", oldPrice: '₹ 8,000', newPrice: '₹ 40,000', button: 'Apply Now' },
    { img: 'assets/cources/09.jpeg', text: 'Photography', paragraph: "Dr Puneet Girdhar", paragraph3: "New Delhi-India", oldPrice: '₹ 7,000', newPrice: '₹ 5,400', button: 'Apply Now' },
    { img: 'assets/cources/10.jpeg', text: 'Music', paragraph: "Dr   Z.S Mehrawal", paragraph3: "New Delhi-India", oldPrice: '₹ 5,000', newPrice: '₹ 3,500', button: 'Apply Now' },
  ]
  slideimg = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };


  teachers = [
    { img: 'assets/teachers/6.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/teachers/2.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/teachers/3.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/teachers/4.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/teachers/5.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
  ];
  slidepic = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };

  students = [
    { img: 'assets/students/1.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/students/2.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/students/3.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/students/4.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
    { img: 'assets/students/6.jpg', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores maxime voluptate assumenda quo fugiat' },
  ];
  slidepics = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: false
        }
      }
    ]
  };




  constructor(public redirect: Router) {

  }
  navigateToteacher() {
    this.redirect.navigateByUrl('teacher');
  }

  navigateTostudent() {
    this.redirect.navigateByUrl('student');
  }

  navigateTocources() {
    this.redirect.navigateByUrl('cources');
  }


  goToPayment() {
    (<HTMLInputElement>document.getElementById('register')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('payment')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('close')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('back')).style.display = 'block';
  }



  goBack() {
    (<HTMLInputElement>document.getElementById('register')).style.display = 'block';
    (<HTMLInputElement>document.getElementById('payment')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('back')).style.display = 'none';
    (<HTMLInputElement>document.getElementById('close')).style.display = 'block';
  }


  showData = false;
  toggleData() {
    this.showData = !this.showData;
  }

  paymentInfo = [
    { companyName: 'CMS', orderId: 1526555, product: 'Python', gst: '20%',price:'1000' }
  ]
  cardInfo = [
    { cardholder: 'Danish Jamil' , cardnumber:'**** 1234',cardexpiry:'09 / 25'}
  ]
  
}