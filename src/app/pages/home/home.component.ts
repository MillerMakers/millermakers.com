import { ViewportScroller } from '@angular/common';
import { Component, ViewChild, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Typed from 'typed.js';

import services, { IService } from './../../constants/services.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  public headers: string[] = [
    'Welcome!',
    'Thanks for stopping by.',
    'Check out some of the services we offer below.',
    'We are now booking 2019 appointments',
    'It\'s the little things in life that make the biggest impact.'
  ];

  public services: IService[] = services;
  @ViewChild('typer') typer;

  private typed: Typed;

  constructor(
    private activatedRoute: ActivatedRoute,
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2
  ) { }

  ngOnDestroy(): void {
    if (this.typed) {
      this.typed.destroy();
    }
  }

  ngAfterViewInit() {
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment === 'services') {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });

    this.typed = new Typed(this.typer.nativeElement, {
      strings: this.headers,
      typeSpeed: 40,
      backSpeed: 50,
      startDelay: 1200,
      // allows us to have sentences that contain the same beginning get reused, neat effect
      smartBackspace: true,
      backDelay: 3000,
      // loop: true,
      // loopCount: 3,
      showCursor: true,
      onStart: (arrayPos: number, self: Typed) => {
        // need to get the typed-span hidden and re-enabled after first string
        // this.typer.nativeElement
      },
      onComplete: (self: Typed) => {
        this.renderer.addClass(this.typer.nativeElement, 'complete');
      }
    });
  }
}
