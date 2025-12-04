import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { DiagonalComponent } from '../diagonal/diagonal.component';
import { HexagonalComponent } from '../hexagonal/hexagonal.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    DiagonalComponent,
    HexagonalComponent,
    TimelineComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopComponent,
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-diagonal></app-diagonal>
    <app-hexagonal></app-hexagonal>
    <app-timeline></app-timeline>
    <app-contact></app-contact>
    <app-scroll-to-top></app-scroll-to-top>
    <app-footer></app-footer>
  `,
})
export class HomePageComponent {}
