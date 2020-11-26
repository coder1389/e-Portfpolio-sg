import { Component, OnInit } from '@angular/core';

import { CardAnimation } from '../../../base/animations/card.animation';

@Component({
  selector: 'sg-topic-description',
  templateUrl: './topic-description.component.html',
  styleUrls: ['./topic-description.component.scss'],
  animations: [CardAnimation],
})
export class TopicDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
