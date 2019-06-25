import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import services, { IService } from './../../constants/services.constant';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  public service: IService;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.service = this.findServiceBySlug(
      services,
      this.activatedRoute.snapshot.params.slug
    );
  }

  private findServiceBySlug(collection: IService[], slug: string): IService {
    const filtered = services.filter((s: IService) => {
      return s.slug && s.slug === slug;
    });

    return filtered.length
      ? filtered[0]
      : null;
  }

}
