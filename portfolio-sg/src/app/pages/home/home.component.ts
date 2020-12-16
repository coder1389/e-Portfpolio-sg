import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderComponent } from 'src/app/components/organisms/header/header.component';

@Component({
  selector: 'sg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private fragmentSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe((fragment) =>
      this.scrollElementIntoView(fragment)
    );
  }

  ngOnDestroy() {
    this.fragmentSubscription?.unsubscribe();
  }

  private scrollElementIntoView(fragment: string) {
    if (fragment) {
      const el = document.querySelector(`#${fragment}`);

      if (el) {
        const node = document.getElementById(fragment);
        const yourHeight = 105 + 20;

        node.scrollIntoView(true);

        const scrolledY = window.scrollY;

        if (scrolledY) {
          window.scroll(0, scrolledY - yourHeight);
        }

      } else {
        console.error(`No element defined for fragment: ${fragment}`)
      }
    }
  }
}
