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
      icon: "home",
      anchor: "home"
    },
    {
      description: "Themenbeschreibung",
      icon: "article",
      anchor: "topic"
    },
    {
      description: "Impressionen",
      icon: "visibility",
      anchor: "impressions"
    },
    {
      description: "Über mich",
      icon: "perm",
      anchor: "about"
    }
  ]
}
