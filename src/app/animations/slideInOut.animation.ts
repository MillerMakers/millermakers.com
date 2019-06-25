import { trigger, transition, style, animate, state, group } from '@angular/animations';

/**
 * Slide In and out an element based on boolean condition
 *
 * Performs a fade of opacity along with a dynamic adjustment of
 * the container height from 0 to *
 *
 * @USAGE:
 *  <ng-container *ngIf="showCondition" [@slideInOut]></ng-container>
 */
export const slideInOut = trigger('slideInOut', [
  state('active', style({height: '*', opacity: 0})),
  transition('void => *', [
    style({height: '0', opacity: 0, overflow: 'hidden'}),
    group([
        animate(150, style({height: '*'})),
        animate('150ms ease-in-out', style({opacity: '1'}))
    ])
  ]),
  transition('* => void', [
    style({height: '*', opacity: 1, overflow: 'hidden'}),
    group([
        animate(150, style({height: 0})),
        animate('150ms ease-in-out', style({opacity: '0'}))
    ])
  ])
]);
