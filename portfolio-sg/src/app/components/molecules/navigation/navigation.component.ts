import { Component } from '@angular/core';

@Component({
  selector: 'sg-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  anchors = [
    {
      description: "Willkommen",
      anchor: "home"
    },
    {
      description: "Themenbeschreibung",
      anchor: "topic"
    },
    {
      description: "Impressionen",
      anchor: "impressions"
    },
    {
      description: "Über mich",
      anchor: "about"
    }
  ]
}
