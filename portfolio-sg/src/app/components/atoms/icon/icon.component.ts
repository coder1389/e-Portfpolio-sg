import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  
  @Input() name: 'arrow_up' | 'article' | 'home' | 'perm' | 'visibility';

  constructor() { }

  ngOnInit(): void {
  }

}
