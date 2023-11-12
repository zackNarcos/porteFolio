import {Component, HostListener, Renderer2} from '@angular/core';
import {ButtonComponent} from "../controls/button/button.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent
  ]
})
export class HeaderComponent {
  private header!: HTMLElement;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Calculer une valeur pour la couleur en fonction de la position de défilement
    const colorValue = Math.min(scrollPosition / 5, 255);

    // Utiliser la couleur calculée pour définir le fond de l'en-tête
    // this.renderer.setStyle(this.header, 'background-color', `rgb(${colorValue}, ${colorValue}, ${colorValue})`);
    if (colorValue > 10) {
      this.renderer.setAttribute(document.querySelector('html'), 'data-theme', 'dark');
      console.log('dark')
    } else {
      this.renderer.setAttribute(document.querySelector('html'), 'data-theme', 'light');
    }
  }

  ngOnInit() {
    this.header = document.getElementById('container') as HTMLElement;
  }
}
