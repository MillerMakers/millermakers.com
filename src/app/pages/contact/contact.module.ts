import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { BannerModule } from '../../components/banner/banner.module';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BannerModule,
    HttpClientModule
  ],
  declarations: [
    ContactComponent
  ],
   exports: [
    ContactComponent
   ]
})
export class ContactModule { }
