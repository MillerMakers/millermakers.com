import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() header;
  @Input() subheader;
  @Input() image;
  @Input() banner?;
  @Input() opacity = 1;
  @Input() overlay = true;
}
