import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { slideInOut } from '../../animations/slideInOut.animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    slideInOut,
    trigger('expand', [
      state('0', style({ height: '0px', opacity: 0 })),
      state('1', style({ height: '*', opacity: 1 })),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('400ms ease-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {

  public open = false;

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.open = !this.open;
  }
}
