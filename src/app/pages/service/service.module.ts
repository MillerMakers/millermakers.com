import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { BannerModule } from '../../components/banner/banner.module';
import { RouterModule } from '../../../../node_modules/@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    GalleryModule.forRoot({
        dots: true,
        loop: true,
        gestures: true,
        imageSize: 'cover',
        loadingStrategy: 'preload'
    }),
    LightboxModule.forRoot(),
    GallerizeModule,
    BannerModule
  ],
  declarations: [
    ServiceComponent
  ],
   exports: [
    ServiceComponent
   ]
})
export class ServiceModule { }
