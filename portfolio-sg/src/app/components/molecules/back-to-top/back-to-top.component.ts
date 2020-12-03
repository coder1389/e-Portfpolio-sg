import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'sg-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {

  @HostBinding('class.show') show: boolean;

  @HostListener('window:scroll') onScroll() {
    this.show = window.pageYOffset > 200
  }

  @HostListener('click') onClick() {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
