import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { DiagonalComponent } from './diagonal/diagonal.component';
import { HexagonalComponent } from './hexagonal/hexagonal.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from "./scroll-to-top/scroll-to-top.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    DiagonalComponent,
    HexagonalComponent,
    TimelineComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'NEURAL INTERFACE';
}
