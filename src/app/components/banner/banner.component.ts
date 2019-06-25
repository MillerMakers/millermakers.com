import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @Input() header;
  @Input() subheader;
  @Input() image = '../../assets/images/white-1714170.jpg';
  @Input() banner?;
  @Input() overlay = true;
}
