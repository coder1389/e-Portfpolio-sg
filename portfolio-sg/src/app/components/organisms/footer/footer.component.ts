import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  yearIndication: string;

  readonly externalLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/coder1389',
      icon: 'github',
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/danijel.malinovic.10/',
      icon: 'facebook',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    const date = new Date();

    this.yearIndication =
      date.getFullYear() == 2020 ? '2020' : `2020 - ${date.getFullYear}`;
  }
}
