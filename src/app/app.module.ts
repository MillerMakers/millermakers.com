import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { MeetComponent } from './pages/meet/meet.component';
import { ServiceImageSliderComponent } from './components/service-image-slider/service-image-slider.component';
import { NguCarouselModule } from '../../node_modules/@ngu/carousel';
import { ServiceModule } from './pages/service/service.module';
import { BannerModule } from './components/banner/banner.module';
import { ContactModule } from './pages/contact/contact.module';
import { ProcessComponent } from './pages/process/process.component';
import { StyleComponent } from './pages/style/style.component';
import { InstaGalleryComponent } from './components/insta-gallery/insta-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    MeetComponent,
    ServiceImageSliderComponent,
    ProcessComponent,
    StyleComponent,
    InstaGalleryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NguCarouselModule,
    ContactModule,
    BannerModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
