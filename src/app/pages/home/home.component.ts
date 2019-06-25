import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import services, { IService } from './../../constants/services.constant';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  public services: IService[] = services;

  private _subscription: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this._subscription = this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment === 'services') {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
