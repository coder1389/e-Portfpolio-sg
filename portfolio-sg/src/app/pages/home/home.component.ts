import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private fragmentSubscription: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) =>
      this.scrollElementIntoView(fragment)
    );
  }

  ngOnDestroy() {
    this.fragmentSubscription?.unsubscribe();
  }

  private scrollElementIntoView(fragment: string) {
    const el = document.querySelector(`#${fragment}`);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
