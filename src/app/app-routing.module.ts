import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MeetComponent } from './pages/meet/meet.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProcessComponent } from './pages/process/process.component';
import { StyleComponent } from './pages/style/style.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'meet',
    component: MeetComponent
  },
  {
    path: 'process',
    component: ProcessComponent
  },
  {
    path: 'style',
    component: StyleComponent
  },
  {
    path: 'inquire',
    component: ContactComponent
  },
  {
    path: 'services/:slug',
    component: ServiceComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
