import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;
  activeLink = 'home';

  constructor(private eRef: ElementRef) {}

  // Toggle mobile menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close menu when a link is clicked
  setActive(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;
  }

  // Scroll detection for header effect
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Detect clicks outside the header
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.isMenuOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.isMenuOpen = false;
    }
  }

  // Detect window resize and close menu if switching to desktop
  @HostListener('window:resize', [])
  onResize() {
    if (window.innerWidth >= 1000 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
