import { Component, OnInit, ViewChild, Inject, OnDestroy, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private _routerSubscription: Subscription;

  @ViewChild('header', {read: ElementRef}) private header: ElementRef;

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private doc: any
  ) {}

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this._routerSubscription = this.router.events
    .pipe(filter((event) => !(event instanceof NavigationEnd)))
    .subscribe(this.handleRouteChange);
  }

  private handleRouteChange = () => {
    this.header.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}
